import React from "react";

export default function Cover({title, subheading, year, services, image, description, color, children}) {
    return (
        <div className="flex flex-col justify-center items-end ">
            <div className="md:w-11/12 w-full h-full ">
                <div className=" flex flex-col justify-between text-black"
>
                    <div className="rounded hover:scale-[99%] transition-transform duration-500 relative flex items-end justify-end group "
                         style={
                             {backgroundColor: "black"}
                         }>
                            <img src={image}
                                 className="rounded cursor-pointer mx-auto object-cover aspect-43 md:aspect-square w-full shadow-lg  "
                            />

                        <div className="rounded flex w-full h-full items-center opacity-0 group-hover:opacity-100 transition-all ease-in duration-200 justify-center uppercase  bg-opacity-50 backdrop-blur-sm bg-slate-800 text-white absolute text-left">
                            {children}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
