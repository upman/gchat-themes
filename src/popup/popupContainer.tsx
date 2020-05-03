import React, { Component, Fragment } from 'react';
import ReactSelect from 'react-select';

import { Theme } from '../types';
import Themes from '../themes';
import { setAppliedTheme } from '../storage';
import styles from './style.css';
import ThemeMeta from '../themes/themeMeta';
// @ts-ignore
import { ChromePicker } from 'react-color';

type Props = {
    appliedTheme: Theme,
    customThemes: Theme[]
};

type valueType = {
    label: string,
    value: string
};

type State = Props & {
    appliedThemeValue: valueType,
    colorPickerActive: string | null
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
            appliedTheme: props.appliedTheme,
            colorPickerActive: null
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
                        Object.keys(ThemeMeta).map((metaKey) => {
                            const propertyValue = appliedTheme.props[metaKey] || appliedTheme[metaKey];
                            const propertyType = ThemeMeta[metaKey].type;
                            return (
                                <div className={styles.propertyBlock}>
                                    <div className={styles.propertyLabel}>{ThemeMeta[metaKey].label}</div>
                                    <div className={styles.propertyValue}>
                                        {
                                            propertyType === 'color' ?
                                                (
                                                    <Fragment>
                                                        <span
                                                            className={styles.colorSwatch}
                                                            style={{backgroundColor: propertyValue}}
                                                            onClick={() => this.setState({
                                                                colorPickerActive: metaKey
                                                            })}
                                                        ></span>
                                                        <span className={styles.colorText}>
                                                            {propertyValue}
                                                        </span>
                                                    </Fragment>
                                                ):
                                                (<input className={styles.propInput} value={propertyValue}></input>)
                                        }
                                        {
                                            this.state.colorPickerActive && this.state.colorPickerActive === metaKey && (
                                                <ChromePickerWrapper
                                                    onClose={() => this.setState({ colorPickerActive: null })}
                                                    color={propertyValue}
                                                />
                                            )
                                        }
                                    </div>

                                </div>
                            )
                        })
                    )
                }
            </div>
        );
    }
}

export class ChromePickerWrapper extends Component<{ color: string, onClose: () => void }> {
    colorPickerRef: React.RefObject<HTMLDivElement>;
    constructor(props) {
        super(props);
        this.colorPickerRef = React.createRef();
    }

    componentDidMount() {
        if (this.colorPickerRef.current) {
            this.colorPickerRef.current.scrollIntoView({
                block: 'nearest'
            });
        }
    }

    handleCoverClick = (event) => {
        this.props.onClose();
        const elementUnderCover = document.elementFromPoint(event.clientX, event.clientY);
        if (elementUnderCover) {
            // @ts-ignore
            elementUnderCover.click();
        }
    }

    render() {
        return (
            <Fragment>
                <div className={styles.colorPicker} ref={this.colorPickerRef}>
                    <ChromePicker color={this.props.color}/>
                </div>
                <div className={styles.cover} onClick={this.handleCoverClick}/>
            </Fragment>
        );
    }
}
