import React from "react";
import Link from "next/link";

const Footer = () => {
    const contactInfo = {
        Phone: "+98 939 707 57 50",
        Mail: "SamaMoayeri99@Gmail.com",
        Website: "www.SamaMoayeri.com",
        LinkedIn: "linkedin.com/in/samamoayeri",
    };

    return (
        <footer className=" m-8 mt-16 text-xs">
            <div className="grid flex-col space-y-2 grid-cols-2 lg:grid-cols-4">
                <h1 className="flex items-center">
                    <span className="text-accent pr-4">Phone</span>
                    <Link href="tel:+989397075750">+98 939 707 57 50</Link>
                </h1>
                <h1 className="flex items-center">
                    <span className="text-accent pr-4">Mail</span>
                    <Link href="mailto:SamaMoayeri99@Gmail.com">SamaMoayeri99@Gmail.com</Link>
                </h1>
                <h1 className="flex items-center">
                    <span className="text-accent pr-4">Website</span>
                    <Link href="http://www.SamaMoayeri.com" passHref>
                        <p target="_blank">www.SamaMoayeri.com</p>
                    </Link>
                </h1>
                <h1 className="flex items-center">
                    <span className="text-accent pr-4">LinkedIn</span>
                    <Link href="https://linkedin.com/in/samamoayeri" passHref>
                        <p target="_blank">linkedin.com/in/samamoayeri</p>
                    </Link>
                </h1>
            </div>

        </footer>
    );
};

export default Footer;
