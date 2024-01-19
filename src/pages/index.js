import Link from "next/link";
import Layout from "@/pages/layout";
import { worksData } from "@/data/worksData";
import {projectsData} from "@/data/projectsData";
import PortfolioSection from "@/components/portfolioSection";
import Footer from "@/components/footer";


export default function Home() {
    return (
        <Layout>
            <div className="text-center">

                <div className="grid grid-cols-1  self-center w-full md:w-full bottom-0">
                    <div className={" hidden py-20 md:block fixed min-h-screen text-xs text-left self-baseline bottom-0 z-50"}>
                        {projectsData.map((project, index) => (
                            <Link key={index} href={`#${project.title.toLowerCase().replace(/\s/g, '-')}`}>
                                <p className="block py-2 leading-4 hover:text-accent cursor-pointer">
                                    <span className={"font-thin"}>0{index + 1}</span> <br /> {project.title}
                                </p>
                            </Link>
                        ))}
                    </div>

                    <div
                        className={" w-full flex h-screen stop -z-40 bg-black "}
                    >
                        <img src={'/portfolioImages/death0040-03002.gif'} className={"absolute w-full h-screen md:w-full md:object-cover object-cover object-center  grayscale"}/>
                    </div>

                    {/*<div*/}
                    {/*    className={" w-full h-screen fixed blur-sm -z-50 "}*/}
                    {/*>*/}
                    {/*    <img src={'/16.jpg'} className={"w-full h-full object-cover object-right mix-blend-multiply grayscale"}/>*/}
                    {/*</div>*/}

                    <div className={"min-h-screen"}>
                        {projectsData.map((project, index) => (
                            <div
                                key={index}
                                id={project.title.toLowerCase().replace(/\s/g, '-')}
                                className="min-h-screen stop"
                            >
                                <PortfolioSection
                                    id={project.id}
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
            <Footer className={"fixed flex justify-end w-11/12 scale-90"}/>
        </Layout>
    );
}
