import { useState } from 'react';
import { worksData } from "@/data/worksData";
import Layout from "@/pages/layout";

const Id = ({ work }) => {
    const { title, year, description, images } = work;
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const openModal = (index) => {
        setCurrentSlide(index);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <Layout>
            <div className={"border-l-2 p-4  px-8 "}>
                <h1 className="text-5xl font-medium uppercase ">{title}</h1>
            <p className="text-gray-500 pl-2 ">{year}</p>
            </div>
            <p className="text-justify mt-2 text-sm p-16">{description}</p>
            <div className="grid grid-cols-1 bg-white p-2 md:grid-cols-3 gap-4 mt-4">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`${title} Image ${index + 1}`}
                        className="cursor-pointer mx-auto object-cover w-full h-64 md:h-auto"
                        onClick={() => openModal(index)}
                    />
                ))}
            </div>


            {/* Modal for the slideshow */}
            {modalIsOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-white backdrop-blur-lg flex items-center justify-center z-10 bg-opacity-80">
                    {/* ... Slideshow code here ... */}
                    <div className="relative w-11/12 h-screen">
                        <div className="relative m-20 rounded-lg h-screen">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`absolute duration-700 ease-in-out w-full h-screen ${
                                        index === currentSlide ? 'block' : 'hidden'
                                    }`}
                                >

                                        <img
                                            src={image}
                                            className="z-20 mx-auto "
                                            alt={`Slide ${index + 1}`}
                                        />

                                </div>
                            ))}
                        </div>
                        <div className="absolute h-screen z-50 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 ">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={`w-3 h-3 rounded-2xl ${
                                        index === currentSlide ? 'bg-white' : 'bg-gray-400'
                                    }`}
                                    aria-current={index === currentSlide}
                                    aria-label={`Slide ${index + 1}`}
                                    onClick={() => setCurrentSlide(index)}
                                ></button>
                            ))}
                        </div>
                        <button
                            type="button"
                            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            onClick={goToPrevSlide}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                            </svg>                        </button>
                        <button
                            type="button"
                            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            onClick={goToNextSlide}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="absolute top-0 right-0 z-30 flex items-start justify-end px-4 cursor-pointer group focus:outline-none"
                            onClick={closeModal}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </Layout>
    );
};

export default Id;

// getStaticPaths and getStaticProps remain the same


export async function getStaticPaths() {
    const paths = worksData.map((work) => ({
        params: { id: work.id },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const work = worksData.find((w) => w.id === params.id);

    return {
        props: {
            work,
        },
    };
}
