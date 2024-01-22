import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/footer";
import ThreeScene from "@/components/3D/ThreeD";
import { motion } from "framer-motion";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

export default function Layout({ children }) {

    return (
        <div className={" min-h-screen "} >

            <Nav/>
            <div
            >
                {children}
                <Analytics/>
                <SpeedInsights/>
            </div>
        </div>
    );
}
