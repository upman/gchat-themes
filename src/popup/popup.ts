import React from 'react';
import ReactDOM from 'react-dom';

import PopupContainer from './popupContainer';
import { getCustomThemes, getAppliedTheme } from '../storage';

$(document).ready(function() {

    getCustomThemes(function(customThemes) {
        getAppliedTheme(function(appliedTheme) {
            var container = React.createElement(PopupContainer, {
                appliedTheme,
                customThemes
            });
            ReactDOM.hydrate(container, document.getElementById('popup-root'));
        });
    });
});

