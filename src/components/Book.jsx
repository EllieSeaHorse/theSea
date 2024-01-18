import HTMLFlipBook from "react-pageflip";
import React from "react";
import Cover from "@/components/BookPages/Cover";

export default function Book({
                                 title,
                                 subheading,
                                 year,
                                 services,
                                 description,
                                 coverImageUrl,
                                 images,
                                 color,
                                 children
}) {
    return (
        <div className="flex p-1 items-center justify-center py-1 my-2 rounded-2xl">
            <HTMLFlipBook
                width={500}
                height={600}
                startPage={0}
                showCover={true}
                maxShadowOpacity={0.5}
                drawShadow={true}
                size={"stretch"}
                maxHeight={600}
                maxWidth={500}
                minHeight={300}
                minWidth={250}
                usePortrait={true}
                mobileScrollSupport={true}
                showPageCorners={true}
            >
                <div className={` bg-paper items-center  shadow-lg aspect-square`}>

                <Cover title={title} year={year} services={services} subheading={subheading} image={coverImageUrl} className={"bg-black shadow-gray-800"}>
                </Cover>
                </div>
                {images.map((page, index) => (
                    <div key={index} className={` bg-white items-center  shadow-lg aspect-square`}>
                        {/*{page}*/}
                        { index>=0 &&
                        <p className={"fixed w-full bottom-0 text-xs text-center text-gray-500 p-2 "}>{index}</p>
                    }
                            <img
                                key={index}
                                src={page}
                                className="cursor-pointer mx-auto object-cover w-full p-4 "
                            />
                    </div>
                ))}
            </HTMLFlipBook>
        </div>
    );
}
