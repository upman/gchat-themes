# Google Themes
A chrome extension that lets you customise the font, color, backgrounds on Google Chat.
Comes out of the box with a dark mode and slack mode.

![Screenshot](https://media.giphy.com/media/QyztI0D81FHvcfTPuc/giphy.gif)

## Installation
1. Download "Source code (zip)" of the latest version in [Releases](https://github.bus.zalan.do/Pandora/gchat-themes/releases)
Or clone `git@github.bus.zalan.do:Pandora/gchat-themes.git` if you are comfortable with Git
2. Unzip the downloaded zip file
3. In Chrome, go to 'Settings > Extensions'
4. Enable 'Developer mode'
5. Click on 'Load unpacked extension...' and select folder `dist/chrome-extension` in the folder that you just unzipped
6. Reload google chat

## Firefox / Standalone scripts
Download the repository with the same instructions as above and then install `dist/standalone/dark-mode.js` or `dist/standalone/slack-mode.js` into your [tamper](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) / [grease monkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) plugin.

## Development
Run `yarn dev`, output ends up in `dist` directory. Install this using the instructions above.
There is a reload button on the extensions page that can be used when you make changes.

## Contributing a new theme
Create a file in the `themes` directory with all the values specified and create a pull request.
Use `themes/slack.ts` or `themes/dark.ts` as examples.
