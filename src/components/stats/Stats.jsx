import React from 'react';

const Stats = () => {
    return (
        <div>
             <div className=" bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-10">
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center text-white">
        
        <div className="flex flex-col items-center gap-2 border-b md:border-b-0 md:border-r border-white/30 py-4">
          <h2 className="text-4xl font-bold">50K+</h2>
          <p className="text-sm text-white/80">Active Users</p>
        </div>

        <div className="flex flex-col items-center gap-2 border-b md:border-b-0 md:border-r border-white/30 py-4">
          <h2 className="text-4xl font-bold">200+</h2>
          <p className="text-sm text-white/80">Premium Tools</p>
        </div>

        <div className="flex flex-col items-center gap-2 py-4">
          <h2 className="text-4xl font-bold">4.9</h2>
          <p className="text-sm text-white/80">Rating</p>
        </div>

      </div>

    </div>
        </div>
    );
};

export default Stats;