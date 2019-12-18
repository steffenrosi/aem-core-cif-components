/*******************************************************************************
 *
 *    Copyright 2019 Adobe. All rights reserved.
 *    This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License. You may obtain a copy
 *    of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software distributed under
 *    the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *    OF ANY KIND, either express or implied. See the License for the specific language
 *    governing permissions and limitations under the License.
 *
 ******************************************************************************/
'use strict';

import ProductTeaser from '../../../../src/main/content/jcr_root/apps/core/cif/components/commerce/productteaser/v1/productteaser/clientlibs/js/actions.js';

let addToCartAction = `<button data-action="addToCart" data-item-sku="1234"
                class="button__root_highPriority button__root clickable__root button__filled" type="button">
            <span class="button__content"><span>Add to Cart</span></span>
        </button>`;

let seeMoreDetailsAction = `<button data-action="details" data-url="/some/random/url"
                class="button__root_highPriority button__root clickable__root button__filled" type="button">
            <span class="button__content"><span>See more details</span></span>
        </button>`;

let generateTeaserHtml = (button) => `<div class="item__root" data-cmp-is="productteaser">
  <a class="item__images" href="#"></a>
  <a class="item__name" href="#"><span>Sample product</span></a>
    <div class="item__price">
        <span> $0.99</span>
    </div>
    <div class="productteaser__cta">
       ${button}
    </div>      
</div>`;

describe('ProductTeaser', () => {
    let pageRoot;
    let teaserRoot;
    let fakeAssign;

    before(() => {

        sinon.stub(window.location, 'assign').callsFake(() => true);
        let body = document.querySelector('body');
        pageRoot = document.createElement('div');
        body.appendChild(pageRoot);
    });

    after(() => {
        pageRoot.parentNode.removeChild(pageRoot);
    });

    it('triggers the cart addition event for the Add To Cart CTA', () => {

        while (pageRoot.firstChild) {
            pageRoot.removeChild(pageRoot.firstChild);
        }

        pageRoot.insertAdjacentHTML('afterbegin', generateTeaserHtml(addToCartAction));
        teaserRoot = pageRoot.querySelector(ProductTeaser.selectors.rootElement);

        document.addEventListener('aem.cif.add-to-cart', () => {
            let response = document.createElement('div');
            response.classList.add('response');
            response.innerText = 'event triggered';
            pageRoot.appendChild(response);
        });

        console.log("Root o' the teaser", teaserRoot);
        const productTeaser = new ProductTeaser(teaserRoot);
        const button = teaserRoot.querySelector('button');
        button.click();

        const response = pageRoot.querySelector('div.response');
        assert.isNotNull(response);
    });

    it('navigates to another location for the See Details CTA', () => {

        while (pageRoot.firstChild) {
            pageRoot.removeChild(pageRoot.firstChild);
        }

        pageRoot.insertAdjacentHTML('afterbegin', generateTeaserHtml(seeMoreDetailsAction));
        teaserRoot = pageRoot.querySelector(ProductTeaser.selectors.rootElement);

        console.log("Root o' the teaser", teaserRoot);
        const productTeaser = new ProductTeaser(teaserRoot);
        const button = teaserRoot.querySelector('button');
        button.click();
        window.location.assign.should.be.true;
        
    });
});
