import Link from "next/link";
import Layout from "@/pages/layout";
import { worksData } from "@/data/worksData";
import {projectsData} from "@/data/projectsData";
import PortfolioSection from "@/components/portfolioSection";
import Footer from "@/components/footer";
import SmoothLink from "@/components/Transition/SmoothLink";


export default function Home() {
    return (
        <Layout>
            <div className="text-center">

                <div className="grid grid-cols-1  self-center  bottom-0">
                    <div className={"pl-6 hidden py-20 md:block fixed min-h-screen text-xs text-left self-baseline bottom-0 z-50"}>
                        {projectsData.map((project, index) => (
                            <Link key={index} href={`#${project.title.toLowerCase().replace(/\s/g, '-')}`}>
                                <p className="block py-2 leading-4 hover:text-accent cursor-pointer">
                                    <span className={"font-thin"}>0{index + 1}</span> <br /> {project.title}
                                </p>
                            </Link>
                        ))}
                    </div>

                    <div
                        className={"  flex h-screen stop -z-40 bg-black "}
                    >
                        {/*<img src={'/portfolioImages/death0040-03002.gif'} className={"absolute w-full h-screen md:w-full md:object-cover object-cover object-center  grayscale"}/>*/}
                        <img src={'/portfolioImages/untitled.png'} className={"mix-blend-difference absolute w-full h-screen  md:object-cover object-cover object-center "}/>
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
                                    alt={project.alt}
                                    statement={project.statement}
                                    images={project.images}
                                    color={project.color}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer className={"pb-10 md:pb-0 relative md:fixed"}/>
        </Layout>
    );
}
