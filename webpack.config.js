const path = require('path');
module.exports = {
    entry: "./src/content.ts",
    output: {
        filename: "content.js",
        path: path.resolve(__dirname, 'dist')
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
    watch: true,
}