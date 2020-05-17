import type { Theme } from '../types';

const darkTheme: Theme = {
    name: 'Dark Mode',
    props: {
        primaryText: 'rgb(231, 232, 235)',
        secondaryText: 'rgb(136, 153, 166)',
        mentions: 'rgb(65, 173, 240)',
        inlineMarkdownText: 'rgb(245, 245, 245)',
        multilineMarkdownText: 'rgb(239, 239, 239)',
        links: 'rgb(65, 173, 240)',
        icons: 'rgba(255, 255, 255, 0.54)',
        threadBackground: 'rgb(25, 39, 52)',
        threadContainerBackground: 'rgb(21, 32, 43)',
        chatTitleBackground: 'rgb(0, 0, 0)',
        hoverBackground: 'rgb(32, 48, 61)',
        mentionNotificationBackground: 'rgb(65, 173, 240)',
        inlineMarkdownBackground: 'rgb(55, 86, 115)',
        buttonBackground: 'rgb(29, 161, 242)',
        iconHoverBackground: 'rgba(226, 230, 234, 0.14)',
        threadBorderColor: 'rgb(83, 102, 115)',
        multiLineMarkdownBorderColor: 'rgb(71, 110, 146)',
        inlineMarkdownBorder: '1px solid rgb(62, 97, 130)',
        borders: '1px solid rgb(135, 143, 156)',
        shadows: 'rgba(154, 190, 214, 0.5) 0px 1px 2px 0px, rgba(154, 190, 214, 0.25) 0px 1px 3px 1px',
        searchBarActiveBackground: 'rgb(25, 39, 52)',
        font: 'Roboto, sans-serif'
    },
    topBarBackground: 'rgb(25, 39, 52)',
    userNameColor: 'rgb(231, 232, 235)'
};

export default darkTheme;
