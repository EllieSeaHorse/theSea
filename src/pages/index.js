import Link from "next/link";
import Layout from "@/pages/layout";
import { worksData } from "@/data/worksData";
import {projectsData} from "@/data/projectsData";
import PortfolioSection from "@/components/portfolioSection";


export default function Home() {
    return (
        <Layout>
            {/*<div className="grid grid-cols-1 gap-4 items-center self-center w-full md:w-1/2 mx-auto "*/}
            {/*>*/}
            {/*<Link href={'Portfolio/portfolio'} className={"m-2 hover:rounded-none text-left p-8 pb-2 pl-4 bg-neutral-950 text-white scale-95 hover:scale-105 transition-all duration-500 "}> PORTFOLIO</Link>*/}
            {/*</div>*/}

            <div className="text-center">

                <div className="grid grid-cols-1 gap-2  self-center w-full md:w-full mx-auto">
                    <div className={"px-8 py-24 fixed min-h-screen text-sm text-left self-baseline"}>
                        {projectsData.map((project, index) => (
                            <Link key={index} href={`#${project.title.toLowerCase().replace(/\s/g, '-')}`}>
                                <p className="block py-3 leading-4 hover:text-accent cursor-pointer">
                                    0{index + 1} <br /> {project.title}
                                </p>
                            </Link>
                        ))}
                    </div>

                    <div
                        className={"bg-teal-950 w-full h-screen -z-50"}
                    >
                    </div>

                    <div className={"min-h-screen m-5"}>
                        {projectsData.map((project, index) => (
                            <div
                                key={index}
                                id={project.title.toLowerCase().replace(/\s/g, '-')}
                                className="min-h-screen"
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
