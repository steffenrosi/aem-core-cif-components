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
// path relative to the JCR root
const AEM_COMPONENT_PATH = 'apps/venia/clientlibs/common';
const OUTPUT = '../../../../../content/jcr_root';

module.exports = {
    entry: {
        PageContext: "./src/index.js"
    },
    output: {
        filename: `${OUTPUT}/${AEM_COMPONENT_PATH}/js/[name].js`
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },
    mode: "development",
    devtool: "eval-source-map"
};