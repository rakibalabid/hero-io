import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import TrendingApps from '../components/TrendingApps';
import Loading from '../components/Loading'; // 🌀 লোডিং কম্পোনেন্ট ইম্পোর্ট

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 🏠 হোম পেজের কম্পোনেন্টগুলো মাউন্ট হওয়া পর্যন্ত অপেক্ষা করবে
        setIsLoading(false);
    }, []);

    // ⏳ লোডিং ট্রু থাকলে এনিমেশন দেখাবে
    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <Hero />
            <Stats />
            <TrendingApps />
        </div>
    );
};

export default Home;