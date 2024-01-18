import React from 'react';
import Book from "@/components/Book";
import {projectsData} from "@/data/projectsData";


const PortfolioSection = ({
                              title,
                              subheading,
                              year,
                              services,
                              description,
                              coverImageUrl,
                              images,
                              color,
                              children,
                          }) => {
    const sectionStyle = {
        backgroundColor: color,
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 m-8 text-left snap-y my-2 p-2 items-center  min-h-screen">

            <div className=" gap-2 col-span-1 md:col-span-4 p-2 rounded-2xl items-center align-middle self-center">
                <Book                                 title={title}
                                                      subheading={subheading}
                                                      year={year}
                                                      services={services}
                                                      description={description}
                                                      coverImageUrl={coverImageUrl}
                                                      images={images}
                                                      color={color}
                />
                {children}
            </div>
        </div>
    );
};

export default PortfolioSection;
