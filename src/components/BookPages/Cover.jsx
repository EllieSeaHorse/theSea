import React from "react";

export default function Cover({title, subheading, year, services, image, description, color, children}) {
    return (
        <div className="flex flex-col justify-center items-end ">
            <div className="md:w-11/12 w-full h-full ">
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


                <div className=" flex flex-col justify-between text-black"
>
                    <div className="hover:scale-[99%] transition-transform duration-500 relative flex items-end justify-end group "
                         style={
                             {backgroundColor: color}
                         }>
                            <img src={image}
                                 className="rounded cursor-pointer mx-auto object-cover aspect-43 md:aspect-square w-full shadow-lg  "
                            />

                        <div className="rounded flex w-full h-full items-center opacity-0 group-hover:opacity-100 transition-all ease-in duration-200 justify-center uppercase  bg-opacity-50 backdrop-blur-sm bg-slate-800 text-white absolute text-left">
                        {/*    <h2 className="text-xl font-semibold pb-4">{title}</h2>*/}
                        {/*    <h2 className="text-xs">{subheading}</h2>*/}
                        {/*    <p className="pb-2.5 text-xs">{year}</p>*/}
                            {children}

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
