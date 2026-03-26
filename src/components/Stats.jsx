
const Stats = () => {
    return (
        <section className="bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#6366F1] py-16 px-4">
            <div className="max-w-[1320px] mx-auto text-white">
                
                {/* ১. মেইন হেডলাইন */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Trusted By Millions, Built For You
                    </h2>
                </div>

                {/* ২. স্ট্যাটস গ্রিড */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 text-center">
                    
                    {/* Total Downloads */}
                    <div className="flex flex-col items-center">
                        <p className="text-sm md:text-base opacity-90 font-medium mb-2">Total Downloads</p>
                        <h3 className="text-5xl md:text-6xl font-black mb-2">29.6M</h3>
                        <p className="text-xs md:text-sm opacity-75">21% More Than Last Month</p>
                    </div>

                    {/* Total Reviews */}
                    <div className="flex flex-col items-center">
                        <p className="text-sm md:text-base opacity-90 font-medium mb-2">Total Reviews</p>
                        <h3 className="text-5xl md:text-6xl font-black mb-2">906K</h3>
                        <p className="text-xs md:text-sm opacity-75">46% More Than Last Month</p>
                    </div>

                    {/* Active Apps */}
                    <div className="flex flex-col items-center">
                        <p className="text-sm md:text-base opacity-90 font-medium mb-2">Active Apps</p>
                        <h3 className="text-5xl md:text-6xl font-black mb-2">132+</h3>
                        <p className="text-xs md:text-sm opacity-75">31 More Will Launch</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Stats;