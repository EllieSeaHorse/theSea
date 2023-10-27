import { useState, useEffect } from "react";
import Nav from "@/components/Nav";

export default function Layout({ children }) {

    return (
        <div >
            <Nav/>
            <main>{children}</main>
        </div>
    );
}
