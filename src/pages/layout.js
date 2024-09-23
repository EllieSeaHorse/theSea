import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/footer";
import ThreeScene from "@/components/3D/ThreeD";
import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from 'next/router';


import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import LoadingVisual from "@/components/Transition/LoadingVisual";

export default function Layout({ children }) {
    //
    // const router = useRouter();
    // const [loading, setLoading] = useState(false);
    //
    // useEffect(() => {
    //     const handleStart = (url) => (url !== router.asPath) && setLoading(true);
    //     const handleComplete = (url) => (url === router.asPath) && setTimeout(() => setLoading(false), 2000);
    //
    //     router.events.on('routeChangeStart', handleStart);
    //     router.events.on('routeChangeComplete', handleComplete);
    //     router.events.on('routeChangeError', handleComplete);
    //
    //     return () => {
    //         router.events.off('routeChangeStart', handleStart);
    //         router.events.off('routeChangeComplete', handleComplete);
    //         router.events.off('routeChangeError', handleComplete);
    //     };
    // }, [router]);

    return  (
        <div className={" min-h-screen"} >
            {/*{loading && <LoadingVisual />}*/}

            <Nav/>
            <div
            >
                className={""}
                {children}
                <SpeedInsights/>
                <Analytics/>
            </div>
        </div>
    );
}
