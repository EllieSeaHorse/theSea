import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/footer";
import ThreeScene from "@/components/3D/ThreeD";
import { motion } from "framer-motion";


export default function Layout({ children }) {

    return (
        <div className={"min-h-screen "} >
            <Nav/>
            <motion.div
                className={"min-h-screen px-6 md:px-8"}

                initial={{  x: 10 }}
                animate={{  x: 0 }}
                exit={{ x: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 50,
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
