const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const getClientEnvironment = require('./env');
const paths = require('./paths');

const publicPath = '/';

const publicUrl = '';
const env = getClientEnvironment(publicUrl);
const moduleAliases = require('./moduleAliases');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: [
        require.resolve('./polyfills'),
        paths.appIndexJs,
        require.resolve('react-dev-utils/webpackHotDevClient'),
    ],
    output: {
        path: paths.appBuild,
        pathinfo: true,
        filename: 'static/js/bundle.js',
        chunkFilename: 'static/js/[name].chunk.js',
        publicPath,
    },
    resolve: {
        modules: ['node_modules', paths.appNodeModules].concat(
            process.env.NODE_PATH.split(path.delimiter).filter(Boolean),
        ),
        extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx', '.ts', '.tsx'],
        alias: {
            'react-native': 'react-native-web',
            ...moduleAliases,
        },
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                oneOf: [
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 10000,
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                    {
                        test: /\.(js|jsx|ts|tsx|mjs)$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                        options: {
                            rootMode: "upward",
                        }
                    },
                    {
                        test: /\.(le|c)ss$/,
                        sideEffects: true,
                        use: [
                            'style-loader',
                            'css-loader',
                        ],
                    },
                    {
                        exclude: [/\.js$/, /\.jsx$/, /\.ts$/, /\.tsx$/, /\.html$/, /\.json$/],
                        loader: require.resolve('file-loader'),
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml,
        }),
        new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
        new webpack.DefinePlugin(env.stringified),
        new CaseSensitivePathsPlugin(),
    ],
};
