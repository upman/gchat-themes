import React, { Component } from 'react';
import Themes from '../themes';
import { setAppliedTheme } from '../storage';
import styles from './style.css';
export default class PopupContainer extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign(Object.assign({}, props), { appliedTheme: Themes[this.props.appliedThemeName] || props.customThemes.find(function (customTheme) {
                return customTheme.name === props.appliedThemeName;
            }) });
    }
    onThemeChange(e) {
        setAppliedTheme(e.target.value);
    }
    render() {
        const { appliedThemeName } = this.state;
        return (React.createElement("div", { className: styles.popupContainer },
            React.createElement("label", null, "Theme"),
            React.createElement("select", { id: "theme-picker", onChange: this.onThemeChange },
                Object.keys(Themes).map(function (themeName) {
                    return (React.createElement("option", { selected: themeName === appliedThemeName }, themeName));
                }),
                this.props.customThemes.map(function (customTheme) {
                    return (React.createElement("option", { selected: customTheme.name === appliedThemeName }, customTheme.name));
                }))));
    }
}
