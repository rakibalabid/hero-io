
import React, { useState } from 'react';
import appsData from '../../public/appsData.json';
import { Link } from 'react-router-dom';
import errorImage from '../assets/App-Error.png';

const Apps = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredApps, setFilteredApps] = useState(appsData);



    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        
        const filtered = appsData.filter(app => 
            app.title.toLowerCase().includes(value)
        );
        setFilteredApps(filtered);
    };

    const handleShowAll = () => {
        setSearchTerm("");
        setFilteredApps(appsData);
    };

    return (
        <div className="py-16 bg-white min-h-screen">
            <div className="max-w-[1320px] mx-auto px-4">
                
                {/* হেডার সেকশন */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-[#0D172C]">Our All Applications</h1>
                    <p className="text-gray-500 mt-3 text-lg">
                        Explore All Apps on the Market developed by us. We code for Millions
                    </p>
                </div>

                {/* সার্চ এবং কাউন্ট সেকশন */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <h2 className="text-xl font-bold text-[#0D172C]">
                        ({filteredApps.length}) Apps Found
                    </h2>
                    <div className="relative w-full md:w-72">
                        <input 
                            type="text" 
                            placeholder="search Apps" 
                            value={searchTerm}
                            onChange={handleSearch}
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#7C3AED]"
                        />
                        <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
                    </div>
                </div>

                {/* অ্যাপ গ্রিড বা ইরর মেসেজ */}
                {filteredApps.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredApps.map((app) => (
                            <Link to={`/app/${app.id}`} key={app.id} className="block group">
                                <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col gap-5 hover:shadow-md transition-all h-full">
                                    <div className="w-full h-52 bg-gray-100 rounded-2xl overflow-hidden">
                                        <img 
                                            src={app.image} 
                                            alt={app.title} 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                                        />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-bold text-lg text-[#0D172C] mb-3">{app.title}</h3>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-1 bg-[#E8F9F1] text-[#22C55E] px-2 py-1 rounded text-xs font-bold">
                                                <span>↓</span> {app.downloads / 1000000}M
                                            </div>
                                            <div className="flex items-center gap-1 bg-[#FFF4ED] text-[#F97316] px-2 py-1 rounded text-xs font-bold">
                                                <span>★</span> {app.ratingAvg}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    /* No Apps Found সেকশন */
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="max-w-[400px] mb-8">
                            <img src={errorImage} alt="Error Cat" className="w-full" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0D172C] mb-4 text-center">
                            OPPS!! APP NOT FOUND
                        </h2>
                        <p className="text-gray-500 text-lg mb-10 text-center max-w-[550px]">
                            The App you are requesting is not found on our system. please try another apps
                        </p>
                        <button 
                            onClick={handleShowAll}
                            className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-10 py-3 rounded-xl font-bold text-lg transition-all shadow-lg"
                        >
                            Go Back!
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Apps;