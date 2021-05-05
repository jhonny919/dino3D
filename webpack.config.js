const path = require("path");
const htmlWebpack = require("html-webpack-plugin");
const { CleanWebpackPlugin: cleanWebpack } = require("clean-webpack-plugin");
const copyWebpack = require("copy-webpack-plugin");
const miniCss = require("mini-css-extract-plugin");
const optimizeCss = require("optimize-css-assets-webpack-plugin");
const terserWebpack = require("terser-webpack-plugin");

const isProd = false;

const optimization = () => {
    let conf = {
        splitChunks: {
            chunks: "all",
        },
    };

    if (isProd) {
        conf.minimizer = [new optimizeCss(), new terserWebpack()];
    }

    return conf;
};

module.exports = {
    entry: "./app/src/index.js",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "build"),
    },
    mode: "development",
    devServer: {
        port: 9191,
        open: true,
    },
    devtool: isProd ? "eval" : "source-map",
    optimization: optimization(),
    plugins: [
        new htmlWebpack({
            template: "./app/public/index.html",
            minify: {
                collapseWhitespace: isProd,
            },
        }),
        new cleanWebpack(),
        new copyWebpack({
            patterns: [
                {
                    from: path.resolve(__dirname, "app/public/assets"),
                    to: path.resolve(__dirname, "build"),
                },
            ],
        }),
        new miniCss({
            filename: "[name].[contenthash].css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [miniCss.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/,
                use: [miniCss.loader, "css-loader", "sass-loader"],
            },
        ],
    },
};
