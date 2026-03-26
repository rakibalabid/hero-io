import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import TrendingApps from '../components/TrendingApps';
import Loading from '../components/Loading';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
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