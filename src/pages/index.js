import Link from "next/link";
import Layout from "@/pages/layout";
import {projectsData} from "@/data/projectsData";
import PortfolioSection from "@/components/portfolioSection";
import Footer from "@/components/footer";
import {motion} from "framer-motion";
import Head from "next/head";
import React from "react";

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

                <div className="grid grid-cols-1 bg-black self-center  bottom-0">
                    <motion.div

                        initial={{  y: 20 }}
                        animate={{  y: 0 }}
                        exit={{ y: 20 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 50,
                        }}


                        className={"pl-8 pr-1 opacity-75 hidden pt-24  md:block fixed overflow-y-scroll min-h-screen text-xs scale-75 text-left self-start z-20"}>
                        {sortedProjects.map((project, index) => (
                            <Link key={index} href={`#${project.title.toLowerCase().replace(/\s/g, '-')}`}>
                                <p className="block py-1 leading-3 hover:text-accent cursor-pointer">
                                    <span className={"font-thin text-[8px]"}>0{index + 1}</span> <br /> {project.title}
                                </p>
                            </Link>
                        ))}
                    </motion.div>

                    <div
                        className={"w-full flex items-end justify-end h-screen stop  bg-black "}
                    >
                        <img src={'/Portfolio/Home.jpg'}
                             width="1200" height="800"
                             className={"mix-blend-difference absolute w-full h-screen  md:object-cover object-cover object-center "}/>
                    </div>

                    <div className={"min-h-screen "}>
                        {sortedProjects.map((project, index) => (
                            <div
                                key={index}
                                id={project.title.toLowerCase().replace(/\s/g, '-')}
                                className="stop"
                            >

                                <PortfolioSection
                                    id={project.id}
                                    title={project.title}
                                    subheading={project.subheading}
                                    year={project.year}
                                    services={project.services}
                                    description={project.description}
                                    coverImageUrl={project.coverImageUrl}
                                    keyWords={project.keyWords}
                                    statement={project.statement}
                                    images={project.images}
                                    color={project.color}
                                >
                                    <div
                                        className={"flex"}
                                    >
                                        {(project.logo !== '') ?
                                            <img
                                                src={project.logo}
                                                alt={`${project.title}'s Logo `}
                                                className={"w-40 z-50  object-cover object-center"}
                                                width="400" height="400"
                                            />
                                         :
                                            <p>{project.title}</p>}
                                        {/*<img*/}
                                        {/*    src={project.logo}*/}
                                        {/*    className={"w-40 z-50  object-cover object-center "}*/}
                                        {/*    width="400" height="400"*/}
                                        {/*    alt={project.keywords}*/}
                                        {/*/>*/}
                                    </div>
                                </PortfolioSection>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer className={"pb-10 md:pb-0 relative md:fixed"}/>
        </Layout>
    );
}


