import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='bg-black text-white'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div className='mt-5 ml-3'>
                <img src={assets.logo1} alt="" className=' mb-5 w-20 bg-white rounded-3xl  ' />
                <p className="w-full md:w-2/3 text-gray-400">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, dolorum veniam quidem vero delectus in eius explicabo? Ab! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, animi?
                </p>
            </div>
           <div className='mt-5'>
            <p className="text-xl font-mediu, mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-400">
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
           </div>
           <div className='mt-5'    >
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col text-gray-400">
                <li>+91 6789456778</li>
                <li>contact@tmc.com</li>
                <li></li>
            </ul>
           </div>
           </div>
           <div>
            <hr />
            <p className="py-5 text-sm text-center">Copyright 2024@ tmc.com-All Right Reserved</p>
           </div>
        
        </div>
    )
}

export default Footer
