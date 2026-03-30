import React from 'react';
import Button from '../ui/Button';
import Outline_btn from '../ui/Outline_btn';
import { CiPlay1 } from "react-icons/ci";
import banner from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='container mx-auto flex items-center my-15 justify-between'>
            {/* left side */}
            <div className='space-y-3'>

              <div className="badge badge-soft badge-primary "> 
            <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-600"></span>
            </span>
                New: AI-Powered Tools Available</div>

               <h2 className='text-7xl text-[#101727] font-extrabold leading-24'> Supercharge Your <br /> Digital Workflow</h2>
               <p className='text-[#627382]'>Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br /> Explore Products
               </p> 

               <div className='flex gap-3 items-center'>
               <Button text='Explore Products'/>
               <Outline_btn
               icon = <CiPlay1 />
                text ='Watch Demo'
                />
               </div>

            </div>
            {/* right side */}
            <div>
                <img src={banner} alt="Banner Image" className='w-100%' />

            </div>
        </div>
    );
};

export default Banner;