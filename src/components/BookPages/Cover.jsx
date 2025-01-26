import React from "react";

export default function Cover({title, subheading, year, services, image, description, color, children}) {
    return (
        <div className="flex justify-center items-center ">
            <div className="w-10/12 grid md:grid-cols-3 grid-cols-1 h-full hover:scale-[98%] transition-transform duration-500 group">
                {/* <div className=" flex  flex-col justify-between"> */}
                    <div className="object-cover aspect-video col-span-2 transition-transform  items-center hover:shadow-sm  "
                         style={
                             {backgroundColor: "#FAFBF4"}
                         }>
                            <img src={image}
                                 className="w-full cursor-pointer object-cover aspect-43  "
                            />
                    </div>

            <div className="w-full h-full  items-center justify-start uppercase text-left">
                            {children}
            </div>
            </div>

            {/* </div> */}
        </div>
    );
}
