import React from 'react';
import { Link } from 'react-router-dom';
import error404 from '../assets/error-404.png'; // ইমেজের পাথটি চেক করে নিন

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
            {/* ৪-০-৪ ইমেজ সেকশন 🖼️ */}
            <div className="max-w-[500px] mb-8">
                <img 
                    src={error404} 
                    alt="404 Page Not Found" 
                    className="w-full h-auto object-contain"
                />
            </div>

            {/* টেক্সট কন্টেন্ট 📝 */}
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-[#0D172C] mb-4">
                    Oops, page not found!
                </h1>
                <p className="text-gray-500 text-lg mb-8">
                    The page you are looking for is not available.
                </p>

                {/* নেভিগেশন বাটন 🔘 */}
                <Link 
                    to="/" 
                    className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-10 py-3 rounded-lg font-bold text-lg transition-all shadow-lg shadow-purple-100 inline-block"
                >
                    Go Back!
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;