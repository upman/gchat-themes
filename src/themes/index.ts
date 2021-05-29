import dark from './dark';
import defaultMode from './default';
import slackTheme from './slack';

export default {
    // The keys here are used as copy in the select box in popup.ts
    [defaultMode.name]: defaultMode,
    [dark.name]: dark,
    // Slack mode doesn't work with the new mail.google.com/chat
    // Commenting out for now
    // [slackTheme.name]: slackTheme,
};
