"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// ImageSlider component
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const openFullScreen = (index) => {
    setCurrentIndex(index);
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <div>
      {/* Thumbnail Grid */}
      <div className= "p-4 transition-all duration-500 grid grid-cols-3 md:grid-cols-4 gap-1">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full aspect-auto cursor-pointer"
            onClick={() => openFullScreen(index)}
          >
            <Image
              src={image.src}
              alt={image.alt || `Thumbnail ${index + 1}`}
              width={350}
              height={350}
              objectFit="fill"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Full-Screen Slider */}
      {isFullScreen && (
        <div className="transition-all duration-500 fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50">
          <button
            className="transition-all duration-500 absolute top-4 right-4 text-white bg-neutral-800 p-2 rounded-full"
            onClick={closeFullScreen}
          >
            <X size={24} />
          </button>

          <div className="relative w-full h-[80vh] flex justify-center items-center">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt || `Image ${currentIndex + 1}`}
              layout="fill"
              objectFit="contain"
              className="rounded-xl"
            />
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-neutral-800 p-2 rounded-full"
              onClick={prevSlide}
            >
              <ChevronLeft size={32} />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-neutral-800 p-2 rounded-full"
              onClick={nextSlide}
            >
              <ChevronRight size={32} />
            </button>
          </div>

          <div className="flex justify-center mt-4">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-1 mx-1 ${
                  index === currentIndex
                    ? "bg-accent rounded-xl"
                    : "bg-gray-500 rounded-xl"
                } transition-all duration-500`}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;


// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// interface ImageSliderProps {
//   images: { src: string; alt?: string }[]; // Array of image objects
// }

// const ImageSlider = ({ images }: ImageSliderProps) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   useEffect(() => {
//     if (!isHovered && images.length > 0) {
//       const interval = setInterval(() => {
//         nextSlide();
//       }, 3000);
//       return () => clearInterval(interval);
//     }
//   }, [isHovered, images]);

//   return (
//     <div className="relative w-full mx-auto mt-6">
//       {images.length > 0 ? (
//         <>
//           <div
//             className="relative h-[460px] mx-12 group hover:-translate-y-2"
//             onMouseOver={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <Image
//               src={images[currentIndex]?.src}
//               alt={images[currentIndex]?.alt || `Image ${currentIndex + 1}`}
//               layout="fill"
//               objectFit="cover"
//               className="rounded-xl transition-all duration-500 ease-in-out"
//             />
//           </div>

//           <button
//             className="absolute left-0 top-1/2 transform h-[459px] rounded-xl hover:bg-[#1a222f] mx-1 -translate-y-1/2 bg-[#111927] text-white p-2"
//             onClick={prevSlide}
//           >
//             <ChevronLeft className="text-gray-400 hover:text-white" />
//           </button>
//           <button
//             className="absolute right-0 top-1/2 transform h-[459px] rounded-xl hover:bg-[#1a222f] mx-1 -translate-y-1/2 bg-[#111927] text-white p-2"
//             onClick={nextSlide}
//           >
//             <ChevronRight className="text-gray-400 hover:text-white" />
//           </button>

//           <div className="flex justify-center mt-4">
//             {images.map((_, index) => (
//               <div
//                 key={index}
//                 className={`h-1 w-10 mx-1 ${
//                   index === currentIndex
//                     ? "bg-accent rounded-xl"
//                     : "bg-gray-300 rounded-xl"
//                 } transition-all duration-500`}
//               ></div>
//             ))}
//           </div>
//         </>
//       ) : (
//         <p className="text-center text-gray-500">No images to display</p>
//       )}
//     </div>
//   );
// };

// export default ImageSlider;
