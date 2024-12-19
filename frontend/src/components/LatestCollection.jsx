import React, { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProduct, setLatestProducts] = useState([]); // Fixed the typo here

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products]);
    
    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTIONS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Step into the season with TheChillMonks fresh drop of oversized and printed T-shirts. Designed for ultimate comfort and bold self-expression, our new collection blends edgy streetwear vibes with modern aesthetics.
                </p>
            </div>
            {/* Rendering Products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProduct.map((item, index) => ( // Fixed the typo here
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    );
}

export default LatestCollection;