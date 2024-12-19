import React, { createContext, useEffect, useState } from "react"; 
// import { products } from "../assets/assets"; // Ensure products is defined and structured correctly
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '₹';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('');
    const [showSearch, setShowsSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate =useNavigate();
    const [token,setToken]= useState('');
    const [products ,setProducts] =useState([]);

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Select Product Size');
            return;
        }

        const itemInfo = products.find(product => product._id === itemId);
        if (!itemInfo) {
            toast.error('Product not found');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1; 
            } else {
                cartData[itemId][size] = 1; 
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1; 
        }
        setCartItems(cartData);

        if(token){
            try {
                await axios.post(backendUrl+'/api/cart/add',{itemId,size}, {headers:{token}})
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }

        toast.success('Item Added to Cart');
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            for (const size in cartItems[itemId]) {
                if (cartItems[itemId][size] > 0) {
                    totalCount += cartItems[itemId][size];
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {
        if (quantity < 0) {
            toast.error('Quantity cannot be negative');
            return;
        }

        let cartData = structuredClone(cartItems);
        if (cartData[itemId] && cartData[itemId][size]) {
            cartData[itemId][size] = quantity;
            setCartItems(cartData);
        } else {
            toast.error('Item not found in cart');
        }

        if(token){
            try {
                await axios.post(backendUrl+'/api/cart/update' ,{itemId,size,quantity}, {headers:{token}})
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            let itemInfo = products.find((product) => product._id === itemId);
            if (itemInfo) {
                for (const size in cartItems[itemId]) {
                    if (cartItems[itemId][size] > 0) {
                        totalAmount += itemInfo.price * cartItems[itemId][size];
                    }
                }
            }
        }
        return totalAmount; 
    }

    const getProductsData =async ()=>{
        try {
            const response = await axios.get(backendUrl+'/api/product/list')
            if(response.data.success){
                setProducts(response.data.products)
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
            
        }
    }

    useEffect(()=>{
        getProductsData();
    },[])

    const getUserCart =async (token) =>{
        try {
            const response = await axios.post(backendUrl+'/api/cart/get',{},{headers:{token}})
            if(response.data.success){
                setCartItems(response.data.cartData)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }


    useEffect (()=>{
        if(!token && localStorage.getItem('token')){
            setToken(localStorage.getItem('token'))
            getUserCart(localStorage.getItem('token'))
        }
    },[])
    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowsSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount ,
        navigate,
        backendUrl,
        setToken,
        token,setCartItems
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);



    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;