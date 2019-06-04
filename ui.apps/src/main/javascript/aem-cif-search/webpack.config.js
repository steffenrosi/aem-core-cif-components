/*******************************************************************************
 *
 *      Copyright 2019 Adobe. All rights reserved.
 *      This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *      you may not use this file except in compliance with the License. You may obtain a copy
 *      of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *      Unless required by applicable law or agreed to in writing, software distributed under
 *      the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *      OF ANY KIND, either express or implied. See the License for the specific language
 *      governing permissions and limitations under the License.
 *
 *
 ******************************************************************************/
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseComponentsPath = `${__dirname}/../../content/jcr_root/apps/venia/components/commerce`;
module.exports = {
    entry: {
        search: ['./src/search-component.js']
    },
    // output: {
    //     path: `${__dirname}/dist`,
    //     filename: 'main.js'
    // },
    output: {
        path: `${baseComponentsPath}`,
        filename: '[name]/v1/[name]/clientlibs/js/[name]-component.min.js'
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.graphql$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'graphql-tag/loader'
                    }
                ]
            },
            {
                test: /\.js/,
                exclude: /(node_modules|dist)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            [
                                '@babel/plugin-proposal-decorators',
                                {legacy: true}
                            ],
                            [
                                '@babel/plugin-proposal-class-properties',
                                {loose: true}
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.css/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader'
                ]
            }
        ]
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        clientLogLevel: 'info',

        port: 3000,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':
                'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers':
                'X-Requested-With, content-type, Authorization'
        },
        proxy: {
            '/magento/graphql': {
                target: {
                    host: 'localhost',
                    protocol: 'http:',
                    port: 8000
                },
                pathRewrite: {
                    '^/magento/*': '/magento/graphql'
                },
                logLevel: 'debug'
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css'
        })
    ]
};
