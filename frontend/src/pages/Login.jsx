import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(''); //

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success("Registration successful!");
         
        } else {
          toast.error(response.data.message);
        }
      } else {
        // Implement login functionality
        const response = await axios.post(backendUrl + "/api/user/login", { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success("Login successful!");
          
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.error("Error during submission:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  useEffect(()=>{
    if (token) {
            navigate('/')  ; //navigate to home path
    }
  })

  useEffect(()=>{
    if (!token && localStorage.getItem('token')) {
         setToken(localStorage.getItem('token'))      
    }
  })

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className="inline-flex items-center ga-2 mb-2 mt-10">
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Sign Up' ? <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required /> : ''}
      <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
      <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className='cursor-pointer'>Forget Your Password?</p>
        {
          currentState === 'Sign Up'
            ? <p onClick={() => setCurrentState('login')} className='cursor-pointer'>Login Here</p>
            : <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>
        }
      </div>
      <button className='border bg-neutral-600 text-white border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition-all duration-500'>{currentState === 'login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  );
}

export default Login;
