import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import { motion } from 'framer-motion';

const BestSeller = () => {
    const [bestSeller, setBestSeller] = useState([]);
    const { products } = useContext(ShopContext);

    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller);
        setBestSeller(bestProduct.slice(0, 5));
    }, [products]);

    return (
        <motion.div 
            className='my-10 bg-gray-900 text-white'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
            </div>

            <motion.div 
                className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
            >
                {bestSeller.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <ProductItem id={item._id} image={item.image} name={item.name} price={item.price} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default BestSeller;
