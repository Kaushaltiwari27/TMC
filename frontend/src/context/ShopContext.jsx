import React, { createContext, useState } from "react"; // Import useState
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '₹';
    const delivery_fee = 10;
    // const [cart, setCart] = useState([]); // Initialize cart state

    const value = {
        products,
        currency,
        delivery_fee,
       
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children} {/* Render children components */}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;