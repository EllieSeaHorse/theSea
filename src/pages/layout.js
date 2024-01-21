import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/footer";
import ThreeScene from "@/components/3D/ThreeD";
import { motion } from "framer-motion";


export default function Layout({ children }) {

    return (
        <div className={" min-h-screen "} >
            <Nav/>
            <motion.div
                className={""}

                initial={{  x: 20 }}
                animate={{  x: 0 }}
                exit={{ x: 20 }}
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
