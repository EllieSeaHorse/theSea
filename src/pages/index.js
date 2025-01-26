import Layout from "@/pages/layout";
import {projectsData} from "@/data/projectsData";
import PortfolioSection from "@/components/portfolioSection";
import Footer from "@/components/footer";
import Head from "next/head";
import ThreeScene from "@/components/3D/ThreeD";
import React from "react";

import List from "@/components/List";
import ShareButtons from "@/components/Share";
export default function Home() {
    const sortedProjects = projectsData.sort((a, b) => new Date(b.date) - new Date(a.date));
    return (
        <Layout>
            <Head>
                <title>Sama Moayeri</title>
                <meta name="description" content={"Sama Moayeri's Portfolio, Selection of Graphic Design and Photography Projects from 2016"} />
                <meta name="keywords" content={'Photography, Art, Graphic Design, Artist Portfolio'} />
                <meta name="theme-color" content="#232323"/>
            </Head>
            <div className="text-center">

                <div className="grid grid-cols-1 self-center bottom-0">

                    <List
                        sortedProjects={sortedProjects}
                        classname={"relative md:mx-10"}
                    />


                    {/* <div
                        className={"w-1/2 h-screen flex flex-col items-center align-middle self-center justify-center bg-milk "}
                    >
                        <img className={"items-center w-full h-screen object-cover align-middle self-center justify-center"} 
                        src={'/Portfolio/Home.jpg'}></img>
{/* 
                        <img className={"absolute w-full items-center align-middle self-center justify-center"} 
                        src={'/Portfolio/Untitled_Artwork2.gif'}></img> */}

                        {/* <svg xmlns="http://www.w3.org/2000/svg" 
                        width="20" height="20" fill="currentColor" 
                        class="bi bi-chevron-double-down" 
               
                        
                        className="align-baseline bottom-0 justify-self-end hover:translate-y-1 transition-all duration-75 m-8 " viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                </svg> */}
                        {/*     width="1200" height="800"*/}
                        {/*     className={"mix-blend-difference absolute w-full h-screen  md:object-cover object-cover object-center "}/>*/}
                        {/* <ThreeScene /> Render the ThreeScene component */}
                    {/* </div> */} 

                    <div id="items" className={"flex flex-col items-center  place-items-center "}>
                        {sortedProjects.map((project, index) => (
                            <div
                                key={index}
                                id={project.title.toLowerCase().replace(/\s/g, '-')}
                                className="stop"
                            >
                                {/* <img className={"absolute w-full items-center align-middle self-center justify-center"} 
                                    src={'/Portfolio/Untitled_Artwork 2.png'}>

                                </img> */}


                                <PortfolioSection
                                    id={project.id}
                                    title={project.title}
                                    subheading={project.subheading}
                                    services={project.services}
                                    description={project.description}
                                    coverImageUrl={project.coverImageUrl}
                                    keyWords={project.keyWords}
                                    statement={project.statement}
                                    date={project.date}
                                    images={project.images}
                                    color={project.color}
                                    category={"Project"}
                                    className={""}

                                >
                                    
                                    <div
                                        className={" flex h-full "}
                                    >
                                        {/* {(project.logo !== '') ?
                                            <img
                                                src={project.logo}
                                                alt={`${project.title}'s Logo `}
                                                className={"w-40 z-50  object-cover object-center"}
                                                width="400" height="400"
                                            />
                                         : */}
                                         <div
                                            className=" place-self-end align-baseline self-end w-full pl-0 py-6 md:py-0 md:pl-10 "
                                         >

                                         <h1 className="text-xl font-normal capitalize  ">{project.title}</h1>
                                        {/* <h1 className="opacity-80 text-sm pb-1 font-medium uppercase">{project.subheading}</h1> */}
                                        <p className="text-gray-500 text-xs">{new Date(project.date).getFullYear()}</p>
                                        {/* <h1 className="opacity-80 text-sm pb-1 font-light lowercase ">{project.description}</h1> */}
                                        </div>

                                        {/* } */}
                                    </div>
                                </PortfolioSection>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer className={"pb-10 md:pb-0 relative "}/>
        </Layout>
    );
}


