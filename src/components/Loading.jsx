
import React from 'react';
import logo from '../assets/logo.png';

const Loading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            {/* লোডিং টেক্সট সেকশন 📝 */}
            <h1 className="flex items-center text-5xl md:text-7xl font-extrabold text-[#1F2937] tracking-tighter">
                <span>L</span>
                
                {/*  ঘূর্ণায়মান লোগো 🌀 */}
                <div className="mx-2 flex items-center justify-center">
                    <img 
                        src={logo} 
                        alt="O" 
                        className="w-14 h-14 md:w-20 md:h-20 animate-spin"
                        style={{ animationDuration: '1s' }} // ঘূর্ণন ধীরে করার জন্য ইনলাইন CSS
                    />
                </div>
                
                <span>ADING</span>
            </h1>
        </div>
    );
};

export default Loading;