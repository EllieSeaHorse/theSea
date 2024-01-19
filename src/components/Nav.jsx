import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav({ children, classname }) {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const currentScrollPos = window.scrollY;
    //         setVisible(
    //             (prevScrollPos > currentScrollPos+10)
    //         );
    //         setPrevScrollPos(currentScrollPos+10);
    //     };
    //
    //     window.addEventListener("scroll", handleScroll);
    //
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, [prevScrollPos, visible]);
    //
    // const navStyles = {
    //     transition: "top 0.3s",
    //     top: visible ? "0" : "-80px", // Adjust the value to hide completely
    // };

    return (
        <header
            className="${classname} fixed top-0 w-full h-14 md:h-16 flex justify-start items-center bg-opacity-10 bg-gradient-to-b from-transparent from-15% to-transparent z-50"
        >
            <div className="sticky flex items-center w-full justify-between px-4 md:px-8 my-4">
                <Link href="/">
                    <div className="">
                        <p className="font-semibold uppercase text-sm hover:text-accent transition-all duration-500">
                            Sama Moayeri
                        </p>
                        {/*<p className="text-xs">*/}
                        {/*    Creative Director & Designer*/}
                        {/*</p>*/}
                    </div>
                </Link>
                <div className="text-xs font-normal font-montserrat space-x-3">
                    <Link href={'PortfolioPage/portfolio'} className={"hover:text-accent transition-all duration-500"}> PORTFOLIO</Link>
                    <Link href={'PortfolioPage/portfolio'} className={"uppercase hover:text-accent transition-all duration-500"}>Contact</Link>
                </div>
                {children}
            </div>
        </header>
    );
}
