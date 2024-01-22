import Link from "next/link";
import Layout from "@/pages/layout";
import { worksData } from "@/data/worksData";
import {projectsData} from "@/data/projectsData";
import PortfolioSection from "@/components/portfolioSection";
import Footer from "@/components/footer";
import SmoothLink from "@/components/Transition/SmoothLink";
import {motion} from "framer-motion";


export default function Home() {
    return (





        <Layout>
            <div className="text-center">

                <div className="grid grid-cols-1  self-center  bottom-0">
                    <motion.div

                        initial={{  y: 20 }}
                        animate={{  y: 0 }}
                        exit={{ y: 20 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 50,
                        }}


                        className={"pl-6 hidden py-20 md:block fixed min-h-screen text-xs text-left self-baseline bottom-0 z-50"}>
                        {projectsData.map((project, index) => (
                            <Link key={index} href={`#${project.title.toLowerCase().replace(/\s/g, '-')}`}>
                                <p className="block py-2 leading-4 hover:text-accent cursor-pointer">
                                    <span className={"font-thin"}>0{index + 1}</span> <br /> {project.title}
                                </p>
                            </Link>
                        ))}
                    </motion.div>

                    <div
                        className={"w-full flex items-end justify-end h-screen stop -z-40 bg-black "}
                    >
                        <img src={'/portfolioImages/death0040-03002.gif'} className={"absolute aspect-square grayscale"}/>
                        {/*<img src={'/portfolioImages/untitled.png'} className={"mix-blend-difference absolute w-full h-screen  md:object-cover object-cover object-center "}/>*/}
                    </div>

                    <div className={"min-h-screen "}>
                        {projectsData.map((project, index) => (
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
                                        {/*<img src={'/portfolioImages/death0040-03002.gif'} className={"absolute w-full h-screen md:w-full md:object-cover object-cover object-center  grayscale"}/>*/}
                                        <img src={project.logo} className={"w-40 z-50  object-cover object-center "}/>
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
