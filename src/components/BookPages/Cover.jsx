import React from "react";

export default function Cover() {
    return (
        <div className="flex flex-col justify-between aspect-A4">
            <div className="">

                <img
                    src="/portfolioImages/heyyy.gif"
                    // muted={true}
                    // loop={true}
                    // autoPlay={true}
                    className="aspect-square object-cover filter grayscale w-full object-left"
                ></img>
            </div>
            <div>
                    <p className="text-left px-4 text-zinc text-lg
                    font-medium font-['Montserrat'] uppercase
                    leading-snug tracking-wide">
                        Sama Moayeri</p>
                    <p className="text-center z-40
                    text-zinc text-7xl font-medium font-montserrat
                    uppercase tracking-wider self-center">
                        PortFolio
                    </p>
            </div>

        </div>
    );
}
