import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/footer";
import ThreeScene from "@/components/3D/ThreeD";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Layout({ children }) {

    return (
        <div className={" min-h-screen "} >

            <Nav/>
            <div
            >
                {children}
            </div>
        </div>
    );
}
