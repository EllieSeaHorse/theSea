import React from "react";
import Link from "next/link";
import {Link as ScrollLink} from "react-scroll";


export default function Nav({ children, classname }) {
    return (
        <header
            className="${classname}  fixed top-0 w-full h-12 md:h-16 flex justify-start items-center bg-milk-darker bg-gradient-to-b from-transparent from-15% to-transparent z-50"
        >
            <div className="sticky flex items-center w-full justify-between px-6 md:px-8 my-4">
                <Link href="/">
                    <div className="">
                        <p className=" uppercase text-sm md:text-lg font-medium hover:text-accent transition-all duration-500">
                            Sama Moayeri
                        </p>
                    </div>
                </Link>
                <div className="flex text-xs font-normal font-montserrat space-x-3">

                    <Link href="/#items" className="hover:text-accent transition-all duration-500">
                    IMAGES
                    </Link>

                    <Link href={'/words'} className={"hover:text-accent transition-all duration-500"}>WORDS</Link>


                    {/* <h1 className="flex items-center group hover:text-accent transition-all">

                        <Link href="https://linkedin.com/in/sama-moayeri" passHref target={`blank`} className={"px-3 hover:text-accent transition-colors duration-300 ease-in-out"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                        </Link>
                 

                    </h1> */}




                    {/* <h1 className="flex items-center group hover:text-accent transition-all">

                        <Link href="https://www.behance.net/smoy994309" passHref target={`blank`} className={" hover:text-accent transition-colors duration-300 ease-in-out"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-behance" viewBox="0 0 16 16">
                                <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z"/>
                            </svg>
                        </Link>
               

                    </h1> */}
                </div>

                {children}
            </div>
        </header>
    );
}
