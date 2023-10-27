import React from 'react';


const PortfolioSection = ({ title, subheading, year, services, description, children }) => {
    return (
        <div className="min-h-screen overflow-x-auto">
            <div className="grid grid-rows-1 grid-cols-3 gap-6 p-10">
                <div>
                    <h2 className="text-6xl font-semibold pb-2.5">{title}</h2>
                    <h2 className="text-xl font-semibold">{subheading}</h2>
                    <p className="text-xl font-semibold pb-2.5">{year}</p>
                    <ul className="pb-6 text-xs">
                        {services.map((service, serviceIndex) => (
                            <li className="list-item" key={serviceIndex}> - {service}</li>
                        ))}
                    </ul>
                    <p className="text-xs text-justify border p-5">{description}</p>
                </div>
                <div className="grid grid-rows-1 grid-flow-col col-span-2 gap-6 h-screen overflow-x-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};


export default PortfolioSection;
