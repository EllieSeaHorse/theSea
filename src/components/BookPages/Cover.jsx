import React from "react";

export default function Cover({title, subheading, year, services, image, description, color, children}) {
    return (
        <div className=" flex flex-col md:h-screen sepia-0 justify-center items-center ">
            <div className="md:w-5/12  w-10/12 h-full ">
                <div className=" flex  flex-col justify-between"
>
                    <div className=" aspect-square md:hover:scale-[99%] hover:grayscale transition-transform duration-500 relative flex items-center  hover:shadow-sm group "
                         style={
                             {backgroundColor: "#FAFBF4"}
                         }>
                            <img src={image}
                                 className=" cursor-pointer mx-auto object-cover aspect-square mt-1 w-11/12  "
                            />

                        <div className=" flex w-full h-full items-center opacity-0 md:group-hover:opacity-100 transition-all ease-in duration-200 justify-start uppercase  bg-opacity-20 backdrop-blur-sm bg-milk-darker absolute text-left">
                            {children}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
