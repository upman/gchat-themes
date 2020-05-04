import { Theme } from '../types';

type ThemeMeta = keyof Theme["props"]
    | 'sideBarBackground'
    | 'unreadChannelColor'
    | 'channelColor';

var themeMeta: { [m in ThemeMeta]: { type: 'color' | 'text', label: string } } = {
    primaryText: {
        type: 'color',
        label: 'Primary Text'
    },
    secondaryText: {
        type: 'color',
        label: 'Secondary Text'
    },
    mentions: {
        type: 'color',
        label: 'Mentions Text'
    },
    mentionNotificationBackground: {
        type: 'color',
        label: 'Your Mention background'
    },
    inlineMarkdownText: {
        type: 'color',
        label: 'Inline Markdown'
    },
    multilineMarkdownText: {
        type: 'color',
        label: 'Multi-line Markdown'
    },
    links: {
        type: 'color',
        label: 'Links'
    },
    icons: {
        type: 'color',
        label: 'Icons'
    },
    threadBackground: {
        type: 'color',
        label: 'Chat thread background'
    },
    inlineMarkdownBackground: {
        type: 'color',
        label: 'Inline Markdown Background'
    },
    threadContainerBackground: {
        type: 'color',
        label: 'Thread Container Background'
    },
    chatTitleBackground: {
        type: 'color',
        label: 'Active Chat Name Background'
    },
    hoverBackground: {
        type: 'color',
        label: 'Hover Background'
    },
    buttonBackground: {
        type: 'color',
        label: 'Button Background'
    },
    iconHoverBackground: {
        type: 'color',
        label: 'Icon hover color'
    },
    threadBorderColor: {
        type: 'color',
        label: 'Chat thread border color'
    },
    multiLineMarkdownBorderColor: {
        type: 'color',
        label: 'Multi-line Markdown Border color'
    },
    inlineMarkdownBorder: {
        type: 'text',
        label: 'Inline Markdown Border color'
    },
    borders: {
        type: 'text',
        label: 'Other Borders'
    },
    shadows: {
        type: 'text',
        label: 'Shadows'
    },
    searchBarActiveBackground: {
        type: 'color',
        label: 'Chat title search background'
    },
    sideBarBackground: {
        type: 'color',
        label: 'Sidebar background'
    },
    unreadChannelColor: {
        type: 'color',
        label: 'Unread Channel title color'
    },
    channelColor: {
        type: 'color',
        label: 'Channel title color'
    }
};

export default themeMeta;
