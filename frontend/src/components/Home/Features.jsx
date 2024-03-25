import React from 'react';
import { FaCar, FaFish, FaHamburger, FaMountain } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Feature 1: Monetize Your Content */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex flex-col h-full">
              <div className="pb-4">
                <div className="rounded-2xl w-14 h-14 flex items-center justify-center bg-green-500 ml-4">
                  <FaCar className="text-white" size="24" />
                </div>
              </div>

              <div className="relative pl-4 pb-12 border-l border-dashed border-gray-50 flex-1">
                {/* <div className="absolute top-0 -left-px bg-green-500 w-0.5 h-6" /> */}
                <h2 className="text-2xl font-bold font-heading mb-4">Cars</h2>
              </div>
            </div>
          </div>

          {/* Feature 2: Subscription and Followers */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex flex-col h-full">
              <div className="pb-4 border-l border-dashed border-gray-50 lg:border-transparent">
                <div className="rounded-2xl w-14 h-14 flex items-center justify-center bg-red-600 ml-4">
                  <FaMountain className="text-white" size="24" />
                </div>
              </div>
              <div className="relative pl-4 pb-12 border-l border-dashed border-gray-50 flex-1">
                <h2 className="text-2xl font-bold font-heading mb-4">Travel</h2>

                <p className="text-gray-600"></p>
              </div>
            </div>
          </div>

          {/* Feature 3: Dashboard */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex flex-col h-full">
              <div className="pb-4">
                <div className="rounded-2xl w-14 h-14 flex items-center justify-center bg-blue-600 ml-4">
                  <FaHamburger className="text-white" size="24" />
                </div>
              </div>
              <div className="relative pl-4 pb-12 border-l border-dashed border-gray-50 flex-1">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Places to Eat
                </h2>
              </div>
            </div>
          </div>

          {/* Feature 4: Followers */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex flex-col h-full">
              <div className="pb-4">
                <div className="rounded-2xl w-14 h-14 flex items-center justify-center bg-pink-500 ml-4">
                  <FaFish className="text-white" size="24" />
                </div>
              </div>
              <div className="relative pl-4 pb-12 border-l border-dashed border-gray-50 flex-1">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Fishing
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
