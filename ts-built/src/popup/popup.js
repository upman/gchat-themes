import React from 'react';
import ReactDOM from 'react-dom';
import PopupContainer from './popupContainer';
import { getCustomThemes, getAppliedTheme } from '../storage';
$(document).ready(function () {
    $('#color-picker').spectrum({
        //@ts-ignore
        type: 'text',
        color: 'black',
        showPalette: false
    });
    getCustomThemes(function (customThemes) {
        getAppliedTheme(function (appliedThemeName) {
            var container = React.createElement(PopupContainer, {
                appliedThemeName,
                customThemes
            });
            ReactDOM.hydrate(container, document.getElementById('popup-root'));
        });
    });
    // const themeSelect = $('#theme-picker');
    // themeSelect.change(function(event) {
    //     // @ts-ignore
    //     const theme = event.target.value;
    //     if (theme) {
    //         // Message received in background.ts
    //         // chrome.runtime.sendMessage({themeChange: theme}, function(response) {
    //         //     console.log(response);
    //         // });
    //         setAppliedTheme(theme);
    //     }
    // });
    // getAppliedTheme(function(theme) {
    //     each(themes, function(t, name) {
    //         const option = $('<option>').attr('value', name).text(name);
    //         if (theme.name === name) {
    //             option.attr('selected', '');
    //         }
    //         themeSelect.append(option);
    //     });
    // });
});
