import Link from "next/link";
import Layout from "@/pages/layout";
import { worksData } from "@/data/worksData";
import {projectsData} from "@/data/projectsData";
import PortfolioSection from "@/components/portfolioSection";


export default function Home() {
    return (
        <Layout>
            <div className="text-center">

                <div className="grid grid-cols-1 gap-2  self-center w-full md:w-full bottom-0">
                    <div className={"px-4 md:px-8 py-20 fixed min-h-screen text-sm text-left self-baseline bottom-0"}>
                        {projectsData.map((project, index) => (
                            <Link key={index} href={`#${project.title.toLowerCase().replace(/\s/g, '-')}`}>
                                <p className="block py-3 leading-4 hover:text-accent cursor-pointer">
                                    <span className={"font-thin"}>0{index + 1}</span> <br /> {project.title}
                                </p>
                            </Link>
                        ))}
                    </div>

                    <div
                        className={" w-full h-screen stop -z-50 bg-gradient-to-t from-accent to-white "}
                    >
                        <img src={'/16.jpg'} className={"w-full h-full object-cover mix-blend-multiply grayscale"}/>
                    </div>

                    <div className={"min-h-screen m-5 "}>
                        {projectsData.map((project, index) => (
                            <div
                                key={index}
                                id={project.title.toLowerCase().replace(/\s/g, '-')}
                                className="min-h-screen stop"
                            >
                                <PortfolioSection
                                    title={project.title}
                                    subheading={project.subheading}
                                    year={project.year}
                                    services={project.services}
                                    description={project.description}
                                    coverImageUrl={project.coverImageUrl}
                                    images={project.images}
                                    color={project.color}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
