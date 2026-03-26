import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import toast, { Toaster } from 'react-hot-toast';
import appsData from '../../public/appsData.json';
import { addToStoredAppList, getInstalledApps } from '../utils/localStorage';

const AppDetails = () => {
    const { id } = useParams();
    const [isInstalled, setIsInstalled] = useState(false);
    
    // নির্দিষ্ট অ্যাপটি খুঁজে বের করা
    const app = appsData.find(item => item.id === parseInt(id));

    useEffect(() => {
        if (app) {
            // লোকাল স্টোরেজ থেকে চেক করা অ্যাপটি আগে থেকেই ইনস্টল করা কিনা
            const storedApps = getInstalledApps();
            const exist = storedApps.find(item => item.id === app.id);
            if (exist) {
                setIsInstalled(true);
            }
        }
    }, [app]);

    // যদি অ্যাপ না পাওয়া যায়
    if (!app) {
        return <div className="text-center py-20 text-2xl font-bold">App Not Found!</div>;
    }

    const handleInstall = () => {
        const success = addToStoredAppList(app);
        if (success) {
            setIsInstalled(true);
            toast.success(`${app.title} successfully installed!`);
        }
    };

    return (
        <div className="py-12 bg-white min-h-screen">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="max-w-[1100px] mx-auto px-6">
                
                {/* টপ সেকশন: অ্যাপ ইনফো */}
                <div className="flex flex-col md:flex-row gap-10 items-start mb-16">
                    <div className="w-full md:w-[320px] aspect-square bg-gray-50 rounded-3xl border border-gray-100 p-8 flex items-center justify-center shadow-sm">
                        <img src={app.image} alt={app.title} className="max-w-full max-h-full object-contain rounded-2xl" />
                    </div>

                    <div className="flex-1">
                        <h1 className="text-3xl md:text-4xl font-bold text-[#0D172C] mb-2">{app.title}</h1>
                        <p className="text-gray-500 text-lg">Developed by <span className="text-[#7C3AED] font-semibold">{app.companyName}</span></p>

                        <div className="flex flex-wrap gap-8 my-8 border-y border-gray-100 py-6">
                            <div className="text-center">
                                <span className="block text-gray-400 text-sm mb-1">Downloads</span>
                                <span className="text-2xl font-bold text-[#0D172C]">
                                    {app.downloads >= 1000000 ? `${app.downloads / 1000000}M` : `${app.downloads / 1000}K`}
                                </span>
                            </div>
                            <div className="text-center">
                                <span className="block text-gray-400 text-sm mb-1">Rating</span>
                                <span className="text-2xl font-bold text-[#0D172C] flex items-center gap-1">
                                    <span className="text-[#F97316]">★</span> {app.ratingAvg}
                                </span>
                            </div>
                            <div className="text-center">
                                <span className="block text-gray-400 text-sm mb-1">Reviews</span>
                                <span className="text-2xl font-bold text-[#0D172C]">{app.reviews}</span>
                            </div>
                        </div>

                        <button 
                            onClick={handleInstall}
                            disabled={isInstalled}
                            className={`px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${
                                isInstalled 
                                ? 'bg-gray-300 cursor-not-allowed text-gray-600' 
                                : 'bg-[#00D394] hover:bg-[#00ba82] text-white shadow-green-100'
                            }`}
                        >
                            {isInstalled ? "Installed ✅" : `Install Now (${app.size} MB)`}
                        </button>
                    </div>
                </div>

                <hr className="border-gray-100 mb-12" />

                {/* রেটিংস চার্ট */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-[#0D172C] mb-8">Ratings</h2>
                    <div className="w-full max-w-[800px] h-[250px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                layout="vertical"
                                data={[...app.ratings].reverse()} 
                                margin={{ left: 20, right: 40 }}
                            >
                                <XAxis type="number" hide />
                                <YAxis 
                                    dataKey="name" 
                                    type="category" 
                                    axisLine={false} 
                                    tickLine={false}
                                    width={70}
                                    tick={{ fill: '#6B7280', fontSize: 14 }}
                                />
                                <Tooltip cursor={{fill: 'transparent'}} />
                                <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={20}>
                                    {app.ratings.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill="#F97316" />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* ডেসক্রিপশন সেকশন */}
                <div>
                    <h2 className="text-2xl font-bold text-[#0D172C] mb-6">Description</h2>
                    <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                        {app.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;