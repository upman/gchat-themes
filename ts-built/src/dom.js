export const logoContainerSelector = 'svg > g:nth-child(2) > g > g > g > g > g > g > g > g';
export const iconSvgSelector = 'body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > span svg,' +
    'c-wiz[data-node-index] > div:nth-child(1) > span:nth-child(2) > span > svg, ' +
    'c-wiz > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) svg, ' +
    'c-wiz > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(1) svg';
export function getLogoContainer() {
    return document.querySelector(logoContainerSelector);
}
export function getIconSvgs() {
    return document.querySelectorAll(iconSvgSelector);
}
