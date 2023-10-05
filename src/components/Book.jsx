import HTMLFlipBook from "react-pageflip";
import React from "react";
import ReactPlayer from "react-player/lazy";
import Cover from "@/components/BookPages/Cover";

export default function Book() {
    return (
        <div className="flex  p-4 items-center justify-center top-8 right-8s h-[80%] rounded-2xl"
        // style={
        //     {backgroundImage: 'url(/portfolioImages/sea.jpg)',
        //     backgroundSize: 'cover'
        //     } // You can adjust this based on your design
        //
        // }
        >
            <HTMLFlipBook
                width={400}
                height={566}
                startPage={0}
                showCover={true}
                maxShadowOpacity={0.5}
                drawShadow={true}
                size={"stretch"}
                maxHeight={600}
                maxWidth={500}
                minHeight={350.35}
                minWidth={250}
                usePortrait={true}
                mobileScrollSupport={true}

            >
                <div className="bg-black shadow-black shadow-lg aspect-A4">
                    <Cover/>
                </div>
                <div className="bg-black shadow-black shadow-lg aspect-A4">
                    <Cover/>
                </div>
                <div className="bg-black shadow-black shadow-lg aspect-A4">
                    <Cover/>
                </div>
                <div className="bg-black shadow-black shadow-lg aspect-A4">
                    <Cover/>
                </div>

            </HTMLFlipBook>
        </div>
    );
}
