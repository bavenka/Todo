const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["react-hot-loader", "babel-loader"]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"']
                })
            }
        ]
    },
    devtool: "source-map",
    plugins: [
        new ExtractTextPlugin({
                filename: 'bundle.css'
            }
        )
    ]
};