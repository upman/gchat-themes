import {
    getLogoContainer,
    getIconSvgs,
} from './dom';
import { each, mapValues, map, some, range, keys } from 'lodash';
import dark from './themes/dark';
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
    return match;
}

function getMatchedStyleRulesForSwap(swap) {
    var matchedStyleRules = [];
    each(range(1, document.styleSheets.length), function(index) {
        var cssRules;
        try {
            // @ts-ignore
            cssRules = document.styleSheets[index].cssRules;
        } catch(e) {
            // Cannot read external stylesheet
            console.log(e, index);
            return;
        }
        //@ts-ignore
        each(cssRules, function(rule) {
            if (cssRuleMatchesSwap(rule, swap)) {
                matchedStyleRules.push(rule);
            }
        });
    });

    return matchedStyleRules
}

export function createRuleSwapList() {
    const ruleSwapList = mapValues(ruleSwaps, function(swaps) {
        return map(swaps, function(swap) {
            return {
                //@ts-ignore
                prop: swap.prop,
                matchedStyleRules: getMatchedStyleRulesForSwap(swap),
                //@ts-ignore
                ...(swap.transform ? { transform: swap.transform } : {})
            }
        });
    });

    // @ts-ignore
    window.googleChatThemesRuleSwapList = ruleSwapList;
}

export function applyTheme(theme: Theme) {
    switchLogoColor(theme.primaryText);
    switchIconsColor(theme.icons);
    each(keys(theme).concat(['misc']), function(themeProp) {
        applyThemeProperty(themeProp, theme[themeProp]);
    });
}

export function applyThemeProperty(themeProp, themeValue) {
    //@ts-ignore
    var ruleSwaps = window.googleChatThemesRuleSwapList[themeProp];
    each(ruleSwaps, function(swap) {
        each(swap.matchedStyleRules, function(rule) {
            if (rule.selectorText === '.yg4pvb::before' && swap.initial && swap.initial[0] === 'linear-gradient(90deg, rgba(255, 255, 255, 0), rgb(255, 255, 255) 50%)') {
                debugger;
            }
            if (swap.transform) {
                return swap.transform(themeValue, rule.style);
            }
            rule.style[swap.prop] = themeValue;
        });
    });
}

export const allOps = [
    createRuleSwapList,
    function() {
        applyTheme(dark);
    }
];
