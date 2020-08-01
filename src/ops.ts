import {
    getLogoContainer,
    getIconSvgs,
} from './dom';
import each from 'lodash/each';
import mapValues from 'lodash/mapValues';
import map from 'lodash/map';
import some from 'lodash/some';
import range from 'lodash/range';
import keys from 'lodash/keys';


import type { Theme } from './types';
import ruleSwaps from './ruleSwaps';

function switchLogoColor(color) {
    var logoContainer = getLogoContainer();
    if (!logoContainer) {
        return false;
    }
    // @ts-ignore
    logoContainer.style = `fill: ${color};`;
    return false;
}

function switchIconsColor(color) {
    var iconSvgs = getIconSvgs();
    for(var idx = 0; idx < iconSvgs.length; idx += 1) {
        //@ts-ignore
        iconSvgs[idx].style = `fill: ${color}`;
    }
}

function cssRuleMatchesSwap(rule, swap) {
    // @ts-ignore
    var match  = some(swap.initial, function(i) {
        //@ts-ignore
        return rule.style && rule.style[swap.prop] === i;
    });

    var selectorMatch = swap.selectorTexts && some(swap.selectorTexts, function (i) {
        return rule.style && rule.selectorText === i;
    });
    return match || selectorMatch;
}

export function applyTheme(theme: Theme) {
    switchLogoColor(theme.unreadChannelColor ? theme.unreadChannelColor : theme.props.primaryText);
    switchIconsColor(theme.props.icons);
    each(keys(theme.props).concat(['misc']), function(themeProp) {
        applyThemeProperty(theme, themeProp, theme.props[themeProp]);
    });
}

export function applyThemeProperty(theme: Theme, themeProp, themeValue) {
    //@ts-ignore
    var ruleSwaps = window.googleChatThemesRuleSwapList[themeProp];
    each(ruleSwaps, function(swap) {
        each(swap.matchedStyleRules, function(rule) {
            if (swap.transform) {
                return swap.transform(theme, themeProp, themeValue, rule.style);
            }
            if (rule.style && rule.style[swap.prop]) {
                rule.style[swap.prop] = themeValue;
            }
        });
    });
}

export function getMatchedStyleRules(swap, styleSheet) {
    var matchedStyleRules = [];
    var cssRules;
    try {
        // @ts-ignore
        cssRules = styleSheet.cssRules;
    } catch(e) {
        // Cannot read external stylesheet
        return matchedStyleRules;
    }
    //@ts-ignore
    each(cssRules, function(rule) {
        if (cssRuleMatchesSwap(rule, swap)) {
            matchedStyleRules.push(rule);
        }
    });

    return matchedStyleRules;
}

export function addRuleSwaps(styleSheet) {
    // @ts-ignore
    mapValues(window.googleChatThemesRuleSwapList, function(swaps) {
        return map(swaps, function(swap) {
            var newStyleRules = getMatchedStyleRules(swap.swap, styleSheet);
            swap.matchedStyleRules = swap.matchedStyleRules.concat(newStyleRules);
        });
    });
}

export function initializeRuleSwapList() {
    const ruleSwapList = mapValues(ruleSwaps, function(swaps) {
        return map(swaps, function(swap) {
            return {
                swap: swap,
                //@ts-ignore
                prop: swap.prop,
                matchedStyleRules: [],
                selectorText: swap.selectorText,
                //@ts-ignore
                ...(swap.transform ? { transform: swap.transform } : {})
            }
        });
    });

    // @ts-ignore
    window.googleChatThemesRuleSwapList = ruleSwapList;
}

function getStyleSheetSignature(styleSheet) {
    if (styleSheet.href) {
        return styleSheet.href;
    }

    var cssRules;
    try {
        // @ts-ignore
        cssRules = styleSheet.cssRules;
    } catch(e) {
        // Cannot read external stylesheet
        return;
    }

    return map(cssRules, function(rule) {
        return rule.selectorText ? rule.selectorText : '';
    }).join('');
}

export function onStyleSheetLoaded(cb) {
    var loadedStyleSheetSignatures = {};
    function checkLoaded() {
        each(range(1, document.styleSheets.length), function(index) {
            const signature = getStyleSheetSignature(document.styleSheets[index]);

            if (!loadedStyleSheetSignatures[signature]) {
                loadedStyleSheetSignatures[signature] = true;
                cb(document.styleSheets[index]);
            }
        });
    }
    checkLoaded();
    setInterval(checkLoaded, 1000);
}

export function addCustomStyles() {
    const css = `
        .cmEq8b .Z4BnXb {
            color: black;
        }

        .d6pS5 {
            box-shadow: none;
        }
    `
    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
}
