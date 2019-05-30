describe('PageContext unit tests', () => {
    let cartInfo = {
        cartId: '1234',
        cartQuote: 'ABCD'
    };
    let expectedCookie = `cif.cart=${cartInfo.cartId}#${cartInfo.cartQuote}`;

    it('tests the tests', () => {
        assert.equal(true, true);
    });

    it('sets the cart information cookie', () => {
        document.cookie =
            'cif.cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        let pageContext = new PageContext();

        pageContext.setCartInfoCookie(cartInfo);
        assert.exists(document.cookie);
        assert.equal(document.cookie, expectedCookie);
    });

    it('reads the cart information from cookie', () => {
        document.cookie =
            'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = expectedCookie;

        let pageContext = new PageContext();
        assert.deepEqual(pageContext.cartInfo, cartInfo);
    });
});
