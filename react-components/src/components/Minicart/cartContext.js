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

import React, {createContext, useContext, useReducer} from 'react';
import {object, func} from 'prop-types';
import {useCookieValue} from '../../utils/hooks';

export const initialState = {
    isOpen: false,
    isEditing: false,
    isLoading: false,
    editItem: {},
    cartId: null,
    cart: {},
    errorMessage: null,
    couponError: null,
    addItem: () => {},
    removeItem: () => {}
};

export const reducerFactory = setCartCookie => {
    return (state, action) => {
        switch (action.type) {
            case 'close':
                return {
                    ...state,
                    isOpen: false
                };
            case 'open':
                return {
                    ...state,
                    isOpen: true
                };
            case 'beginLoading':
                return {
                    ...state,
                    isLoading: true
                };
            case 'endLoading':
                return {
                    ...state,
                    isLoading: false
                };
            case 'beginEditing':
                return {
                    ...state,
                    isEditing: true,
                    editItem: action.item
                };
            case 'endEditing':
                return {
                    ...state,
                    isEditing: false,
                    editItem: {}
                };
            case 'cartId':
                return {
                    ...state,
                    cartId: action.cartId,
                    ...action.methods
                };
            case 'reset':
                setCartCookie('', 0);
                return {
                    ...state,
                    cartId: null,
                    isOpen: false,
                    errorMessage: null,
                    couponError: null
                };
            case 'cart':
                return {
                    ...state,
                    cart: action.cart,
                    isLoading: false,
                    couponError: !action.cart.applied_coupon ? state.couponError : null
                };
            case 'error':
                console.error(action.error);
                return {
                    ...state,
                    errorMessage: action.error
                };
            case 'couponError':
                return {
                    ...state,
                    couponError: action.error
                };

            default:
                return state;
        }
    };
};

export const CartContext = createContext();

export const CartProvider = props => {
    const factory = props.reducerFactory || reducerFactory;
    const state = props.initialState || initialState;

    const [, setCartCookie] = useCookieValue('cif.cart');

    const contextValue = useReducer(factory(setCartCookie), state);

    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    reducerFactory: func,
    initialState: object
};

export const useCartState = () => useContext(CartContext);
