const path = require('path');
const webpack = require('webpack');
const htmlWepackPlugin = require('html-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const VENDOR_LIBS = [
    "react", "react-device-detect",
    "react-dom", "react-router-dom",
    "react-redux", "redux", "redux-thunk"
];
const config = {
    mode: 'development',
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: '/node_modules/'
            }, {
                use: ['style-loader', 'css-loader'],
                // loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                test: /\.css$/
            }, {
                loader: 'file-loader',
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.svg$|\.woff$\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/
            }
        ]
    },
    devServer: {
        historyApiFallback: {
            disableDotRule: true
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery'
        }),
        new htmlWepackPlugin({
            template: 'src/index.html'
        })
    ]
};

module.exports = config;