import type { customStyleSheet } from './types';


export const contentContainerSelector = 'div[data-soft-view-id] > c-wiz[role="main"] > div';
export const threadContainerSelector = 'c-wiz[data-topic-id] > div:nth-of-type(2)';
export const messageContainerSelector = 'div[data-id][data-user-id][data-created][jsname] > div > div > div:nth-of-type(2)';
export const messageHoverContainerSelector = 'div[data-id][data-user-id][data-created][jsname] > div > div > div:nth-of-type(2) > div:nth-of-type(2)';
export const messageMarginSelector = 'div[data-id][data-user-id][data-created][jsname][aria-labelledby]';
export const threadExpandSelector = 'c-wiz[data-topic-id] > div:nth-of-type(2) > div:nth-of-type(2) > div[role="button"]:nth-of-type(2) > span:nth-child(2)';
export const threadExpandCountSelector = 'c-wiz[data-topic-id] > div:nth-of-type(2) > div:nth-of-type(2) > div[role="button"]:nth-of-type(2) > div > div > div';
export const logoContainerSelector = 'svg > g:nth-child(2) > g > g > g > g > g > g > g > g';
export const iconSvgSelector =
    'body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > span svg,' +
    'c-wiz[data-node-index] > div:nth-child(1) > span:nth-child(2) > span > svg, ' +
    'c-wiz > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) svg, ' +
    'c-wiz > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(1) svg';

export function getSelectorStyle(
    selector: string,
    extractClassname?: (el: Element) => string,
    partialSelectorText?: boolean,
    jsSelector?: (arr: NodeList) => Node | null,

): CSSStyleRule | null {
    var el;
    if (jsSelector) {
        el = jsSelector(document.querySelectorAll(selector));
    } else {
        el = document.querySelector(selector);
    }

    if (!el) {
        return null;
    }
    var contentContainerClass = extractClassname ? extractClassname(el) : `.${el.className}`;
    return findStyle(contentContainerClass, partialSelectorText);
}

export function findStyle(selectorText: string, partial?: boolean) : CSSStyleRule | null {
    var styleSheet = <customStyleSheet>document.styleSheets[1];
    for (var i = 0; i < styleSheet.rules.length; i+=1) {
        if (
            partial ?
                (
                    styleSheet.rules[i].selectorText &&
                    styleSheet.rules[i].selectorText.match(selectorText)
                ) :
                styleSheet.rules[i].selectorText === selectorText
        ) {
            return styleSheet.rules[i];
        }
    }

    return null;
}

function replaceRule(rule, prop, config) {
    if (rule.style && rule.style[prop] === config.from) {
        if (Array.isArray(config.to)) {
            for(var toidx = 0; toidx < config.to.length; toidx += 1) {
                var configTo = config.to[toidx];
                rule.style[configTo.prop] = configTo.value;
            }
        } else {
            rule.style[prop] = config.to;
        }
    }
}

export function replaceStyles(replaceConfig, styleSheetIndex) {
    var replaceProps = Object.keys(replaceConfig);
    var styleSheet = <customStyleSheet>document.styleSheets[styleSheetIndex];
    for (var ruleidx = 0; ruleidx < styleSheet.rules.length; ruleidx += 1) {
        var rule = styleSheet.rules[ruleidx];

        for(var keyidx = 0; keyidx < replaceProps.length; keyidx += 1) {
            var prop = replaceProps[keyidx];
            var config = replaceConfig[prop];

            if (Array.isArray(config)) {
                for(var configidx = 0; configidx < config.length; configidx += 1) {
                    replaceRule(rule, prop, config[configidx]);
                }
            } else {
                replaceRule(rule, prop, config);
            }
        }
    }
}

export function getLogoContainer() {
    return document.querySelector(logoContainerSelector);
}

export function getIconSvgs() {
    return document.querySelectorAll(iconSvgSelector);
}
