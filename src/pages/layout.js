import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/footer";

export default function Layout({ children }) {

    return (
        <div >
            <Nav/>
            <main
                className={"m-8"}
            >{children}</main>
            <Footer/>
        </div>
    );
}
