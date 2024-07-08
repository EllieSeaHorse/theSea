//
import React from 'react';
import ShareButtons from "@/components/Share";

const ImageWithShare = ({ imageSrc, imageAlt, imageAltEnglish, imageAltFarsi, imageWidth, imageHeight }) => {
    const fullImageUrl = `https://samamoy.com/${imageSrc}`;

    return (
        // <div className="relative inline-block">
            <img
                loading="lazy"
                src={imageSrc}
                alt={imageAltEnglish ? `${imageAltEnglish} ${imageAltFarsi}` : `${imageAlt}`}
                data-pin-do="embedPin"
                data-pin-lang="en"
                width={imageWidth ? imageWidth : "1700"}
                height={imageHeight ? imageHeight : "1100"}
                className="md:pt-14 pb-1 pt-1 md:pb-3 md:pr-2 h-auto md:h-screen object-contain"
            >
                {/*<ShareButtons imageUrl={fullImageUrl} />*/}
            </img>
            // {/*<div className="absolute bottom-0 left-0 m-4">*/}
            // {/*    <ShareButtons imageUrl={fullImageUrl} />*/}
            // {/*</div>*/}
        // </div>
    );
};

export default ImageWithShare;

//
// const ImageWithShare = ({className, imageSrc , imageAltEnglish, imageAltFarsi, imageAlt , imageWidth, imageHeight}) => {
//     return (
//         // <div
//         //     style={
//         //     {
//         //         width: `2000px`
//         //     ,
//         //      height: '2000px'
//         //     }
//         // }
//         //
//         //     className={'bg-red-700 overflow-scroll'}>
//         <img
//             loading="lazy"
//             // key={index}
//             src={imageSrc}
//             alt={imageAltEnglish ? `${imageAltEnglish} ${imageAltFarsi}` : `${imageAlt}`}
//             data-pin-do="embedPin"
//             data-pin-lang="en"
//             width={imageWidth ? `${imageWidth} ` : `1700`}
//             height={imageHeight ? `${imageHeight} ` : `1100`}
//             className="md:pt-14 pb-1 pt-1 md:pb-3 md:pr-2 h-auto md:h-screen object-contain"
//         />
//         //     {/*<div*/}
//         //     {/*className={'h-4 w-4 bg-red-700'}>*/}
//         //
//         //     {/*</div>*/}
//         //
//      // </div>
//
//     );
//
// };
//
// export default ImageWithShare;