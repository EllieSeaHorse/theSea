import HTMLFlipBook from "react-pageflip";
import React from "react";
import ReactPlayer from "react-player/lazy";
import Cover from "@/components/BookPages/Cover";

export default function Book() {
    return (
        <div className=" bg-slate-900 flex justify-center items-center h-screen"
        style={
            {backgroundImage: 'url(/portfolioImages/sea.jpg)',
            backgroundSize: 'cover'
            } // You can adjust this based on your design

        }>
            <HTMLFlipBook
                width={500}
                height={707}
                startPage={0}
                showCover={true}
                maxShadowOpacity={0.5}
                drawShadow={true}
            >
                <div className="bg-black shadow-gray-800 shadow-md">
                    <Cover/>
                </div>
                <div className="bg-black shadow-gray-800 shadow-md">
                    <img src={'/portfolioImages/A4 - 2.jpg'} className={'absolute'}/>
                    <div className={
                        'left-page'
                    }></div>
                </div>
                <div className="demoPage bg-slate-600">
                    <img src={'/portfolioImages/A4 - 3.jpg'} className={'absolute'}/>

                </div>
                <div className="demoPage bg-red-300">
                    <img src={'/portfolioImages/A4 - 16.jpg'} className={'absolute'}/>
                    <div className={
                        'left-page'
                    }></div>
                </div>
                <div className="demoPage bg-lime-300">
                    <img src={'/portfolioImages/A4 - 17.png'}/>

                </div>
                <div className="demoPage bg-lime-400">
                    <img src={'/portfolioImages/A4 - 34.png'} className={'absolute'}/>
                    <div className={
                        'left-page'
                    }></div>

                </div>
                <div className="demoPage bg-slate-600">
                    <img src={'/portfolioImages/A4 - 35.png'}/>

                </div>
                <div className="demoPage bg-red-300">
                    <ReactPlayer
                        url={'/portfolioImages/Last Part.mp4'}
                        muted={true}
                        controls={true}
                        width="530px"
                    >

                    </ReactPlayer>
                    {/*< video src={'/portfolioImages/Last Part.mp4'} autoPlay={true} className={'object-cover'} controls={true}/>*/}

                </div>
                <div className="demoPage bg-lime-300">
                    <img src={'/portfolioImages/A4 - 39.png'}/>

                </div>
                <div className="demoPage bg-lime-400">Page 3</div>
                <div className="demoPage bg-slate-600">Page 4</div>
                <div className="demoPage bg-slate-600">Page 4</div>
            </HTMLFlipBook>
        </div>
    );
}
