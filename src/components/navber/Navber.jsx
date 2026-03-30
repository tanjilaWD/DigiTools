import React from 'react';
import { LuShoppingCart } from "react-icons/lu";
import Button from '../ui/Button';

const Navber = () => {
    return (
        <div>
        <nav className='container mx-auto flex justify-between my-4 font-semibold items-center'>
            {/*logo*/}
            <h1 className='text-4xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h1>

            {/* mane */}
            <ul className='flex gap-5'>
                <li className="hover:text-purple-600 cursor-pointer">Products</li>
                <li className="hover:text-purple-600 cursor-pointer">Features</li>
                <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
                <li className="hover:text-purple-600 cursor-pointer">Testimonials</li>
                <li className="hover:text-purple-600 cursor-pointer">FAQ</li>
            </ul>

            {/* button */}
            <div className='flex gap-5'>
              <button ><LuShoppingCart className="w-5 h-5 text-gray-700 cursor-pointer hover:text-red-500"/></button> 
             <button className='font-semibold hover:text-purple-400 cursor-pointer'>Login</button>
             <Button text='Get Started'/>
            </div>
        </nav>
        <div className="divider"></div>
        </div>
    );
};

export default Navber;