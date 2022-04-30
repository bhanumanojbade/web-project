import React, { useState, useContext, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

export const AppContext = React.createContext({
    productList: [],
    user: null,
    selectedProduct: null,
    setUser: () => { },
    setSelectedProduct: () => { },
    clearSession: () => { },
    cartItems: [],
    setCartItemsfn: () => { }
});

export const AppProvider = ({ children }) => {
    const history = useHistory();
    const appContext = useContext(AppContext);
    const [productList, setProductList] = useState(appContext.productList);
    const [user, setUserDetails] = useState(appContext.user);
    const [selectedProduct, setSelectedProduct] = useState(appContext.selectedProduct);
    const [cartItems, setcartItems] = useState(appContext.cartItems);

    const setUser = (userData) => {
        setUserDetails(userData);
    };
    const setSelectedProductfn = (product) => {
        setSelectedProduct(product);
    }
    const setCartItemsfn = (items) => {
        setcartItems(items);
    };

    const clearSession = () => {
        setUserDetails(null);
        history.push(`/auth`);
    };

    const provider = {
        productList,
        user,
        selectedProduct,
        cartItems,
        setUser: useCallback(setUser, []),
        setSelectedProductfn: useCallback(setSelectedProductfn, []),
        setCartItemsfn: useCallback(setCartItemsfn, []),
        clearSession: useCallback(clearSession, []),
    };

    return (
        <AppContext.Provider value={provider}>{children}</AppContext.Provider>
    );
};