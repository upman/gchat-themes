const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        "content": "./src/content.ts",
        "background": "./src/background.ts"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist', 'src')
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".js"]
    },
    module: {
        rules: [{ test: /\.ts$/, loader: "ts-loader" }]
    },
    optimization: {
        minimize: false
    },
    plugins: [
        new CopyPlugin([
            { from: 'images', to: 'images', transformPath: function(targetPath) {
                return path.join('..', targetPath);
            }},
            { from: 'manifest.json', to: 'manifest.json', transformPath: function(targetPath) {
                return path.join('..', targetPath);
            } },
            { from: 'src/popup', to: 'src/popup', transformPath: function(targetPath) {
                return path.join('..', targetPath);
            } },
        ]),
    ],
    watch: true,
}