import React, { createContext, useState, useEffect } from "react";
import all_product from '../components/assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length; i++) {
        cart[all_product[i].id] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : getDefaultCart();
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const getTotalCartAmount = () => {
        return all_product.reduce((total, product) => {
            const productQuantity = cartItems[product.id] || 0;
            const productTotal = productQuantity * parseFloat(product.new_price);
            return total + productTotal;
        }, 0);
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const clearCart = () => {
        setCartItems({});
    };

    const contextValue = { getTotalCartAmount, getTotalCartItems, all_product, cartItems, addToCart, removeFromCart, clearCart };

    console.log(cartItems);

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
