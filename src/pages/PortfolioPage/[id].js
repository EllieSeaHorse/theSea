import React, { useRef, useEffect } from 'react';
import { projectsData } from '@/data/projectsData';
import Layout from '@/pages/layout';
import Link from "next/link";
import SmoothLink from "@/components/Transition/SmoothLink";


const id = ({ project }) => {
    const { title, year, subheading,services, description, coverImageUrl, statement, alt, images, color } = project;
    const currentIndex = projectsData.findIndex((p) => p.id === project.id);
    console.log(`current ${currentIndex}`)
    const length = projectsData.length;
    const getNextProjectId = () => {
        const nextIndex = (currentIndex + 1) % projectsData.length;
        return projectsData[nextIndex]?.id;
    };

    const getPreviousProjectId = () => {
        const previousIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
        return projectsData[previousIndex]?.id;
    };
    const containerRef = useRef(null);

    useEffect(() => {
        const handleWheel = (event) => {
            const container = containerRef.current;
            const delta = event.deltaY || event.detail || event.wheelDelta;

            if (container) {
                // Adjust the factor based on the desired scrolling speed
                const scrollFactor = 5;
                // Scroll horizontally by translating the scroll position
                container.scrollLeft += delta * scrollFactor;
            }

            // Prevent the default vertical scrolling behavior
            event.preventDefault();
        };

        // Attach the wheel event listener
        window.addEventListener('wheel', handleWheel, { passive: false });

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <Layout>
            <div className={"h-screen grid grid-cols-4"}>

            <div className={"hidden py-20 md:flex flex-col justify-between col-span-1 text-white"}>
                {/*<div>*/}
                {/*    <h1 className="text-3xl font-bold">{title}</h1>*/}
                {/*    <p>{subheading}</p>*/}
                {/*    <p>{year}</p>*/}
                {/*    <p className={"text-xs text-justify p-2 border-l"}>{description}</p>*/}
                {/*</div>*/}
                <div className={"border-l p-4 px-4 "}>
                    <h1 className="text-3xl font-medium uppercase ">{title}</h1>
                    <p className="text-gray-500 text-sm pl-2 ">{year}</p>

                </div>
                <div className={"text-xs"} style={{color:color}}>
                    {services.map((service, index) => (
                    <p key={index}>
                        - {service}
                    </p>
                ))}
                </div>

                <div className={"flex justify-between text-xs text-neutral-400 pr-6"}>
                    <Link href={`/PortfolioPage/${getPreviousProjectId()}`} >
                        <i className="bi bi-arrow-left-square"></i>
                    </Link>
                    <Link href={`/PortfolioPage/${getNextProjectId()}`} >
                        Next
                        <i className="p-2 bi bi-arrow-right-square"></i>

                    </Link>
                </div>

            </div>
            <div ref={containerRef} style={{ overflowX: 'auto', overflowY: 'hidden' } } className={" flex col-span-4 md:col-span-3"}>
                <div className={"md:hidden py-16 flex flex-col justify-between h-screen aspect-14 text-white"}>
                    {/*<div>*/}
                    {/*    <h1 className="text-3xl font-bold">{title}</h1>*/}
                    {/*    <p>{subheading}</p>*/}
                    {/*    <p>{year}</p>*/}
                    {/*    <p className={"text-xs text-justify p-2 border-l"}>{description}</p>*/}
                    {/*</div>*/}
                    <div className={"border-l p-4 "}>
                        <h1 className="text-3xl font-medium uppercase min-w-96">{title}</h1>
                        <p className="text-gray-500 text-sm pl-2 ">{year}</p>

                    </div>
                    <div className={"text-xs"} style={{color:color}}>
                        {services.map((service, index) => (
                            <p key={index}>
                                - {service}
                            </p>
                        ))}
                    </div>

                    <div className={"md:flex hidden justify-between text-xs text-neutral-400"}>
                        <Link href={`/PortfolioPage/${getPreviousProjectId()}`} >
                            <i className="bi bi-arrow-left-square"></i>
                        </Link>
                        <Link href={`/PortfolioPage/${getNextProjectId()}`} >
                            Next
                            <i className="p-2 bi bi-arrow-right-square"></i>

                        </Link>
                    </div>

                </div>

                <img  src={coverImageUrl} alt={`${alt}`}  className="h-full object-contain rounded-lg" />

                {images.map((image, index) => (
                        <img key={index} src={image.src} alt={`${image.alt} Image ${index + 1}`} className="pl-1 h-screen object-contain rounded-lg" />
                ))}
                <div className=" h-screen hidden md:aspect-square my-auto p-10 text-sm text-justify leading-5 md:flex items-center "><p>{statement}</p></div>

            </div>

            </div>


        </Layout>
    );
};

export default id;


export async function getStaticPaths() {
    const paths = projectsData.map((project) => ({
        params: { id: project.id.toString() }, // Convert the ID to string if it's not already
    }));

    return { paths, fallback: 'blocking' }; // Use 'blocking' for better SEO
}

export async function getStaticProps({ params }) {
    const projectId = params.id;
    const project = projectsData.find((p) => p.id === projectId);

    return {
        props: {
            project,
        },
    };
}

