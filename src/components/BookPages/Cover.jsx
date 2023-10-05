import React from "react";

export default function Cover() {
    return (
        <div className="flex flex-col justify-between aspect-A4">
            {/*<div className="">*/}

            {/*    <img*/}
            {/*        src="/portfolioImages/heyyy.gif"*/}
            {/*        // muted={true}*/}
            {/*        // loop={true}*/}
            {/*        // autoPlay={true}*/}
            {/*        className="absolute z-40 aspect-square object-cover p-5 filter grayscale w-full object-left"*/}
            {/*    ></img>*/}
            {/*    <div*/}
            {/*        className="absolute z-40 bg-accent aspect-square object-cover*/}
            {/*        w-full object-left mix-blend-color"*/}
            {/*    >*/}
            {/*    </div>*/}
            {/*</div>*/}
            <img src={'/portfolioImages/A4 - 1.jpg'} className={'absolute'}/>

            {/*<div>*/}
            {/*        <p className="text-left px-4 text-zinc text-lg*/}
            {/*        font-medium font-['Montserrat'] uppercase*/}
            {/*        leading-snug tracking-wide">*/}
            {/*            Sama Moayeri</p>*/}
            {/*        <p className="text-center z-40*/}
            {/*        text-zinc text-7xl font-medium font-montserrat*/}
            {/*        uppercase tracking-wider self-center">*/}
            {/*            PortFolio*/}
            {/*        </p>*/}
            {/*</div>*/}

        </div>
    );
}
