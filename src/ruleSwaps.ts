import type { Theme } from './types';

const ruleSwaps: {[key in (keyof Theme["props"] | 'misc')]: Array<any>} = {
    primaryText: [{
        prop: 'color',
        initial: ['rgb(32, 33, 36)', 'rgb(34, 34, 34)', 'rgb(60, 64, 67)']
    }],
    secondaryText: [{
        prop: 'color',
        initial: ['rgb(95, 99, 104)']
    }],
    mentions: [{
        prop: 'color',
        initial: ['rgb(0, 121, 107)']
    }],
    inlineMarkdownText: [{
        prop: 'color',
        initial: ['rgb(231, 232, 235)']
    }],
    multilineMarkdownText: [{
        prop: 'color',
        initial: ['rgb(66, 66, 66)']
    }],
    links: [{
        prop: 'color',
        initial: ['rgb(26, 115, 232)']
    }],
    icons: [
        {
            prop: 'color',
            initial: ['rgba(0, 0, 0, 0.54)'],
            transform: function(theme, themeProp, themeValue, style) {
                style.color = themeValue;
                style.fill = themeValue;
            }
        },
        {
            prop: 'fill',
            initial: ['rgb(32, 33, 36)']
        }
    ],
    threadBackground: [{
        prop: 'backgroundColor',
        initial: ['rgb(255, 255, 255)']
    }],
    threadContainerBackground: [
        {
            prop: 'backgroundColor',
            initial: ['rgb(242, 242, 242)']
        },
        {
            // Account Dialog managed by dialog in accounts dropdown
            prop: 'background',
            intial: ['rgb(232, 240, 254)']
        }
    ],
    chatTitleBackground: [{
        prop: 'backgroundColor',
        initial: ['rgb(228, 247, 251)']
    }],
    hoverBackground: [
        {
            prop: 'backgroundColor',
            initial: ['rgb(248, 249, 250)']
        },
        {
            //Account drop down hover background
            prop: 'backgroundColor',
            initial: ['rgb(247, 248, 248)']
        }
    ],
    mentionNotificationBackground: [{
        prop: 'backgroundColor',
        initial: ['rgb(0, 121, 107)']
    }],
    inlineMarkdownBackground: [
        {
            prop: 'backgroundColor',
            initial: ['rgb(250, 250, 250)']
        },
        {
            // Chat number of members bubble
            prop: 'backgroundColor',
            initial: ['rgb(241, 243, 244)']
        }
    ],
    buttonBackground: [{
        prop: 'backgroundColor',
        initial: ['rgb(26, 115, 232)']
    }],
    iconHoverBackground: [{
        prop: 'backgroundColor',
        initial: ['rgba(95, 99, 104, 0.08)']
    }],
    threadBorderColor: [{
        prop: 'borderColor',
        initial: ['rgb(218, 220, 224)']
    }],
    multiLineMarkdownBorderColor: [{
        prop: 'borderColor',
        initial: ['rgb(224, 224, 224)']
    }],
    inlineMarkdownBorder: [{
        prop: 'border',
        initial: ['1px solid rgb(201, 201, 201)']
    }],
    borders: [
        {
            prop: 'borderBottom',
            initial: ['1px solid rgb(218, 220, 224)']
        },
        {
            prop: 'borderRight',
            initial: ['1px solid rgb(218, 220, 224)']
        }
    ],
    shadows: [{
        prop: 'boxShadow',
        initial: [
            'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
            'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'
        ]
    }],
    searchBarActiveBackground: [
        {
            prop: 'background',
            initial: ['rgb(255, 255, 255)']
        },
        {
            prop: 'backgroundColor',
            initial: ['rgba(255, 255, 255, 0.7)']
        }
    ],
    misc: [
        {
            prop: 'background',
            initial: ['linear-gradient(90deg, rgba(255, 255, 255, 0), rgb(255, 255, 255) 50%)'],
            transform: function(theme, themeProp, themeValue, style) {
                return style.background = '';
            }
        },
        {
            prop: 'backgroundImage',
            initial: ['linear-gradient(90deg, rgba(255, 255, 255, 0), rgb(255, 255, 255) 50%)'],
            transform: function(theme, themeProp, themeValue, style) {
                style.backgroundImage = '';
            }
        },
        {
            selectorTexts: ['.X9KLPc', '.yoV6yd', '.Riuhhf'],
            transform: function(theme, themeProp, themeValue, style) {
                if (theme.sideBarBackground) {
                    style.background = theme.sideBarBackground;
                } else {
                    style.background = '';
                }
            }
        },
        {
            selectorTexts: ['.PL5Wwe.H7du2 .t5F5nf', '.aOHsTc', ],
            transform: function(theme, themeProp, themeValue, style) {
                if (theme.unreadChannelColor) {
                    style.color = theme.unreadChannelColor;
                } else {
                    style.color = '';
                }
            }
        },
        {
            selectorTexts: ['.fKz7Od'],
            transform: function(theme, themeProp, themeValue, style) {
                if (theme.unreadChannelColor) {
                    style.fill = theme.unreadChannelColor;
                } else {
                    style.fill = '';
                }
            }
        },
        {
            selectorTexts: ['.t5F5nf, .wR3Nid'],
            transform: function(theme, themeProp, themeValue, style) {
                if (theme.channelColor) {
                    style.color = theme.channelColor;
                } else {
                    style.color = '';
                }
            }
        }
    ]
};

export default ruleSwaps;