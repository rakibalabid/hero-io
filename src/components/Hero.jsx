
import React from 'react';

const Hero = () => {
  return (
    <section className="py-20 bg-gray-50 text-center relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4">
        {/* সেকশন হেডার */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#0D172C] leading-tight mt-2 max-w-[900px] mx-auto">
            {/* উপরের লাইনে We Build */}
            <span className="block text-gray-800">We Build</span> 
            {/* নিচের লাইনে Productive Apps */}
            <span className="text-[#7C3AED]">Productive</span> Apps
          </h1>
          
          <p className="text-gray-500 mt-8 max-w-[750px] mx-auto text-lg">
            At <span className="font-bold">HERO.IO</span>, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. 
            Our goal is to turn your ideas into digital experiences that truly make an impact.
          </p>

          {/* বাটন গ্রুপ (ইমেজ এবং লিঙ্ক) */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {/* Google Play Button */}
            <a 
              href="https://play.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img 
                src="/playStore.png" 
                alt="Get it on Google Play" 
                className="h-[60px] w-auto border border-gray-200 rounded-lg shadow-sm" 
              />
            </a>

            {/* App Store Button */}
            <a 
              href="https://www.apple.com/app-store/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img 
                src="/appStore.png" 
                alt="Download on the App Store" 
                className="h-[60px] w-auto border border-gray-200 rounded-lg shadow-sm" 
              />
            </a>
          </div>
        </div>
      </div>

      {/* হিরো ইমেজ */}
      <div className="mt-10 flex justify-center items-center px-4">
        <div className="max-w-[850px] w-full"> 
          <img 
            src="/hero.png" 
            alt="Productive App with surrounding icons" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;