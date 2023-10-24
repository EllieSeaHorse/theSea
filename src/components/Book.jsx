import HTMLFlipBook from "react-pageflip";
import React from "react";
import ReactPlayer from "react-player/lazy";
import Cover from "@/components/BookPages/Cover";

export default function Book() {
    return (
        <div className="flex p-4 items-center justify-center h-screen rounded-2xl"
        // style={
        //     {backgroundImage: 'url(/portfolioImages/sea.jpg)',
        //     backgroundSize: 'cover'
        //     } // You can adjust this based on your design
        //
        // }
        >
            <HTMLFlipBook
                width={400}
                height={565}
                startPage={0}
                showCover={true}
                maxShadowOpacity={0.5}
                drawShadow={true}
                size={"stretch"}
                maxHeight={565}
                maxWidth={400}
                minHeight={350.35}
                minWidth={250}
                usePortrait={true}
                mobileScrollSupport={true}
                // className={'items-center self-end top-8 right-8s h-[80%] rounded-2xl'}

            >
                <div className="bg-black shadow-black shadow-lg aspect-A4">
                    <Cover/>
                </div>
                <div className="bg-black shadow-black shadow-lg aspect-A4">
                    <img src={'/portfolioImages/A4 - 2.jpg'} className={'absolute'}/>
                </div>
                <div className="bg-black shadow-black shadow-lg aspect-A4">
                    <img src={'/portfolioImages/A4 - 3.jpg'} className={'absolute'}/>
                </div>
                <div className="bg-black shadow-black shadow-lg aspect-A4">
                    <img src={'/portfolioImages/A4 - 16.jpg'} className={'absolute'}/>
                </div>
                <div className="bg-black shadow-black shadow-lg aspect-A4">
                    <img src={'/portfolioImages/A4 - 17.jpg'} className={'absolute'}/>
                </div>
                <div className="bg-black shadow-black shadow-lg aspect-A4">
                    <img src={'/portfolioImages/A4 - 46.png'} className={'absolute'}/>
                </div>
                <div className="bg-black shadow-black shadow-lg aspect-A4">
                    <img src={'/portfolioImages/A4 - 52.png'} className={'absolute'}/>
                </div>
                <div className="bg-black shadow-black shadow-lg aspect-A4">
                    <img src={'/portfolioImages/A4 - 47.png'} className={'absolute'}/>
                </div>
                <div className="bg-black shadow-black shadow-lg aspect-A4">
                    <img src={'/portfolioImages/A4 - 38.png'} className={'absolute'}/>
                </div>
                <div className="bg-black shadow-black shadow-lg aspect-A4">
                    <img src={'/portfolioImages/A4 - 38.jpg'} className={'absolute'}/>
                </div>
                <div className="bg-black shadow-black shadow-lg aspect-A4">
                    <img src={'/portfolioImages/A4 - 38.jpg'} className={'absolute'}/>
                </div>
                <div className="bg-black shadow-black shadow-lg aspect-A4">
                    <img src={'/portfolioImages/A4 - 38.jpg'} className={'absolute'}/>
                </div>
                <div className="bg-black shadow-black shadow-lg aspect-A4">
                    <img src={'/portfolioImages/A4 - 38.jpg'} className={'absolute'}/>
                </div>
                <div className="bg-black shadow-black shadow-lg aspect-A4">
                    <img src={'/portfolioImages/A4 - 38.jpg'} className={'absolute'}/>
                </div>

            </HTMLFlipBook>
         </div>
    );
}
