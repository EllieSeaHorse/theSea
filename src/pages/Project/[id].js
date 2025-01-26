
import React, { useRef, useEffect, useState } from 'react';
import { projectsData } from '@/data/projectsData';
import Layout from '@/pages/layout';
import Link from "next/link";
import { motion } from "framer-motion";
import Head from 'next/head';
import useLoadingState from '@/components/Hooks/useLoadingState';
import LoadingVisual from "@/components/Transition/LoadingVisual";
import { useRouter } from 'next/router';
import Footer from "@/components/footer";
import ImageWithShare from "@/components/ImagewithShare";
import ShareButtons from "@/components/Share";
import ImageSlider from '@/components/ImageSlider';
import Book from '@/components/Book';
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

    const [isSmallScreen, setIsSmallScreen] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);


    // useEffect(() => {
    //     const handleWheel = (event) => {
    //         const container = containerRef.current;
    //         const delta = event.deltaY || event.detail || event.wheelDelta;
    //
    //         if (container) {
    //             const scrollFactor = 5;
    //             container.scrollLeft += delta * scrollFactor;
    //         }
    //
    //         event.preventDefault();
    //     };
    //
    //     window.addEventListener('wheel', handleWheel, { passive: false });
    //
    //     return () => {
    //         window.removeEventListener('wheel', handleWheel);
    //     };
    // }, []);

    const [loading, setLoading] = useState(true);

    const isBookProject = project.id.toLowerCase().includes("book"); // Check if ID contains "book"

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
    <Head>
        <title>{title} {subheading} Design Project</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keyWords} />

        {/* OpenGraph meta tags */}
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:image" content="url-to-your-image" />
        <meta property="og:url" content="url-to-your-page" />

        {/* Twitter meta tags */}
        <meta name="twitter:title" content="Your Page Title" />
        <meta name="twitter:description" content="Your page description" />
        <meta name="twitter:image" content="url-to-your-image" />
        <meta name="twitter:card" content="summary_large_image" />
    </Head>

    <div className="h-auto md:h-screen mt-20 ">
        

        <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            exit={{ x: 20 }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            ref={containerRef}
            style={{ overflowX: 'auto' }}
            className="mt-4 block"
        >
                <div className="text-justify article rounded-md bg-milk-darker text-sm leading-4">
                    <div className="p-6  text-xs leading-4">
                        <div className="pt-2 md:flex flex-col justify-between col-span-4 md:col-span-1">
                            <div className="">
                                <h1 className="text-3xl font-medium uppercase">{title}</h1>
                                <h1 className="opacity-80 text-sm pb-1 font-medium uppercase">{subheading}</h1>
                                <p className="text-gray-500 text-sm pb-4">{new Date(date).getFullYear()}</p>
                            </div>

                            <div className="text-xs">
                                {logo && (
                                    <img
                                        src={project.logo}
                                        alt={`${project.title}'s Logo`}
                                        className="pt-8 pb-4 w-20 z-50 object-cover object-center"
                                    />
                                )}
                                <p className="text-sm py-2">{description}</p>
                                <div className="text-xs py-2" style={{ color }}>
                                    {services.map((service, index) => (
                                        <span key={index}>
                                            {index > 0 && " / "}{service}
                                        </span>
                                    ))}
                                </div>
                        
                            </div>


                        </div>
                    </div>
                </div>
                {isBookProject ? (
                    <Book 
                    images={images}
                             />
                ) : (
                    <ImageSlider images={images} />
                )}

            

                {/* {images.map((image, index) => (
  <React.Fragment key={index}>
  {(index === 2 || index === 6) && (
      <div className="grid grid-cols-2 gap-2 py-4">
          <div>
              <ImageWithShare
                  imageSrc={images[index].src}
                  imageAlt={images[index].alt}
                  imageAltEnglish={images[index].alt.english}
                  imageAltFarsi={images[index].alt.farsi}
                  imageHeight={images[index].height}
                  imageWidth={images[index].width}
              />
          </div>

          {images[index + 1] && (
              <div>
                  <ImageWithShare
                      imageSrc={images[index + 1].src}
                      imageAlt={images[index + 1].alt}
                      imageAltEnglish={images[index + 1].alt.english}
                      imageAltFarsi={images[index + 1].alt.farsi}
                      imageHeight={images[index + 1].height}
                      imageWidth={images[index + 1].width}
                  />
              </div>
          )}
      </div>
  )}

  {(index !== 2 && index !== 3 && index !== 6 && index !== 7) && (
      <ImageWithShare
          imageSrc={image.src}
          imageAlt={image.alt}
          imageAltEnglish={image.alt.english}
          imageAltFarsi={image.alt.farsi}
          imageHeight={image.height}
          imageWidth={image.width}
      />
  )}

  {index === 1 && statement !== '' && (
      <div className="px-4 md:px-10 py-6 text-justify bg-milk-darker text-sm leading-4">
          <p className="text-sm">{statement}</p>
      </div>
  )}
</React.Fragment>
))} */}


            <div className="flex article justify-between py-4 text-xs">
                                <a className="cursor-pointer opacity-75 hover:opacity-100" onClick={() => handleNavigation(getPreviousProjectId())}>
                                <i className="cursor-pointer opacity-75 hover:opacity-100 bi bi-arrow-left-square">
                                         <span className='px-2'>&#8592;</span>
                                         </i>
                                {sortedProjects.find((project) => project.id === getPreviousProjectId())?.title}

                                </a>
                                <a className="cursor-pointer opacity-75 hover:opacity-100" onClick={() => handleNavigation(getNextProjectId())}>
                                    {sortedProjects.find((project) => project.id === getNextProjectId())?.title}
                                    <i className="p-2 bi bi-arrow-right-square">
                                    <span className='px-2'>&#8594;</span>
                                    </i>
                                </a>
            </div>

            <Footer className="block" />
        </motion.div>
    </div>
</Layout>

//         <Layout>
//             {/*{isTransitioning && <LoadingVisual />}*/}
//             <Head>
//                 {/* Meta tags for SEO */}
//                 <title>{title} {subheading} Design Project</title>
//                 <meta name="description" content={description} />
//                 <meta name="keywords" content={keyWords} />
//                 {/* Other meta tags as needed */}

//                 {/* OpenGraph meta tags for social media sharing (optional) */}
//                 <meta property="og:title" content={title}/>
//                 <meta property="og:description" content={description}/>
//                 <meta property="og:image" content="url-to-your-image" />
//                 <meta property="og:url" content="url-to-your-page" />

//                 {/* Twitter meta tags for social media sharing (optional) */}
//                 <meta name="twitter:title" content="Your Page Title" />
//                 <meta name="twitter:description" content="Your page description" />
//                 <meta name="twitter:image" content="url-to-your-image" />
//                 <meta name="twitter:card" content="summary_large_image" />

//             </Head>

//             <div
//                 className={"h-auto md:h-screen article"}>
//                 <motion.div

//                     initial={{  x: 200 }}
//                     animate={{  x: 0 }}
//                     exit={{ x: 20 }}
//                     transition={{
//                         type: "spring",
//                         stiffness: 200,
//                         damping: 50,
//                     }}

//                     ref={containerRef} style={{ overflowX: 'auto' } }
//                     // className={"block  md:flex col-span-4 "}
//                     className={"block"}
//                 >
//           {(statement !== '') &&
//                         <div className="text-justify bg-milk-darker text-sm leading-4  ">
//                             <div className={"p-6 text-xs leading-4 "}>
//                             <div className={"pt-14 md:flex flex-col justify-between col-span-4 md:col-span-1 "}>

// <div
//     className={" pb-2 px-2"}
//     style={{borderLeft: `2px solid ${color}`}}
// >
//     <h1 className="text-3xl font-medium uppercase ">{title}</h1>
//     <h1 className="opacity-80 text-sm pb-1 font-medium uppercase">{subheading}</h1>
//     <p className="text-gray-500 text-sm">{new Date(date).getFullYear()}</p>
// </div>

// <div className={"text-xs px-4 "} >
//     {((logo != '') &&
//         <img
//             src={project.logo}
//             alt={`${project.title}'s Logo `}
//             className={"pt-8 pb-4 w-20 z-50 object-cover object-center "}
//         />
//     )}
//     <p className="text-xs py-2 ">{description}</p>
//     <div className={"text-xs py-4"} style={{color:color}}>
//         {services.map((service, index) => (
//             <span key={index}>
//              {(index > 0 && " / ")}{service}
//         </span>
//         ))}
//     </div>
//     {/*<ShareButtons imageUrl={`https://samamoy.com/${image.src}`} />*/}
// </div>

// <div>

//     <div
//         className={"flex justify-between py-4 text-xs "}
//     >

//         <a onClick={() => handleNavigation(getPreviousProjectId())}>
//             <i className="cursor-pointer opacity-75 hover:opacity-100 bi bi-arrow-left-square"></i>
//         </a>
//         <a
//             className={"cursor-pointer opacity-75 hover:opacity-100 "}
//             onClick={() => handleNavigation(getNextProjectId())}>
//             {sortedProjects.find((project) => project.id === getNextProjectId())?.title}
//             <i className="p-2 bi bi-arrow-right-square"></i>
//         </a>

//     </div>

// </div>


// </div>

//                                 {/* <p className={"text-base pb-2.5"}>{title}
//                             </p>  */}
//                             {statement}
//                             </div>
//                         </div>}

//                     {images.map((image, index) => (

//                         <ImageWithShare
//                             key={index}
//                             imageSrc={image.src}
//                             imageAlt={image.alt}
//                             imageAltEnglish={image.alt.english}
//                             imageAltFarsi={image.alt.farsi}
//                             imageHeight={image.height}
//                             imageWidth={image.width}
//                         />

//                     ))}

//                     <div
//                         className={"flex md:hidden justify-between py-5 text-xs "}
//                     >

//                         <a onClick={() => handleNavigation(getPreviousProjectId())}>
//                             <i className="cursor-pointer opacity-75 hover:opacity-100 bi bi-arrow-left-square"></i>
//                         </a>
//                         <a
//                             className={"cursor-pointer opacity-75 hover:opacity-100 "}
//                             onClick={() => handleNavigation(getNextProjectId())}>
//                             {sortedProjects.find((project) => project.id === getNextProjectId())?.title}
//                             <i className="p-2 bi bi-arrow-right-square"></i>
//                         </a>

//                     </div>
//                     <Footer className={"block"}/>
//                 </motion.div>

//             </div>
//         </Layout>
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