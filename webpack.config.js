const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        "chrome-extension/src/content": "./src/content.ts",
        "chrome-extension/src/background": "./src/background.ts",
        "chrome-extension/src/popup": "./src/popup/popup.ts",
        "standalone/dark-mode": "./src/standalone/darkMode.ts",
        "standalone/slack-mode": "./src/standalone/slackMode.ts"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".js", ".tsx"]
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader" },
            {
                test: /\.tsx$/,
                exclude: path.join(__dirname, 'node_modules'),
                loader: 'ts-loader',
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "@teamsupercell/typings-for-css-modules-loader",
                    {
                        loader: "css-loader",
                        options: { modules: true }
                    }
                ]
            }
        ],
    },
    optimization: {
        minimize: false,
        usedExports: true
    },
    plugins: [
        new CopyPlugin([
            { from: 'images', to: 'dist/chrome-extension/images', transformPath: function(targetPath) {
                return path.join('..', targetPath);
            }},
            { from: 'manifest.json', to: 'dist/chrome-extension/manifest.json', transformPath: function(targetPath) {
                return path.join('..', targetPath);
            } },
            { from: 'icon.png', to: 'dist/chrome-extension/icon.png', transformPath: function(targetPath) {
                return path.join('..', targetPath);
            } },
            { from: 'src/popup/popup.html', to: 'dist/chrome-extension/src/popup/popup.html', transformPath: function(targetPath) {
                return path.join('..', targetPath);
            } },
            { from: 'src/popup/style.css', to: 'dist/chrome-extension/src/popup/style.css', transformPath: function(targetPath) {
                return path.join('..', targetPath);
            } },
        ]),
    ],
    watch: true,
}