import React from "react";

export default function Cover({title, subheading, year, services, image, description}) {
    return (
        <div className="flex flex-col justify-center text-black">
            <div className="w-full h-full ">
                {/*<img src={image} className={"absolute w-full h-full  object-cover -z-10 "}/>*/}
                {/*<div className="gap-2 leading-3">*/}
                {/*    <div className={"p-4 aspect-square w-2/3 mx-auto place-self-end bg-paper absolute self-center"}>*/}
                {/*        <h2 className="text-6xl font-semibold  pb-4">{title}</h2>*/}
                {/*        <h2 className="text-xs">{subheading}</h2>*/}
                {/*        <p className="pb-2.5 text-xs">{year}</p>*/}
                {/*        /!*<ul className="py-2 text-xs font-thin">*!/*/}
                {/*        /!*    {services.map((service, serviceIndex) => (*!/*/}
                {/*        /!*        <li className="list-item" key={serviceIndex}> - {service}</li>*!/*/}
                {/*        /!*    ))}*!/*/}
                {/*        /!*</ul>*!/*/}
                {/*    </div>*/}

                {/*</div>*/}


                <div className="flex flex-col justify-between text-black">
                    <div className=" aspect-A4 relative flex items-center justify-center">
                            <img src={image}
                                 className="cursor-pointer mx-auto object-cover aspect-A4 w-full shadow-lg "
                            />
                        <div className="p-2 w-3/5 uppercase aspect-video shadow-lg  bg-opacity-10 backdrop-blur-2xl absolute bg-paper text-left">
                            <h2 className="text-xl font-semibold pb-4">{title}</h2>
                            <h2 className="text-xs">{subheading}</h2>
                            <p className="pb-2.5 text-xs">{year}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
