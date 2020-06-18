const path = require("path");
const outputDir = path.resolve(__dirname, "build/scripts");

module.exports = {
    mode: "development",
    entry: {
        popup: path.resolve(__dirname, "app/popup"),
        background: path.resolve(__dirname, "app/js/background.js"),
        contentscript: path.resolve(__dirname, "app/js/contentscript.js"),
        options: path.resolve(__dirname, "app/js/options.js")
    },
    output: {
        path: outputDir,
        filename: "[name].js"
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
