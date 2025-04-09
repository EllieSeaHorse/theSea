import HTMLFlipBook from "react-pageflip";
import React from "react";
import PropTypes from "prop-types";

export default function Book({ images }) {
    const defaultWidth = 500;
    const defaultHeight = 600;


    return (
        <div className="flex z-50 items-center mx-12 justify-center py-1 my-16 overflow-visible rounded-2xl">
            <HTMLFlipBook
            width={images?.[0]?.width || defaultWidth} // Fallback if images[0] or width is missing
            height={images?.[0]?.height || defaultHeight} // Fallback if images[0] or height is missing                height={images[0].height}
                startPage={0}
                showCover={true}
                maxShadowOpacity={0.3}
                drawShadow={true}
                size="stretch"
                maxHeight={700}
                maxWidth={700}
                minHeight={300}
                minWidth={300}
                usePortrait={true}
                mobileScrollSupport={true}
                showPageCorners={true}
            >
                {/* <div className="bg-paper items-center shadow-black shadow-lg"></div> */}

                {images.map((page, index) => (
                    <div key={index} className="bg-white items-center  aspect-auto">
                        <img
                            src={page.src}
                            className="cursor-pointer mx-auto object-cover w-full"
                        />
                    </div>
                ))}
            </HTMLFlipBook>
        </div>
    );
}

Book.defaultProps = {
    images: [],
};

Book.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};


// import HTMLFlipBook from "react-pageflip";
// import React from "react";

// export default function Book({

//                                  images
// }) {
//     return (
//         <div className="ml-12 md:ml-16 flex p-1 items-center justify-center py-1 my-2 rounded-2xl">
//             <HTMLFlipBook
//                 width={500}
//                 height={600}
//                 startPage={0}
//                 showCover={true}
//                 maxShadowOpacity={0.5}
//                 drawShadow={true}
//                 size={"stretch"}
//                 maxHeight={600}
//                 maxWidth={500}
//                 minHeight={300}
//                 minWidth={250}
//                 usePortrait={true}
//                 mobileScrollSupport={true}
//                 showPageCorners={true}

//             >
//                 <div className={` bg-paper items-center shadow-black shadow-lg`}>


//                     {/* <Cover title={title} year={year} services={services} subheading={subheading} description={description} image={coverImageUrl} color={color}
//                        className={"bg-black shadow-gray-800 shadow-inner"}>
//                 </Cover> */}
//                 </div>
//                 {images.map((page, index) => (
//                     <div key={index} className={`bg-white items-center shadow-lg aspect-A4`}>
//                         { index>=0 &&
//                         <p className={"fixed w-full bottom-0 text-xs text-center text-gray-500 p-2 "}>{index}</p>
//                     }
//                             <img
//                                 key={index}
//                                 src={page}
//                                 className="cursor-pointer mx-auto object-cover w-full"
//                             />
//                     </div>
//                 ))}
//             </HTMLFlipBook>
//         </div>
//     );
// }
