export type customNode = Node & {
    className: string;
    getAttribute: (attr: string) => string;
}

export type customStyleSheet = StyleSheet & {
    rules: Array<CSSStyleRule>;
    cssRules: Array<CSSStyleRule>;
}

export type Theme = {
    primaryText: string,
    secondaryText: string,
    mentions: string,
    inlineMarkdown: string,
    multilineMarkdown: string,
    links: string,
    icons: string,
    threadBackground: string,
    threadContainerBackground: string,
    chatTitleBackground: string,
    hoverBackground: string,
    mentionNotificationBackground: string,
    inlineMarkdownBackground: string,
    actionButtonBackground: string,
    iconHoverBackground: string,
    threadBorder: string,
    multiLineMarkdownBorder: string,
    inlineMarkdownBorder: string,
    sidebarBorder: string,
    shadows: string,
    gChatLogoText: string,
    searchBarActiveBackground: string
}