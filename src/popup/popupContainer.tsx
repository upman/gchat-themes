import React, { Component, ChangeEvent } from 'react';
import ReactSelect from 'react-select';

import { Theme } from '../types';
import Themes from '../themes';
import { setAppliedTheme } from '../storage';
import styles from './style.css';

type Props = {
    appliedTheme: Theme,
    customThemes: Theme[]
};

type valueType = {
    label: string,
    value: string
};

type State = Props & {
    appliedThemeValue: valueType
};

export default class PopupContainer extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        console.log(props);
        this.state = {
            ...props,
            appliedThemeValue: {
                label: props.appliedTheme.name,
                value: props.appliedTheme.name
            },
            appliedTheme: props.appliedTheme
        };
    }

    onThemeChange = (value: valueType) => {
        setAppliedTheme(value.value);
        this.setState({
            appliedThemeValue: value,
            appliedTheme: Themes[value.value] || this.props.customThemes.find(c => c.name === value.value)
        });
    }

    render() {
        const { appliedThemeValue, appliedTheme } = this.state;
        const themeOptions = Object.keys(Themes).map(function(themeName: string) {
            return { value: themeName, label: themeName };
        });
        const customThemeOptions = this.props.customThemes.map(function(customTheme) {
            return {
                value: customTheme.name,
                label: customTheme.name
            }
        });
        return (
            <div className={styles.popupContainer}>
                <ReactSelect
                    id="theme-picker"
                    onChange={this.onThemeChange}
                    value={appliedThemeValue}
                    options={themeOptions.concat(customThemeOptions)}
                    autoBlur
                />
                {
                    appliedTheme && appliedTheme.isCustom && (
                        <span>CUSTOM!</span>
                    )
                }
            </div>
        );
    }
}
