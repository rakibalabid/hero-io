
import React from 'react';
import { Link } from 'react-router-dom'; 
import appsData from '../../public/appsData.json';

const TrendingApps = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-[1320px] mx-auto px-4">
                
                {/* সেকশন টাইটেল */}
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-[#0D172C]">
                        Trending <span className="text-[#7C3AED]">Apps</span>
                    </h2>
                    <p className="text-gray-500 mt-2 italic">
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>

                {/* অ্যাপ কার্ড গ্রিড */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {appsData
                        .filter(app => app.isTrending === true)
                        .map((app) => (
                            // ২. প্রতিটি কার্ডকে Link দিয়ে র‍্যাপ করা হয়েছে ডিটেইলস পেজে যাওয়ার জন্য
                            <Link to={`/app/${app.id}`} key={app.id} className="block group">
                                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-all h-full">
                                    
                                    {/* ইমেজ কন্টেইনার */}
                                    <div className="w-full h-48 bg-gray-100 rounded-xl overflow-hidden relative">
                                        <img 
                                            src={app.image} 
                                            alt={app.title} 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                                        />
                                    </div>

                                    {/* টেক্সট অংশ */}
                                    <div className="text-left px-1">
                                        <h3 className="font-bold text-base text-[#0D172C] truncate">
                                            {app.title}
                                        </h3>
                                        
                                        <div className="flex items-center justify-between mt-3">
                                            {/* ডাউনলোড (বামে) */}
                                            <div className="flex items-center gap-1 bg-[#E8F9F1] text-[#22C55E] px-2 py-0.5 rounded text-[10px] font-bold">
                                                <span>↓</span>
                                                <span>{app.downloads / 1000000}M</span>
                                            </div>
                                            {/* রেটিং (ডানে) */}
                                            <div className="flex items-center gap-1 bg-[#FFF4ED] text-[#F97316] px-2 py-0.5 rounded text-[10px] font-bold">
                                                <span>★</span>
                                                <span>{app.ratingAvg}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>

                {/* ৩. Show All বাটনক */}
                <div className="mt-10 flex justify-center">
                    <Link to="/apps">
                        <button className="bg-[#7C3AED] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6D28D9] transition-all">
                            Show All
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TrendingApps;