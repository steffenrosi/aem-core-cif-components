describe('PageContext unit tests', () => {
    let cartInfo = {
        cartId: '1234',
        cartQuote: 'ABCD'
    };
    let expectedCookie = `cif.cart=${cartInfo.cartId}#${cartInfo.cartQuote}`;

    beforeEach(() => {
        // remove the cart cookie before each test
        document.cookie =
            'cif.cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    });

    it('tests the tests', () => {
        expect(true).to.be.true;
    });

    it('sets the cart information cookie', () => {
        let pageContext = new PageContext();

        pageContext.setCartInfoCookie(cartInfo);
        expect(document.cookie).to.exist;
        expect(document.cookie).to.equal(expectedCookie);
    });

    it('reads the cart information from cookie', () => {
        document.cookie = expectedCookie;

        let pageContext = new PageContext();
        expect(pageContext.cartInfo).to.deep.equal(cartInfo);
    });
});
