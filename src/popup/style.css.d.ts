declare namespace StyleCssModule {
  export interface IStyleCss {
    colorPicker: string;
    colorSwatch: string;
    colorText: string;
    cover: string;
    credit: string;
    customThemeContainer: string;
    popupContainer: string;
    propInput: string;
    propertyBlock: string;
    propertyLabel: string;
    propertyValue: string;
  }
}

declare const StyleCssModule: StyleCssModule.IStyleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleCssModule.IStyleCss;
};

export = StyleCssModule;
