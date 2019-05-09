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

window.CIF = window.CIF || {};


function PageContext() {
    let pageMask = document.querySelector("button.mask__root");
    console.log("Hello from the PageContext");
    return {
        maskPage: function () {
            pageMask.classList.toggle("mask__root_active");
        },
        unmaskPage: function () {
            pageMask.classList.toggle("mask__root_active");
        }
    }
}

const pageContext = new PageContext();

// put it in the window context, just in case somebody else wants to use it
window.CIF.PageContext = pageContext;

export {pageContext}
