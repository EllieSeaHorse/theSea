import React from "react";

const Footer = () => {
    const contactInfo = {
        Phone: "+98 939 707 57 50",
        Mail: "SamaMoayeri99@Gmail.com",
        Website: "www.SamaMoayeri.com",
        LinkedIn: "linkedin.com/in/samamoayeri",
    };

    return (
        <footer className=" m-8 mt-16 text-xs">
            <div className="container space-x-4 opacity-60">
                <div className="flex grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 flex-wrap">
                    {Object.keys(contactInfo).map((key) => (
                        <div key={key}>
                            <p className="font-semibold">{key}</p>
                            <p>{contactInfo[key]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
