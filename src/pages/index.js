import Layout from "@/pages/layout";
import {projectsData} from "@/data/projectsData";
import PortfolioSection from "@/components/portfolioSection";
import Footer from "@/components/footer";
import Head from "next/head";
import ThreeScene from "@/components/3D/ThreeD";
import React from "react";

import List from "@/components/List";
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

                    <List
                        sortedProjects={sortedProjects}
                        classname={"fixed hidden md:block"}
                    />


                    <div
                        className={"w-full flex items-end justify-end h-screen stop  bg-black "}
                    >
                        {/*<img src={'/Portfolio/Home.jpg'}*/}
                        {/*     width="1200" height="800"*/}
                        {/*     className={"mix-blend-difference absolute w-full h-screen  md:object-cover object-cover object-center "}/>*/}
                        <ThreeScene /> {/* Render the ThreeScene component */}

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
                                    services={project.services}
                                    description={project.description}
                                    coverImageUrl={project.coverImageUrl}
                                    keyWords={project.keyWords}
                                    statement={project.statement}
                                    date={project.date}
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
                                            <p>{project.title}</p>
                                        }
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


