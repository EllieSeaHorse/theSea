import React from 'react';
import Book from "@/components/Book";
import {projectsData} from "@/data/projectsData";
import {overlay} from "three/nodes";
import Cover from "@/components/BookPages/Cover";
import Link from "next/link";


const PortfolioSection = ({
                                id,
                              title,
                              subheading,
                              year,
                              services,
                              description,
                              coverImageUrl,
                                alt,
                              images,
                              color,
                              children,
                          }) => {
    const sectionStyle = {
        backgroundColor: color,
        mixBlendMode : overlay
    };

    return (
        <div className="grid grid-cols-1  text-left snap-y items-center min-h-screen -z-30 "
        >
            {/*<img src={coverImageUrl}*/}
            {/*     className="absolute -z-10 blur-3xl  opacity-30 cursor-pointer object-fill w-full h-full shadow-lg  "*/}
            {/*/>*/}
            {/*<svg*/}
            {/*    className={"fixed -z-10 blur-[200px] text-red-600 opacity-60 cursor-pointer object-contain w-full h-full shadow-lg "}*/}
            {/*    width="1358" height="844" viewBox="0 0 1358 844" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*    <path d="M5.66187 304.172C3.61444 301.929 1.88881 299.704 0.5 297.5C0.5 285.164 1.80939 288.936 5.66187 304.172C78.5548 384.029 559.345 486.407 771 447.5C988.6 407.5 1269.83 163 1358 0L1188 844C867.668 843 371 844 227.002 719.5C71.5661 585.111 20.2875 362.017 5.66187 304.172Z"*/}
            {/*          fill={color}/>*/}
            {/*</svg>*/}


            <div
                className="absolute blur-3xl mix-blend-multiply cursor-pointer mx-auto object-fill w-full h-full shadow-lg  "
                // style={sectionStyle}

            >
            </div>
            <div className="col-span-1  items-center justify-center align-middle flex self-center ">
                <Link  href={`/PortfolioPage/${id}`} className=" grid grid-cols-1 items-center md:grid-cols-2 p-6 md:p-10 md:pl-14   w-full rounded-2xl ">
                    <div className={"pl-6 mb-5 border-l items-end"}>
                        <h1 className="text-2xl font-medium uppercase">{title}</h1>
                        <p className="text-gray-500 text-sm ">{year}</p>

                    <div className={"text-xs py-4"} style={{color:color}}>
                        {services.map((service, index) => (
                            <span key={index}>
                                 {(index > 0 && " / ")}{service}
                            </span>
                        ))}
                    </div>
                        <p className="text-xs ">{description}</p>

                    </div>


                    <Cover title={title} year={year} services={services} subheading={subheading} description={description} alt={alt} image={coverImageUrl} color={color}
                           className={"bg-black shadow-gray-800 aspect-A4 shadow-inner"}>
                    </Cover>
                </Link>

            </div>
        </div>
    );
};

export default PortfolioSection;
