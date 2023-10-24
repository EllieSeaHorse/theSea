import { useState, useEffect } from "react";
import Nav from "@/components/Nav";

export default function Layout({ children }) {

    return (
        <div className={`layout bg-dark-teal m-4`}>
            <Nav/>
            <main>{children}</main>
        </div>
    );
}
