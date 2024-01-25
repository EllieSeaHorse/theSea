

import React, { useRef, useEffect, useState } from 'react';
import { projectsData } from '@/data/projectsData';
import Layout from '@/pages/layout';
import Link from "next/link";
import { motion } from "framer-motion";
import Head from 'next/head';
import useLoadingState from '@/components/Hooks/useLoadingState';
import LoadingVisual from "@/components/Transition/LoadingVisual";
import { useRouter } from 'next/router';

const id = ({ project }) => {
    const router = useRouter();
    const sortedProjects = projectsData.sort((a, b) => new Date(b.date) - new Date(a.date));

    const { title, year, subheading, services, description, logo, coverImageUrl, date ,statement, keyWords, images, color } = project;
    const currentIndex = sortedProjects.findIndex((p) => p.id === project.id);
    const length = sortedProjects.length;
    const getNextProjectId = () => {
        const nextIndex = (currentIndex + 1) % sortedProjects.length;
        return sortedProjects[nextIndex]?.id;
    };

    const getPreviousProjectId = () => {
        const previousIndex = (currentIndex - 1 + sortedProjects.length) % sortedProjects.length;
        return sortedProjects[previousIndex]?.id;
    };

    const containerRef = useRef(null);
    const imageLoadCounter = useRef(0);

    useEffect(() => {
        const handleWheel = (event) => {
            const container = containerRef.current;
            const delta = event.deltaY || event.detail || event.wheelDelta;

            if (container) {
                const scrollFactor = 5;
                container.scrollLeft += delta * scrollFactor;
            }

            event.preventDefault();
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleRouteChange = () => {
            setLoading(true);

            if (containerRef.current) {
                containerRef.current.scrollLeft = 0;
            }
        };

        const handleImageLoad = () => {
            imageLoadCounter.current += 1;

            if (imageLoadCounter.current === images.length) {
                // All images have loaded
                setLoading(false);
            }
        };

        router.events.on('routeChangeStart', handleRouteChange);

        images.forEach((image) => {
            const img = new Image();
            img.src = image.src;
            img.onload = handleImageLoad;
        });

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router.events, images]);


        const handleNavigation = (id) => {
        // Scroll to the top of the page
        window.scrollTo(0, 0);

        // Navigate to the next/previous project
        router.push(`/Project/${id}`);
    };

    return (
        <Layout>
            {/*{isTransitioning && <LoadingVisual />}*/}
            <Head>
                {/* Meta tags for SEO */}
                <title>{title} {subheading} Design Project</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keyWords} />
                {/* Other meta tags as needed */}

                {/* OpenGraph meta tags for social media sharing (optional) */}
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description}/>
                <meta property="og:image" content="url-to-your-image" />
                <meta property="og:url" content="url-to-your-page" />

                {/* Twitter meta tags for social media sharing (optional) */}
                <meta name="twitter:title" content="Your Page Title" />
                <meta name="twitter:description" content="Your page description" />
                <meta name="twitter:image" content="url-to-your-image" />
                <meta name="twitter:card" content="summary_large_image" />

            </Head>

            <div

                className={"h-screen grid grid-cols-4 pl-8"}>

                <div className={"hidden py-20 md:flex flex-col justify-between col-span-1 text-white"}>
                    {/*<div>*/}
                    {/*    <h1 className="text-3xl font-bold">{title}</h1>*/}
                    {/*    <p>{subheading}</p>*/}
                    {/*    <p>{year}</p>*/}
                    {/*    <p className={"text-xs text-justify p-2 border-l"}>{description}</p>*/}
                    {/*</div>*/}

                    <div className={"border-l p-4 px-4"}>
                        <h1 className="text-3xl font-medium uppercase ">{title}</h1>
                        <h1 className="opacity-80 text-sm pb-1 font-medium uppercase">{subheading}</h1>
                        <p className="text-gray-500 text-sm">{new Date(date).getFullYear()}</p>
                    </div>

                    <div className={"text-xs px-2"} >
                        {((logo != '') &&
                            <img
                                src={project.logo}
                                alt={`${project.title}'s Logo `}
                                className={"pb-4 w-20 z-50 object-cover object-center "}
                            />
                        )}
                        <p className="text-xs ">{description}</p>
                        <div className={"text-xs py-4"} style={{color:color}}>
                            {services.map((service, index) => (
                                <span key={index}>
                                 {(index > 0 && " / ")}{service}
                            </span>
                            ))}
                        </div>
                    </div>

                    <div className={"flex justify-between text-xs pr-6"}>

                        <a onClick={() => handleNavigation(getPreviousProjectId())}>
                            <i className="cursor-pointer opacity-75 hover:opacity-100 bi bi-arrow-left-square"></i>
                        </a>
                        <a
                            className={"cursor-pointer opacity-75 hover:opacity-100 "}
                            onClick={() => handleNavigation(getNextProjectId())}>
                            {sortedProjects.find((project) => project.id === getNextProjectId())?.title}
                            <i className="p-2 bi bi-arrow-right-square"></i>
                        </a>

                    </div>

                </div>
                <motion.div

                    initial={{  x: 200 }}
                    animate={{  x: 0 }}
                    exit={{ x: 20 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 50,
                    }}

                    ref={containerRef} style={{ overflowX: 'auto', overflowY: 'hidden' } } className={"rounded flex col-span-4 md:col-span-3"}>
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
                        <div className={"text-xs py-4"} style={{color:color}}>
                            {services.map((service, index) => (
                                <span key={index}>
                                 {(index > 0 && " / ")}{service}
                            </span>
                            ))}
                        </div>
                        <p className="text-xs ">{description}</p>

                        <div className={"md:flex hidden justify-between text-xs text-neutral-400"}>
                            <Link href={`/Project/${getPreviousProjectId()}`} >
                                <i className="bi bi-arrow-left-square"></i>
                            </Link>
                            <Link href={`/Project/${getNextProjectId()}`} >
                                Next
                                <i className="p-2 bi bi-arrow-right-square"></i>

                            </Link>
                        </div>

                    </div>

                    {/*<img  src={coverImageUrl} alt={`${alt}`}  className="pt-16 object-contain rounded-lg" />*/}

                    {images.map((image, index) => (
                        <img
                            loading="lazy"
                            key={index}
                            src={image.src}
                            alt={image.alt.english ? `${image.alt.english} ${image.alt.farsi}` : `${image.alt}`}
                            data-pin-do="embedPin"
                            data-pin-lang="en"
                            width={image.width ? `${image.width} ` : `1700`}
                            height={image.height ? `${image.height} ` : `1100`}
                            className=" pt-14 pb-3 pr-2 h-screen object-contain"
                        />
                    ))}
                    {(statement !== '') &&
                        <div className=" py-16 px-1 h-screen hidden md:aspect-12 my-auto text-sm  leading-4 md:flex items-stretch ">

                            <div className={"px-10 text-xs leading-5 pr-12 py-20 rounded "}><p className={"text-base pb-2.5"}>{title}
                            </p> {statement}</div>
                        </div>}

                </motion.div>

            </div>


        </Layout>
    );
};

export default id;

// ... (your existing getStaticPaths and getStaticProps)

const fetchProjectData = async (id) => {
    return projectsData.find((p) => p.id === id);
};


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
