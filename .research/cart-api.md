# LUMA API

## General
* `form_key` is be retrieved from cookie, after requesting a store page or cart.
* Some requests use a `uenc` value, please check https://maxchadwick.xyz/blog/wtf-is-uenc.
    * Base64 encoded product path.
    * Can be retrieved in GraphQL via `canonical_url` attribute.

## Add to Cart
> POST /index.php/checkout/cart/add/uenc/aHR0cDovLzEyNy4wLjAuMS9pbmRleC5waHAvYnJlYXRoZS1lYXN5LXRhbmsuaHRtbA%2C%2C/product/1818/

> POST /index.php/checkout/cart/add/product/1818/

### Parameters
```yaml
product: 1818                       # Product ID, not slug
selected_configurable_option: 
related_product: 
item: 1818
form_key: h5TAwW1nrxlhBuUj
super_attribute[145]: 168
super_attribute[93]: 59
qty: 1
```

## Get Cart
> GET /index.php/customer/section/load/?sections=cart%2Cmessages&force_new_section_timestamp=true&_=1560770536636

### Parameters
```yaml
sections: cart
force_new_section_timestamp: true
_: 1560770536636                    # Current timestamp
```

### Example Response
```json
{
    "cart": {
        "summary_count": 1,
        "subtotalAmount": "34.0000",
        "subtotal": "<span class=\"price\">$34.00<\/span>",
        "possible_onepage_checkout": true,
        "items": [
            {
                "product_type": "configurable",
                "options": [
                    {
                        "label": "Size",
                        "value": "M",
                        "option_id": 145,
                        "option_value": "169"
                    },
                    {
                        "label": "Color",
                        "value": "Yellow",
                        "option_id": 93,
                        "option_value": "60"
                    }
                ],
                "qty": 1,
                "item_id": "7",
                "configure_url": "https:\/\/127.0.0.1\/index.php\/checkout\/cart\/configure\/id\/7\/product_id\/1818\/",
                "is_visible_in_site_visibility": true,
                "product_id": "1818",
                "product_name": "Breathe-Easy Tank",
                "product_sku": "WT09-M-Yellow",
                "product_url": "http:\/\/127.0.0.1\/index.php\/breathe-easy-tank.html",
                "product_has_url": true,
                "product_price": "\n\n    <span class=\"price-excluding-tax\" data-label=\"Excl. Tax\">\n            <span class=\"minicart-price\">\n            <span class=\"price\">$34.00<\/span>        <\/span>\n\n        <\/span>\n",
                "product_price_value": 34,
                "product_image": {
                    "src": "http:\/\/127.0.0.1\/pub\/media\/catalog\/product\/cache\/dc09e1c71e492175f875827bcbf6a37c\/w\/t\/wt09-white_main_1.jpg",
                    "alt": "Breathe-Easy Tank",
                    "width": 75,
                    "height": 75
                },
                "canApplyMsrp": false
            }
        ],
        "extra_actions": "",
        "isGuestCheckoutAllowed": true,
        "website_id": "1",
        "storeId": "1",
        "subtotal_incl_tax": "<span class=\"price\">$34.00<\/span>",
        "subtotal_excl_tax": "<span class=\"price\">$34.00<\/span>",
        "data_id": 1560770609
    }
}
```

## Update Item in Cart
> POST /index.php/checkout/cart/updatePost/

### Parameters
```yaml
form_key: V9m8SJvT2LSzjypw
cart[7][qty]: 2                     # first index is item_id as returned from get cart
update_cart_action: update_qty
```

## Delete Item from Cart
> POST /index.php/checkout/cart/delete/

### Parameters
```yaml
id: 14376
uenc: aHR0cHM6Ly9tYXN0ZXItN3JxdHd0aS03enRleDRocTJiNm11LnVzLTMubWFnZW50b3NpdGUuY2xvdWQvaW5kZXgucGhwL2NoZWNrb3V0L2NhcnQv  # potentially optional
form_key: DlHLis31d08rs4zo
```