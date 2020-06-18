const path = require("path");
const outputDir = path.resolve(__dirname, "build/scripts");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    mode: "production",
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
