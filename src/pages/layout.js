import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/footer";
import ThreeScene from "@/components/3D/ThreeD";

export default function Layout({ children }) {

    return (
        <div >
            <Nav/>


            <main
                className={"m-8 mt-24"}
            >{children}</main>
            <Footer/>
        </div>
    );
}
