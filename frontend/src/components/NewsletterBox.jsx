import React from 'react';

const NewsletterBox = () => {
  return (
    <div className='text-center bg-gray-800 p-8 rounded-lg shadow-lg'>
      <p className='text-2xl font-medium text-white'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

      <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 border-gray-700'>
        <input 
          className='w-full sm:flex-1 outline-none py-2 px-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-gray-500' 
          type="text" 
          placeholder='Enter your email id' 
          required 
        />
        <button className='bg-black text-white text-xs px-10 py-4 rounded-md hover:bg-gray-600' type='submit'>
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
