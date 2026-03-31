import React from 'react';
import StartedCard from '../ui/StartedCard';
import { FaRegUser } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";
import { MdOutlineRocketLaunch } from "react-icons/md";

const Started = () => {
    return (
        <div className=' bg-[#F9FAFC]'>
            <div className='my-15 container mx-auto py-20'>
                <div className='text-center space-y-4'>
            <h2 className='text-[#101727] text-5xl font-extrabold'>Get Started in 3 Steps</h2>
            <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='grid grid-cols-3 gap-6 mt-7'>
               <StartedCard 
                step = '01'
                icon = <FaRegUser />
                title = 'Create Account'
                description = 'Sign up for free in seconds. No credit card required to get started.'
               /> 

               <StartedCard
               step = '02'
                icon = <FiPackage />
                title = 'Choose Products'
                description = 'Browse our catalog and select the tools that fit your needs.'
               /> 

               <StartedCard
               step = '03'
                icon = <MdOutlineRocketLaunch />
                title = 'Start Creating'
                description = 'Download and start using your premium tools immediately.'
               /> 
             
            </div>
            </div>
        </div>
    );
};

export default Started;