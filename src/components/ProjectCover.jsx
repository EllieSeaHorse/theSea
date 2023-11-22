// Inside your Next.js component file

import { useState } from 'react';
import Link from "next/link";

const ProjectCover = ({ worksData }) => {
    const [imageIndex, setImageIndex] = useState(0);
    let timer;

    const startSlideShow = (id) => {
        timer = setInterval(() => {
            const images = document.querySelectorAll(`#project-${id} .image-${id}`);
            images.forEach((image, index) => {
                image.style.display = 'none';
            });

            images[imageIndex].style.display = 'block';
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1000); // Display each image for 1 second
    };

    const stopSlideShow = () => {
        clearInterval(timer);
        setImageIndex(0);
    };

    return (
        <>
            {worksData.map((work) => (
                <Link key={work.id} href={`/Works/${work.id}`}>
                    <div
                        id={`project-${work.id}`}
                        className="relative rounded-xl overflow-hidden hover:scale-105 transition-all duration-500 mb-1"
                        onMouseEnter={() => startSlideShow(work.id)}
                        onMouseLeave={stopSlideShow}
                    >
                        {/* Rest of your code remains the same */}
                    </div>
                </Link>
            ))}
        </>
    );
};

export default ProjectCover;
