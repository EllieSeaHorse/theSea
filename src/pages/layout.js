import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/footer";
import ThreeScene from "@/components/3D/ThreeD";

export default function Layout({ children }) {

    return (
        <div className={"min-h-screen "} >
            <Nav/>
            <main
                className={"min-h-screen px-6 md:px-8"}
            >
                {children}
            </main>
        </div>
    );
}
