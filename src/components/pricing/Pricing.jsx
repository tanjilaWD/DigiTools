import React from 'react';

const Pricing = () => {
    return (
        <div className=' my-16'>
            <div className='text-center space-y-5'>
               <h2 className='text-[#101727] text-5xl font-extrabold'>Simple, Transparent Pricing</h2> 
               <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
        <div className="flex flex-col md:flex-row gap-15 justify-center items-center mt-6 bg-white p-6">
      
      {/* Starter */}
      <div className="w-80 bg-[#F9FAFC] rounded-2xl p-6 shadow-md text-gray-800">
        <h2 className="text-xl font-semibold">Starter</h2>
        <p className="text-sm text-gray-500 mt-1">
          Perfect for getting started
        </p>

        <div className="mt-4">
          <span className="text-4xl font-bold">$0</span>
          <span className="text-sm">/Month</span>
        </div>

        <ul className="mt-4 space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <span className="text-green-500">✔</span> Access to 10 free tools
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✔</span> Basic templates
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✔</span> Community support
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✔</span> 1 project per month
          </li>
        </ul>

        <button className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium">
          Get Started Free
        </button>
      </div>

      {/* Pro */}
      <div className="relative w-80 rounded-2xl p-6 shadow-md bg-gradient-to-b from-purple-600 to-purple-500 text-white scale-105">
        
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-xs px-3 py-1 rounded-full font-semibold text-gray-800">
          Most Popular
        </div>

        <h2 className="text-xl font-semibold">Pro</h2>
        <p className="text-sm text-purple-100 mt-1">
          Best for professionals
        </p>

        <div className="mt-4">
          <span className="text-4xl font-bold">$29</span>
          <span className="text-sm">/Month</span>
        </div>

        <ul className="mt-4 space-y-2 text-sm">
          <li className="flex items-center gap-2">
            ✔ Access to all premium tools
          </li>
          <li className="flex items-center gap-2">
            ✔ Unlimited templates
          </li>
          <li className="flex items-center gap-2">
            ✔ Priority support
          </li>
          <li className="flex items-center gap-2">
            ✔ Unlimited projects
          </li>
          <li className="flex items-center gap-2">
            ✔ Cloud sync
          </li>
          <li className="flex items-center gap-2">
            ✔ Advanced analytics
          </li>
        </ul>

        <button className="mt-6 w-full py-3 rounded-full bg-[#F2F2F2] text-purple-600 font-medium">
          Start Pro Trial
        </button>
      </div>

      {/* Enterprise */}
      <div className="w-80 bg-[#F9FAFC] rounded-2xl p-6 shadow-md text-gray-800">
        <h2 className="text-xl font-semibold">Enterprise</h2>
        <p className="text-sm text-gray-500 mt-1">
          For teams and businesses
        </p>

        <div className="mt-4">
          <span className="text-4xl font-bold">$99</span>
          <span className="text-sm">/Month</span>
        </div>

        <ul className="mt-4 space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <span className="text-green-500">✔</span> Everything in Pro
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✔</span> Team collaboration
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✔</span> Custom integrations
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✔</span> Dedicated support
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✔</span> SLA guarantee
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✔</span> Custom branding
          </li>
        </ul>

        <button className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium">
          Contact Sales
        </button>
      </div>

    </div>
    </div>
    );
};

export default Pricing;