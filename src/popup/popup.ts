import { each } from 'lodash';
import themes from '../themes';

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
        const theme = themes[event.target.value];

        if (theme) {
            // Message received in background.ts
            chrome.runtime.sendMessage({themeChange: theme}, function(response) {
                console.log(response);
            });
        }
    });

    each(themes, function(theme, name) {
        themeSelect.append(
            $('<option>').attr('value', name).text(name)
        );
    });
});

