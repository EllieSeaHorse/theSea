import React, { useRef, useEffect, useState } from 'react';
import { wordsData } from '@/data/wordsData';
import { motion } from "framer-motion";
import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from "@/components/footer";
import ImageSlider from '@/components/ImageSlider';
import Book from '@/components/Book';
import Layout from "@/pages/layout";

const WordPage = ({ project }) => {
    const router = useRouter();
    const sortedWords = wordsData.sort((a, b) => new Date(b.date) - new Date(a.date));
    const { title, date, images, text, coverImageUrl } = project;

    const currentIndex = sortedWords.findIndex((p) => p.id === project.id);
    const length = sortedWords.length;

    const getNextWordId = () => {
        const nextIndex = (currentIndex + 1) % length;
        return sortedWords[nextIndex]?.id;
    };

    const getPreviousWordId = () => {
        const previousIndex = (currentIndex - 1 + length) % length;
        return sortedWords[previousIndex]?.id;
    };

    const containerRef = useRef(null);
    const imageLoadCounter = useRef(0);

    const [isSmallScreen, setIsSmallScreen] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
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
        window.scrollTo(0, 0);
        router.push(`/words/${id}`);
    };

    return (
        <Layout>
            <Head>
                <title>{title} - Sama Moayeri</title>
            </Head>

            <div className="my-24 article rounded-md bg-milk-darker text-sm leading-4">
                    <div className="p-6  text-xs leading-4">
                        <div className="pt-2 md:flex flex-col justify-between col-span-4 md:col-span-1">
                            <div className="pb-6">

                                <div className={"md:px-16 px-8"}>
                                <h1 className="pb-2 text-3xl font-medium ">{title}</h1>
                                <p>Written by Sama Moayeri</p>
                                <p className="text-gray-500 text-sm pb-4">{new Date(date).getFullYear()}</p>
                                </div>
                                <div className="md:px-16 px-8 text-sm py-2" >
                                <div className={" w-full h-full aspect-43 "}>
                            <img className={"object-contain p-6 w-full h-full self-center place-self-center align-middle"} src={coverImageUrl.src}/>
                            </div>
                                    <p className={"py-1 text-xs opacity-70"}>{coverImageUrl.alt}</p>
                                
                                </div>
                            </div>

                            <div className="text-xs">
                                 <p className="text-container md:p-16 p-8 text-[14px] text-justify leading-1 py-2">{text}</p>
                            </div>


                        </div>
                    </div>
                </div>


<div className="flex article justify-between py-4 text-xs">
                                <a className="cursor-pointer opacity-75 hover:opacity-100" onClick={() => handleNavigation(getPreviousWordId())}>
                                <i className="cursor-pointer opacity-75 hover:opacity-100 bi bi-arrow-left-square">
                                         <span className='px-2'>&#8592;</span>
                                         </i>
                                {sortedWords.find((project) => project.id === getPreviousWordId())?.title}
                                </a>
                                <a className="cursor-pointer opacity-75 hover:opacity-100" onClick={() => handleNavigation(getNextWordId())}>
                                    {sortedWords.find((word) => project.id === getNextWordId())?.title}
                                    <i className="p-2 bi bi-arrow-right-square">
                                    <span className='px-2'>&#8594;</span>
                                    </i>
                                </a>
            </div>
            <p className={"m-10 md:m-24 p-4 md:p-10 border border-neutral-200 opacity-50 text-[10px]"}>Fair Use Notice:
                This website may contain copyrighted material used under the doctrine of Fair Use as outlined in Section 107 of the U.S. Copyright Act. Such material is made available for the purposes of commentary, critique, education, and scholarly research. All images and texts remain the property of their respective copyright holders. No copyright infringement is intended. If you are the rights holder and believe your work has been used improperly, please contact us to request removal or proper attribution.
                </p>

            <Footer className="block" />
        </Layout>
    );
};

export default WordPage;

export async function getStaticPaths() {
    const paths = wordsData.map((word) => ({
        params: { id: word.id.toString() },
    }));
    return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
    const project = wordsData.find((p) => p.id === params.id);
    return {
        props: {
            project,
        },
    };
}
