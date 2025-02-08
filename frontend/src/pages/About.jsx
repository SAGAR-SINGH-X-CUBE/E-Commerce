import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div className='bg-gray-900 text-gray-200'>
      <div className='text-2xl text-center pt-8 border-t border-gray-700'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] rounded-lg' src={assets.about_img} alt="About Us" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-300'>
          <p>Ocean was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
          <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
          <b className='text-white'>Our Mission</b>
          <p>Our mission at Ocean is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 gap-8'>
  <div className='border border-gray-700 px-6 md:px-12 py-6 sm:py-12 flex flex-col gap-5 bg-gray-800 rounded-lg'>
    <b>Quality Assurance:</b>
    <p className='text-gray-400'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
  </div>
  <div className='border border-gray-700 px-6 md:px-12 py-6 sm:py-12 flex flex-col gap-5 bg-gray-800 rounded-lg'>
    <b>Convenience:</b>
    <p className='text-gray-400'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
  </div>
  <div className='border border-gray-700 px-6 md:px-12 py-6 sm:py-12 flex flex-col gap-5 bg-gray-800 rounded-lg'>
    <b>Exceptional Customer Service:</b>
    <p className='text-gray-400'>Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.</p>
  </div>
</div>


      <NewsletterBox />
    </div>
  );
};

export default About;
