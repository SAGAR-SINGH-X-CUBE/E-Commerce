import React, { useState } from 'react';

const Login = () => {

    const [currentState, setCurrentState] = useState('Login');

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 bg-gray-50 p-8 rounded-lg shadow-md'>
            <div className='inline-flex items-center gap-2 mb-4 mt-10'>
                <p className='prata-regular text-3xl'>{currentState}</p>
                <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
            </div>

            {/* Show 'Name' input only if in 'Sign Up' state */}
            {currentState === 'Login' ? null : 
                <input className='w-full px-3 py-2 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-black' type="text" placeholder='Name' required />
            }

            <input className='w-full px-3 py-2 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-black' type="email" placeholder='Email' required />
            <input className='w-full px-3 py-2 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-black' type="password" placeholder='Password' required />

            <div className='w-full flex justify-between text-sm mt-[-8px]'>
                <p className='cursor-pointer'>Forgot your password?</p>
                {
                    currentState === 'Login'
                        ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer text-black'>Create account</p>
                        : <p onClick={() => setCurrentState('Login')} className='cursor-pointer text-black'>Login here</p>
                }
            </div>
            <button type='submit' className='bg-black text-white font-light px-8 py-2 mt-4 rounded-md hover:bg-gray-700 transition duration-300'>
                {currentState === 'Login' ? 'Sign in' : 'Sign up'}
            </button>
        </form>
    );
}

export default Login;
