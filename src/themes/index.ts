import dark from './dark';
import defaultMode from './default';
import slackTheme from './slack';

export default {
    // The keys here are used as copy in the select box in popup.ts
    [defaultMode.name]: defaultMode,
    [dark.name]: dark,
    [slackTheme.name]: slackTheme,
};
