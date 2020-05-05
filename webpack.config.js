const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        "chrome-plugin/src/content": "./src/content.ts",
        "chrome-plugin/src/background": "./src/background.ts",
        "chrome-plugin/src/popup": "./src/popup/popup.ts",
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
            { from: 'images', to: 'dist/chrome-plugin/images', transformPath: function(targetPath) {
                return path.join('..', targetPath);
            }},
            { from: 'manifest.json', to: 'dist/chrome-plugin/manifest.json', transformPath: function(targetPath) {
                return path.join('..', targetPath);
            } },
            { from: 'src/popup/popup.html', to: 'dist/chrome-plugin/src/popup/popup.html', transformPath: function(targetPath) {
                return path.join('..', targetPath);
            } },
            { from: 'src/popup/style.css', to: 'dist/chrome-plugin/src/popup/style.css', transformPath: function(targetPath) {
                return path.join('..', targetPath);
            } },
        ]),
    ],
    watch: true,
}