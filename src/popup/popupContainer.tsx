import React, { Component, Fragment, ChangeEvent } from 'react';
import ReactSelect from 'react-select';
// @ts-ignore
import { ChromePicker } from 'react-color';
import debounce from 'lodash/debounce';
import cx from 'classnames';

import { Theme } from '../types';
import Themes from '../themes';
import { setAppliedTheme, writeCustomThemes } from '../storage';
import styles from './style.css';
import ThemeMeta from '../themes/themeMeta';

type Props = {
    appliedTheme: Theme,
    customThemes: Theme[]
};

type valueType = {
    label: string,
    value: string
};

type RGBA = { r: number, g: number, b: number, a: number};
type State = Props & {
    appliedThemeValue: valueType,
    colorPickerActive: string | null
};

function rgbaToString(rgba: RGBA): string {
    const { r, g, b, a} = rgba;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export default class PopupContainer extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
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

    writeCustomThemeChange = debounce(() => {
        const customThemeIndex = this.props.customThemes.findIndex((ct) => ct.name === this.props.appliedTheme.name);
        this.props.customThemes[customThemeIndex] = this.state.appliedTheme;
        writeCustomThemes(this.props.customThemes);
    }, 300);

    handleCustomColorChange = (color: RGBA, metaKey: string) => {
        const { appliedTheme } = this.state;

        appliedTheme.props[metaKey] ?
            appliedTheme.props[metaKey] = rgbaToString(color) :
            appliedTheme[metaKey] = rgbaToString(color);
        this.setState({
            appliedTheme
        });
        this.writeCustomThemeChange();
    }

    handleTextFieldChange = (e: ChangeEvent<HTMLInputElement>, metaKey: string) => {
        const { appliedTheme } = this.state;

        appliedTheme.props[metaKey] ?
            appliedTheme.props[metaKey] = e.target.value :
            appliedTheme[metaKey] = e.target.value;

        this.setState({
            appliedTheme
        });

        this.writeCustomThemeChange();
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
        const isCustomTheme = appliedTheme && appliedTheme.isCustom;
        return (
            <div className={cx(styles.popupContainer, {
                [styles.customThemeContainer]: isCustomTheme
            })}>
                <ReactSelect
                    id="theme-picker"
                    onChange={this.onThemeChange}
                    value={appliedThemeValue}
                    options={themeOptions.concat(customThemeOptions)}
                    autoBlur
                />
                {
                    isCustomTheme && (
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
                                                (<input className={styles.propInput} value={propertyValue} onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleTextFieldChange(e, metaKey)}></input>)
                                        }
                                        {
                                            this.state.colorPickerActive && this.state.colorPickerActive === metaKey && (
                                                <ChromePickerWrapper
                                                    onClose={() => this.setState({ colorPickerActive: null })}
                                                    color={propertyValue}
                                                    onChange={({ rgb }: { rgb: RGBA }) => this.handleCustomColorChange(rgb, metaKey)}
                                                />
                                            )
                                        }
                                    </div>

                                </div>
                            )
                        })
                    )
                }
                <div className={styles.credit}>
                    Badge icon by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                </div>
            </div>
        );
    }
}

export class ChromePickerWrapper extends Component<{ color: string, onClose: () => void, onChange: (color: { rgb: { r: number, g: number, b: number, a: number} }) => void }> {
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
                    <ChromePicker color={this.props.color} onChange={this.props.onChange}/>
                </div>
                <div className={styles.cover} onClick={this.handleCoverClick}/>
            </Fragment>
        );
    }
}
