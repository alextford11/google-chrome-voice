const path = require("path");
const entryDir = path.resolve(__dirname, "app/popup");
const outputDir = path.resolve(__dirname, "build/scripts");

module.exports = {
    mode: "development",
    entry: entryDir,
    output: {
        path: outputDir,
        filename: "popup.js"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
        ]
    },
    node: {
        fs: "empty",
        tls: "empty",
        net: "empty"
    }
};
