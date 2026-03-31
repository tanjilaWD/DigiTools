import React from 'react';

const Workflow = () => {
    return (
        <div className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4">
      <div className="text-center p-20">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Ready To Transform Your Workflow?
        </h1>

        <p className="text-sm md:text-base text-purple-100 mb-8">
          Join thousands of professionals who are already using DigiTools to work smarter.
          <br />
          Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <button className="bg-white text-purple-700 font-medium px-6 py-2 rounded-full hover:bg-gray-100 transition">
            Explore Products
          </button>

          <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-purple-700 transition">
            View Pricing
          </button>
        </div>

        <p className="text-xs text-purple-200">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
    );
};

export default Workflow;