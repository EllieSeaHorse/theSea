import React from "react";
import Link from "next/link";

export default function Nav({ children, classname }) {
    return (
        <header
            className="${classname} fixed top-0 w-full h-12 md:h-12 flex justify-start items-center bg-black bg-gradient-to-b from-transparent from-15% to-transparent z-50"
        >
            <div className="sticky flex items-center w-full justify-between px-6 md:px-8 my-4">
                <Link href="/">
                    <div className="">
                        <p className=" uppercase text-sm hover:text-accent transition-all duration-500">
                            Sama Moayeri
                        </p>
                    </div>
                </Link>
                <div className="text-xs font-normal font-montserrat space-x-3">
                    <Link href={'/portfolio'} className={"hover:text-accent transition-all duration-500"}>RESUME</Link>
                </div>
                {children}
            </div>
        </header>
    );
}
