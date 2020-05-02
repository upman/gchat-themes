import { each } from 'lodash';
import themes from '../themes';
import { getAppliedTheme, setAppliedTheme } from '../utils';

$(document).ready(function() {
    $('#color-picker').spectrum({
        //@ts-ignore
        type: 'text',
        color: 'black',
        showPalette: false
    });

    const themeSelect = $('#theme-picker');
    themeSelect.change(function(event) {
        // @ts-ignore
        const theme = event.target.value;

        if (theme) {
            // Message received in background.ts
            // chrome.runtime.sendMessage({themeChange: theme}, function(response) {
            //     console.log(response);
            // });
            setAppliedTheme(theme);
        }
    });

    getAppliedTheme(function(theme) {
        console.log('theme', theme);
        each(themes, function(t, name) {
            debugger;
            const option = $('<option>').attr('value', name).text(name);
            if (theme.name === name) {
                option.attr('selected', '');
            }

            themeSelect.append(option);
        });
    });
});

