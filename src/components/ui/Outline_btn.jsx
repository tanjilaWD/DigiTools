import React from 'react';

const Outline_btn = ({text, icon:icon}) => {
    return (
        <div>
            <button className='text-[#4F39F6] px-4 py-3 rounded-4xl font-bold cursor-pointer border flex items-center gap-2 hover:bg-violet-600 hover:border-none duration-300 hover:text-white'>{icon} {text}</button> 
        </div>
    );
};

export default Outline_btn;