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
                            date,
                              services,
                              description,
                              coverImageUrl,
                                alt,
                              images,
                              className,
                                logo,
                              color,
                              children,
    category
                          }) => {
    const sectionStyle = {
        backgroundColor: color,
        mixBlendMode : overlay
    };

    return (
        <div className={`${className} border-t  border-gray-200 py-10 overflow-x-hidden grid grid-cols-1 text-left items-center `}
        >

            <div className="
            col-span-1 
            p-6
            
              items-center justify-center align-middle self-center ">
                <Link  href={`/${category}/${id}`} >
                    {/* <div className=" grid grid-cols-1 items-center md:grid-cols-1 p-6 md:p-10 md:pl-14  w-2/3 rounded-2xl "> */}
                    {/* <div className={"pl-6 mb-5 border-l items-end"}>
                        <h1 className="text-3xl font-medium uppercase">{title}</h1>
                        <h1 className="opacity-80 text-sm pb-1 font-medium uppercase">{subheading}</h1>

                        <p className="opacity-60 text-xs ">{new Date(date).getFullYear()}</p>

                    <div className={"text-xs py-4"} style={{color:color}}>
                        {services.map((service, index) => (
                            <span key={index}>
                                 {(index > 0 && " / ")}{service}
                            </span>
                        ))}
                    </div>
                        <p className="text-xs">{description}</p>

                    </div> */}

                    <Cover title={title} services={services} subheading={subheading} description={description} alt={alt} image={coverImageUrl} color={color}
                           className={"bg-black w-1/2 shadow-gray-800  shadow-inner"}>
                        {children}
                    </Cover>
                        {/* </div> */}
                </Link>

            </div>
        </div>
    );
};

export default PortfolioSection;

//old version

// const PortfolioSection = ({
//     id,
//   title,
//   subheading,
// date,
//   services,
//   description,
//   coverImageUrl,
//     alt,
//   images,
//     logo,
//   color,
//   children,
// category
// }) => {
// const sectionStyle = {
// backgroundColor: color,
// mixBlendMode : overlay
// };

// return (
// <div className="overflow-x-hidden grid grid-cols-1 text-left items-center h-fit md:h-screen -z-30 "
// >

// <div className="col-span-1 pl-4 pr-4  md:pl-20 md:pr-4  items-center justify-center align-middle flex self-center ">
// <Link  href={`/${category}/${id}`} >
// <div className=" grid grid-cols-1 items-center md:grid-cols-2 p-6 md:p-10 md:pl-14   w-full rounded-2xl ">
// <div className={"pl-6 mb-5 border-l items-end"}>
// <h1 className="text-3xl font-medium uppercase">{title}</h1>
// <h1 className="opacity-80 text-sm pb-1 font-medium uppercase">{subheading}</h1>

// <p className="opacity-60 text-xs ">{new Date(date).getFullYear()}</p>

// <div className={"text-xs py-4"} style={{color:color}}>
// {services.map((service, index) => (
// <span key={index}>
//      {(index > 0 && " / ")}{service}
// </span>
// ))}
// </div>
// <p className="text-xs">{description}</p>

// </div>

// <Cover title={title} services={services} subheading={subheading} description={description} alt={alt} image={coverImageUrl} color={color}
// className={"bg-black shadow-gray-800  shadow-inner"}>
// {children}
// </Cover>
// </div>
// </Link>

// </div>
// </div>
// );
// };

// export default PortfolioSection;
