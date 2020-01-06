const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const outputDir = "./dist";

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"), //
    output: {
        path: path.join(__dirname, outputDir),
        filename: "[name].js",
        publicPath: "/dist/"
    },
    resolve: {
        extensions: [".js"] 
    },
    module: {
        rules: [{
                test: /\.js$/, 
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        exclude: /node_modules/
                    } 
                }
            },
            {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: "../",
                            hmr: process.env.NODE_ENV === "development"
                        }
                    },
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.scss/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: "../",
                            hmr: process.env.NODE_ENV === "development"
                        }
                    },
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"
                ]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: "[name].css",
        chunkFilename: "[id].css",
        ignoreOrder: false // Enable to remove warnings about conflicting order
    }), require("autoprefixer")]
};