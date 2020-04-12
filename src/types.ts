export type customNode = Node & {
    className: string;
    getAttribute: (attr: string) => string;
}

export type customStyleSheet = StyleSheet & {
    rules: Array<CSSStyleRule>;
    cssRules: Array<CSSStyleRule>;
}
