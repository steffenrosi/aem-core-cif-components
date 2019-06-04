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
