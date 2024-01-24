// import React, { useRef, useEffect, useState } from 'react';
// import { projectsData } from '@/data/projectsData';
// import Layout from '@/pages/layout';
// import Link from "next/link";
// import SmoothLink from "@/components/Transition/SmoothLink";
// import {motion} from "framer-motion";
// import Head from 'next/head';
// import { useRouter } from 'next/router';
//
//
//
//
//
// const id = ({ project }) => {
//     const router = useRouter(); // Initialize the useRouter hook
//
//     const { title, year, subheading,services, description, logo, coverImageUrl, statement, keyWords, images, color } = project;
//     const currentIndex = projectsData.findIndex((p) => p.id === project.id);
//     console.log(`current ${currentIndex}`)
//     const length = projectsData.length;
//     const getNextProjectId = () => {
//         const nextIndex = (currentIndex + 1) % projectsData.length;
//         return projectsData[nextIndex]?.id;
//     };
//
//     const getPreviousProjectId = () => {
//         const previousIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
//         return projectsData[previousIndex]?.id;
//     };
//     const containerRef = useRef(null);
//
//     useEffect(() => {
//         const handleWheel = (event) => {
//             const container = containerRef.current;
//             const delta = event.deltaY || event.detail || event.wheelDelta;
//
//             if (container) {
//                 // Adjust the factor based on the desired scrolling speed
//                 const scrollFactor = 5;
//                 // Scroll horizontally by translating the scroll position
//                 container.scrollLeft += delta * scrollFactor;
//             }
//
//             // Prevent the default vertical scrolling behavior
//             event.preventDefault();
//         };
//
//         // Attach the wheel event listener
//         window.addEventListener('wheel', handleWheel, { passive: false });
//
//         // Clean up the event listener on component unmount
//         return () => {
//             window.removeEventListener('wheel', handleWheel);
//         };
//     }, []);
//
//     const handleNavigation = (id) => {
//         // Scroll to the top of the page
//         window.scrollTo(0, 0);
//
//         // Navigate to the next/previous project
//         router.push(`/PortfolioPage/${id}`);
//     };
//
//
//     return (
//         <Layout>
//             {/*{isTransitioning && <LoadingVisual />}*/}
//             <Head>
//                 {/* Meta tags for SEO */}
//                 <title>{title} {subheading} Design Project</title>
//                 <meta name="description" content={description} />
//                 <meta name="keywords" content={keyWords} />
//                 {/* Other meta tags as needed */}
//
//                 {/* OpenGraph meta tags for social media sharing (optional) */}
//                 <meta property="og:title" content={title}/>
//                 <meta property="og:description" content={description}/>
//                 <meta property="og:image" content="url-to-your-image" />
//                 <meta property="og:url" content="url-to-your-page" />
//
//                 {/* Twitter meta tags for social media sharing (optional) */}
//                 <meta name="twitter:title" content="Your Page Title" />
//                 <meta name="twitter:description" content="Your page description" />
//                 <meta name="twitter:image" content="url-to-your-image" />
//                 <meta name="twitter:card" content="summary_large_image" />
//
//             </Head>
//
//             <div
//
//                 className={"h-screen grid grid-cols-4 pl-8"}>
//
//             <div className={"hidden py-20 md:flex flex-col justify-between col-span-1 text-white"}>
//                 {/*<div>*/}
//                 {/*    <h1 className="text-3xl font-bold">{title}</h1>*/}
//                 {/*    <p>{subheading}</p>*/}
//                 {/*    <p>{year}</p>*/}
//                 {/*    <p className={"text-xs text-justify p-2 border-l"}>{description}</p>*/}
//                 {/*</div>*/}
//
//                 <div className={"border-l p-4 px-4 "}>
//                     <h1 className="text-3xl font-medium uppercase ">{title}</h1>
//                     <h1 className="opacity-80 text-sm pb-1 font-medium uppercase">{subheading}</h1>
//                     <p className="text-gray-500 text-sm ">{year}</p>
//                 </div>
//
//                 <div className={"text-xs"} >
//                     {((logo != '') &&
//                     <img
//                         src={project.logo}
//                         className={"pb-4 w-20 z-50 object-cover object-center "}
//                     />
//                     )}
//                     <p className="text-xs py-2 opacity-60 pr-3">{description}</p>
//                     {services.map((service, index) => (
//                     <p
//                         style={{color:color}}
//                         key={index}>
//                         - {service}
//                     </p>
//                 ))}
//                 </div>
//
//                 <div className={"flex justify-between text-xs pr-6"}>
//
//                         <a onClick={() => handleNavigation(getPreviousProjectId())}>
//                             <i className="cursor-pointer opacity-75 hover:opacity-100 bi bi-arrow-left-square"></i>
//                         </a>
//                         <a
//                             className={"cursor-pointer opacity-75 hover:opacity-100 "}
//                             onClick={() => handleNavigation(getNextProjectId())}>
//                             Next
//                             <i className="p-2 bi bi-arrow-right-square"></i>
//                         </a>
//
//                 </div>
//
//             </div>
//             <motion.div
//
//                 initial={{  x: 200 }}
//                 animate={{  x: 0 }}
//                 exit={{ x: 20 }}
//                 transition={{
//                     type: "spring",
//                     stiffness: 200,
//                     damping: 50,
//                 }}
//
//                 ref={containerRef} style={{ overflowX: 'auto', overflowY: 'hidden' } } className={"rounded flex col-span-4 md:col-span-3"}>
//                 <div className={"md:hidden py-16 flex flex-col justify-between h-screen aspect-14 text-white"}>
//                     {/*<div>*/}
//                     {/*    <h1 className="text-3xl font-bold">{title}</h1>*/}
//                     {/*    <p>{subheading}</p>*/}
//                     {/*    <p>{year}</p>*/}
//                     {/*    <p className={"text-xs text-justify p-2 border-l"}>{description}</p>*/}
//                     {/*</div>*/}
//                     <div className={"border-l p-4 "}>
//                         <h1 className="text-3xl font-medium uppercase min-w-96">{title}</h1>
//                         <p className="text-gray-500 text-sm pl-2 ">{year}</p>
//
//                     </div>
//                     <div className={"text-xs"} style={{color:color}}>
//                         {services.map((service, index) => (
//                             <p key={index}>
//                                 - {service}
//                             </p>
//                         ))}
//                     </div>
//
//                     <div className={"md:flex hidden justify-between text-xs text-neutral-400"}>
//                         <Link href={`/PortfolioPage/${getPreviousProjectId()}`} >
//                             <i className="bi bi-arrow-left-square"></i>
//                         </Link>
//                         <Link href={`/PortfolioPage/${getNextProjectId()}`} >
//                             Next
//                             <i className="p-2 bi bi-arrow-right-square"></i>
//
//                         </Link>
//                     </div>
//
//                 </div>
//
//                 {/*<img  src={coverImageUrl} alt={`${alt}`}  className="pt-16 object-contain rounded-lg" />*/}
//
//                 {images.map((image, index) => (
//                         <img
//                             key={index}
//                             src={image.src}
//                             alt={`${image.alt} Image ${index + 1}`}
//                             data-pin-do="embedPin"
//                             data-pin-lang="en"
//                             className=" pt-14 pb-3 pr-6 h-screen object-contain"
//                              // style={{backgroundColor : color}}
//
//                         />
//                 ))}
//                 {(statement != '') &&
//                 <div className=" py-16 px-1 text-black h-screen hidden md:aspect-square my-auto text-sm text-justify leading-5 md:flex items-stretch ">
//
//                     <div className={"px-10 py-20 rounded bg-paper font-medium"}><p className={"text-base pb-2.5 font-semibold"}>{title}
//                     </p> {statement}</div>
//                 </div>}
//
//             </motion.div>
//
//             </div>
//
//
//         </Layout>
//     );
// };
//
// export default id;
//
// import React, { useRef, useEffect, useState } from 'react';
// import { projectsData } from '@/data/projectsData';
// import Layout from '@/pages/layout';
// import Link from "next/link";
// import { motion } from "framer-motion";
// import Head from 'next/head';
// import useLoadingState from '@/components/Hooks/useLoadingState';
// import LoadingVisual from "@/components/Transition/LoadingVisual";
// import { useRouter } from 'next/router';
//
// const id = ({ project }) => {
//     const router = useRouter();
//
//     const { title, year, subheading, services, description, logo, coverImageUrl, statement, keyWords, images, color } = project;
//     const currentIndex = projectsData.findIndex((p) => p.id === project.id);
//     const length = projectsData.length;
//     const getNextProjectId = () => {
//         const nextIndex = (currentIndex + 1) % projectsData.length;
//         return projectsData[nextIndex]?.id;
//     };
//
//     const getPreviousProjectId = () => {
//         const previousIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
//         return projectsData[previousIndex]?.id;
//     };
//
//     const containerRef = useRef(null);
//
//     useEffect(() => {
//         const handleWheel = (event) => {
//             const container = containerRef.current;
//             const delta = event.deltaY || event.detail || event.wheelDelta;
//
//             if (container) {
//                 const scrollFactor = 5;
//                 container.scrollLeft += delta * scrollFactor;
//             }
//
//             event.preventDefault();
//         };
//
//         window.addEventListener('wheel', handleWheel, { passive: false });
//
//         return () => {
//             window.removeEventListener('wheel', handleWheel);
//         };
//     }, []);
//
//     const [loading, setLoading] = useState(true);
//
//     useEffect(() => {
//         const handleRouteChange = () => {
//             setLoading(true);
//
//             if (containerRef.current) {
//                 containerRef.current.scrollLeft = 0;
//             }
//         };
//
//         const handleImageLoad = () => {
//             setLoading(false);
//         };
//
//         router.events.on('routeChangeStart', handleRouteChange);
//         window.onload = handleImageLoad;
//
//         return () => {
//             router.events.off('routeChangeStart', handleRouteChange);
//             window.onload = null;
//         };
//     }, [router.events]);
//
//     return (
//         <Layout>
//             {loading && <LoadingVisual />}
//             <Head>
//                 {/* Meta tags for SEO */}
//                 {/* ... (your existing meta tags) */}
//             </Head>
//
//             <div className={"h-screen grid grid-cols-4 pl-8"}>
//                 {/* ... (your existing content) */}
//             </div>
//         </Layout>
//     );
// };
//
// export default id;
//
// // ... (your existing getStaticPaths and getStaticProps)
//
//


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

    const { title, year, subheading, services, description, logo, coverImageUrl, statement, keyWords, images, color } = project;
    const currentIndex = projectsData.findIndex((p) => p.id === project.id);
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
        router.push(`/PortfolioPage/${id}`);
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

                    <div className={"border-l p-4 px-4 "}>
                        <h1 className="text-3xl font-medium uppercase ">{title}</h1>
                        <h1 className="opacity-80 text-sm pb-1 font-medium uppercase">{subheading}</h1>
                        <p className="text-gray-500 text-sm ">{year}</p>
                    </div>

                    <div className={"text-xs"} >
                        {((logo != '') &&
                            <img
                                src={project.logo}
                                className={"pb-4 w-20 z-50 object-cover object-center "}
                            />
                        )}
                        <p className="text-xs py-2 opacity-60 pr-3">{description}</p>
                        {services.map((service, index) => (
                            <p
                                style={{color:color}}
                                key={index}>
                                - {service}
                            </p>
                        ))}
                    </div>

                    <div className={"flex justify-between text-xs pr-6"}>

                        <a onClick={() => handleNavigation(getPreviousProjectId())}>
                            <i className="cursor-pointer opacity-75 hover:opacity-100 bi bi-arrow-left-square"></i>
                        </a>
                        <a
                            className={"cursor-pointer opacity-75 hover:opacity-100 "}
                            onClick={() => handleNavigation(getNextProjectId())}>
                            Next
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

                    {/*<img  src={coverImageUrl} alt={`${alt}`}  className="pt-16 object-contain rounded-lg" />*/}

                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={`${image.alt} Image ${index + 1}`}
                            data-pin-do="embedPin"
                            data-pin-lang="en"
                            className=" pt-14 pb-3 pr-6 h-screen object-contain"
                            // style={{backgroundColor : color}}

                        />
                    ))}
                    {(statement !== '') &&
                        <div className=" py-16 px-1 text-black h-screen hidden md:aspect-square my-auto text-sm text-justify leading-5 md:flex items-stretch ">

                            <div className={"px-10 py-20 rounded bg-paper font-medium"}><p className={"text-base pb-2.5 font-semibold"}>{title}
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
