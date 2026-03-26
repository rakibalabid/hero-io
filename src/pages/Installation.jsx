import React, { useEffect, useState } from 'react';
import { getInstalledApps, removeFromStoredAppList } from '../utils/localStorage';
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../components/Loading'; // ১. লোডিং কম্পোনেন্টটি ইম্পোর্ট করা হয়েছে

const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [sortBy, setSortBy] = useState("");
    const [isLoading, setIsLoading] = useState(true); // ২. লোডিং স্টেট নেওয়া হয়েছে যা শুরুতে true থাকবে

    // পেজ লোড হলে লোকাল স্টোরেজ থেকে ডাটা আনা
    useEffect(() => {
        const apps = getInstalledApps();
        setInstalledApps(apps);

        // ৩. ডাটা সেট করা হয়ে গেলে লোডিং বন্ধ করে দেওয়া হয়েছে
        setIsLoading(false); 
    }, []);

    // ৪. যদি isLoading true থাকে, তবে আগে লোডিং স্ক্রিনটি দেখাবে
    if (isLoading) {
        return <Loading />;
    }

    // আনইনস্টল হ্যান্ডলার
    const handleUninstall = (id, title) => {
        removeFromStoredAppList(id); 
        const remainingApps = installedApps.filter(app => app.id !== id);
        setInstalledApps(remainingApps); 
        toast.error(`${title} uninstalled successfully!`, {
            icon: '🗑️',
        });
    };

    // সর্টিং লজিক
    const handleSort = (e) => {
        const criteria = e.target.value;
        setSortBy(criteria);
        
        let sortedList = [...installedApps];
        if (criteria === "Large to Small") {
            sortedList.sort((a, b) => b.size - a.size);
        } else if (criteria === "Small to Large") {
            sortedList.sort((a, b) => a.size - b.size);
        }
        setInstalledApps(sortedList);
    };

    return (
        <div className="py-16 bg-[#F8FAFC] min-h-screen">
            <Toaster position="top-center" />
            <div className="max-w-[1000px] mx-auto px-4">
                
                {/* হেডার সেকশন */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-[#0D172C]">Your Installed Apps</h1>
                    <p className="text-gray-500 mt-3 text-lg">
                        Manage your installed applications and storage
                    </p>
                </div>

                {/* কাউন্ট এবং সর্টিং ড্রপডাউন */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-[#0D172C]">
                        {installedApps.length} {installedApps.length === 1 ? 'App' : 'Apps'} Found
                    </h2>
                    <select 
                        onChange={handleSort}
                        value={sortBy}
                        className="select select-bordered w-full max-w-[200px] bg-white border-gray-200 focus:outline-none"
                    >
                        <option value="" disabled>Sort By Size</option>
                        <option value="Large to Small">Large to Small</option>
                        <option value="Small to Large">Small to Large</option>
                    </select>
                </div>

                {/* ইনস্টল করা অ্যাপের লিস্ট */}
                <div className="flex flex-col gap-4">
                    {installedApps.length > 0 ? (
                        installedApps.map((app) => (
                            <div key={app.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-6">
                                    <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                                        <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
                                    </div>
                                    
                                    <div>
                                        <h3 className="font-bold text-xl text-[#0D172C] mb-1">{app.title}</h3>
                                        <div className="flex items-center gap-4 text-sm font-semibold">
                                            <div className="flex items-center gap-1 text-[#22C55E]">
                                                <span>↓</span> {app.downloads / 1000000}M
                                            </div>
                                            <div className="flex items-center gap-1 text-[#F97316]">
                                                <span>★</span> {app.ratingAvg}
                                            </div>
                                            <div className="text-gray-400">
                                                {app.size} MB
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button 
                                    onClick={() => handleUninstall(app.id, app.title)}
                                    className="bg-[#00D394] hover:bg-red-500 text-white px-6 py-2 rounded-lg font-bold transition-all"
                                >
                                    Uninstall
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-200">
                            <p className="text-gray-400 text-xl font-medium">No apps installed yet! 📥</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Installation;