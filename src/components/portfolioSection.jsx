import React from 'react';


const PortfolioSection = ({ title, subheading, year, services, description, coverImageUrl, images, color, children }) => {

    const sectionStyle = {
        backgroundColor: color // Set the background color dynamically
    };

    return (
        <div className=" min-h-screen py-2"
        >
            <div className="grid p-4 w-full">
                <div className={" grid grid-cols-1 md:grid-cols-3 gap-1 leading-3"}>
                    <div className={" px-8 " }
                         style={
                             {borderLeft: `1px solid ${color}`}
                    }
                    >
                        <h2 className="text-6xl font-semibold uppercase pb-2.5 ">{title}</h2>
                        <h2 className="text-lg">{subheading}</h2>
                        <p className="pb-2.5">{year}</p>
                        <ul className="pb-6 text-xs font-thin ">
                            {services.map((service, serviceIndex) => (
                                <li className="list-item" key={serviceIndex}> - {service}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={"w-full md:col-span-2 h-full"}>
                        <img src={coverImageUrl} className={"pb-6 w-full h-full object-cover"}/>

                    </div>

                </div>
                <p className=" bg-opacity-10 text-xs p-6 mb-4 col-span-1 md:col-span-2 text-white text-justify "
                   style={
                       {borderRight: `1px dashed ${color}`,
                           borderTop: `1px dashed ${color}`}
                   }
                >{description}</p>

            </div>

                <div className="grid grid-cols-2 py-1 gap-2 m-2 p-2"
                     style={sectionStyle}
                >
                    {children}
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${title} Image ${index + 1}`}
                            className="cursor-pointer mx-auto object-cover w-full "
                        />
                    ))}
                </div>
        </div>
    );
};


export default PortfolioSection;
