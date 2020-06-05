const path = require("path");
const entryDir = path.resolve(__dirname, "app/popup");
const outputDir = path.resolve(__dirname, "build/scripts");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    mode: "production",
    entry: entryDir,
    output: {
        path: outputDir,
        filename: "popup.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    optimization: {
        concatenateModules: true,
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: 4,
                uglifyOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ]
    },
    node: {
        fs: "empty",
        tls: "empty",
        net: "empty"
    }
};
