
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
    // এই হুকটি আমাদের বর্তমান URL বা পাথ (pathname) দিবে
    const { pathname } = useLocation();

    useEffect(() => {
        
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="max-w-[1320px] mx-auto px-4 font-lato"> 
            <Navbar />
            <div className="min-h-[calc(100vh-300px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;