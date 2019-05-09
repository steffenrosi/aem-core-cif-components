/*******************************************************************************
 * ADOBE CONFIDENTIAL
 * __________________
 *
 * Copyright 2019 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 ******************************************************************************/

const path = require('path');
const nodeExternals = require('webpack-node-externals');
// path relative to the JCR root
const AEM_COMPONENT_PATH = 'apps/venia/components/commerce/minicart/v1/minicart';
const CLIENTLIB_PATH = 'clientlib/js';
const OUTPUT = '../../../../../content/jcr_root';

module.exports = {
    entry: {
        MiniCart: "./src/index.js"
    },
    output: {
        filename: `${OUTPUT}/${AEM_COMPONENT_PATH}/${CLIENTLIB_PATH}/[name].js`
    },
    module: {
        rules: [{
            include: [path.resolve(__dirname, 'src'), '/cif-components-common\/src\//'],
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader"
            }]
        }]
    },
    mode: "development",
    devtool:"eval-source-map"
};