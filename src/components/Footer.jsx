
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16 mt-20">
            {/* মেইন কন্টেইনার */}
            <div className="max-w-[1320px] mx-auto px-4">
                
                {/* গ্রিড লেআউট: মোবাইলে ২ কলাম, বড় স্ক্রিনে ৪ কলাম */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
                    
                    {/* কলাম ১: সার্ভিসেস */}
                    <div className="flex flex-col gap-4">
                        <h6 className="text-white font-bold uppercase tracking-wider text-sm border-b border-[#7C3AED] pb-2 w-fit">
                            Services
                        </h6>
                        <nav className="flex flex-col gap-2">
                            <a className="hover:text-[#7C3AED] transition-colors cursor-pointer text-sm">Branding</a>
                            <a className="hover:text-[#7C3AED] transition-colors cursor-pointer text-sm">Design</a>
                            <a className="hover:text-[#7C3AED] transition-colors cursor-pointer text-sm">Marketing</a>
                            <a className="hover:text-[#7C3AED] transition-colors cursor-pointer text-sm">Advertisement</a>
                        </nav>
                    </div>

                    {/* কলাম ২: কোম্পানি */}
                    <div className="flex flex-col gap-4">
                        <h6 className="text-white font-bold uppercase tracking-wider text-sm border-b border-[#7C3AED] pb-2 w-fit">
                            Company
                        </h6>
                        <nav className="flex flex-col gap-2">
                            <a className="hover:text-[#7C3AED] transition-colors cursor-pointer text-sm">About us</a>
                            <a className="hover:text-[#7C3AED] transition-colors cursor-pointer text-sm">Contact</a>
                            <a className="hover:text-[#7C3AED] transition-colors cursor-pointer text-sm">Jobs</a>
                            <a className="hover:text-[#7C3AED] transition-colors cursor-pointer text-sm">Press kit</a>
                        </nav>
                    </div>

                    {/* কলাম ৩: লিগ্যাল */}
                    <div className="flex flex-col gap-4">
                        <h6 className="text-white font-bold uppercase tracking-wider text-sm border-b border-[#7C3AED] pb-2 w-fit">
                            Legal
                        </h6>
                        <nav className="flex flex-col gap-2">
                            <a className="hover:text-[#7C3AED] transition-colors cursor-pointer text-sm">Terms of use</a>
                            <a className="hover:text-[#7C3AED] transition-colors cursor-pointer text-sm">Privacy policy</a>
                            <a className="hover:text-[#7C3AED] transition-colors cursor-pointer text-sm">Cookie policy</a>
                        </nav>
                    </div>

                    {/* কলাম ৪: নিউজলেটার */}
                    <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
                        <h6 className="text-white font-bold uppercase tracking-wider text-sm border-b border-[#7C3AED] pb-2 w-fit">
                            Newsletter
                        </h6>
                        <div className="flex flex-col gap-3">
                            <p className="text-xs text-gray-400">Enter your email address to get updates</p>
                            <div className="flex w-full">
                                <input 
                                    type="text" 
                                    placeholder="email@site.com" 
                                    className="bg-gray-800 text-white px-4 py-2 rounded-l-md outline-none focus:ring-1 focus:ring-[#7C3AED] w-full text-sm" 
                                />
                                <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-4 py-2 rounded-r-md transition-all text-sm font-semibold">
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* কপিরাইট অংশ */}
                <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} - All rights reserved by <span className="text-[#7C3AED] font-semibold">Hero.io</span> 🚀</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;