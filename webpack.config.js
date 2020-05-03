const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        "content": "./src/content.ts",
        "background": "./src/background.ts",
        "popup": "./src/popup/popup.ts"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist', 'src')
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
            { from: 'images', to: 'images', transformPath: function(targetPath) {
                return path.join('..', targetPath);
            }},
            { from: 'manifest.json', to: 'manifest.json', transformPath: function(targetPath) {
                return path.join('..', targetPath);
            } },
            { from: 'src/popup/popup.html', to: 'src/popup/popup.html', transformPath: function(targetPath) {
                return path.join('..', targetPath);
            } },
            { from: 'src/popup/style.css', to: 'src/popup/style.css', transformPath: function(targetPath) {
                return path.join('..', targetPath);
            } },
            { from: 'vendor', to: 'vendor', transformPath: function(targetPath) {
                return path.join('..', targetPath);
            } },
        ]),
    ],
    watch: true,
}