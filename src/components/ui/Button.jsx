import React from 'react';

const Button = ({text}) => {
    return (
        <div>
           <button className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-4 py-3 rounded-4xl font-bold cursor-pointer hover:from-red-500 hover:to-yellow-500 transition-all duration-300 '>{text}</button> 
        </div>
    );
};

export default Button;