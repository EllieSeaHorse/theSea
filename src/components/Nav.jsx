import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav({ children }) {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(
                (prevScrollPos > currentScrollPos &&
                    prevScrollPos - currentScrollPos > 70) ||
                currentScrollPos < 10
            );
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos, visible]);

    const navStyles = {
        transition: "top 0.3s",
        top: visible ? "0" : "-80px", // Adjust the value to hide completely
    };

    return (
        <header
            className="sticky top-0 w-full h-20 flex justify-start items-center bg-gray-50 backdrop-blur-lg bg-opacity-80 z-50"
            style={navStyles}
        >
            <div className="flex items-center w-full justify-between px-6">
                <Link href="/">
                    <div className="">
                        <p className="font-semibold font-montserrat uppercase">
                            Sama Moayeri
                        </p>
                        <p className="text-xs font-normal font-montserrat">
                            Creative Director & Designer
                        </p>
                    </div>
                </Link>
                <div className="text-xs font-normal font-montserrat">CONTACT</div>
                {children}
            </div>
        </header>
    );
}
