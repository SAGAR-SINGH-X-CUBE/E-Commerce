import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <motion.div 
            className='flex flex-col sm:flex-row border border-gray-700 bg-gray-800 text-gray-200'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            {/* Hero Left Side */}
            <motion.div 
                className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
            >
                <motion.div 
                    className='text-gray-300 transform animate-spin-slow'
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                >
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-gray-500'></p>
                        <p className='font-medium text-sm md:text-base text-gray-400'>OUR BESTSELLERS</p>
                    </div>

                    <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed text-gray-100'>
                        Latest Arrivals
                    </h1>

                    <div className='flex items-center gap-2'>
                        <p className='font-semibold text-sm md:text-base text-gray-300'>SHOP NOW</p>
                        <p className='w-8 md:w-11 h-[1px] bg-gray-500'></p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Hero Right Side */}
            <motion.img 
                className='w-full sm:w-1/2' 
                src={assets.hero_img} 
                alt="Hero"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
            />
        </motion.div>
    );
};

export default Hero;
