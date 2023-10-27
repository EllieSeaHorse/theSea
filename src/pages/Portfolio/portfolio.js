import Layout from "@/pages/layout";
import {SubBox, Competence, LanguageItem} from "@/components/PortfolioBoxes/elements";
import Bigbox from "@/components/PortfolioBoxes/Bigbox";
import {honorsData, workExperienceData, educationData, competenceData } from "@/data/resumeData";
import {projectsData} from "@/data/projectsData";


import React, {useState} from 'react';
import Link from "next/link";








export default function Portfolio() {


    let project = projectsData


    let currentDiv = 0;




    // Function to scroll to the next div
    const scrollToNextDiv = () => {
        setViewingResume(!viewingResume);
        if (viewingResume) {
            const resumeDiv = document.getElementById('resume');
            if (resumeDiv) {
                resumeDiv.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };


    const [viewingResume, setViewingResume] = useState(false);


    const softSkillsData = ['UI/UX', 'Responsive Design', 'Team Collaboration', 'Problem Solving'];
    const Qualities = ['Creative Design', 'Fast Learning', 'Time Management', 'Flexibility', 'Adaptability'];
    return (
        <Layout>




            <div
                className={"m-6 grid lg:grid-cols-9 md:grid-cols-6 grid-cols-3 gap-6"}


            >
                <Bigbox className={"col-span-3 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-5 lg:row-span-2 h-full flex flex-col animated slide-up"}>
                    <h1 className={"text-6xl lg:text-8xl text-justify"}>PORTFOLIO</h1>
                    <h1 className={"text-xl uppercase"}>Sama Moayeri</h1>
                    <h1 className={"text-sm text-accent uppercase align-bottom justify-self-end text-right pt-6"}>Selection of works</h1>


                    <h1 className={"text-sm text-accent uppercase text-right pb-16"}>2018-2023</h1>


                    <div className="md: flex-grow"></div> {/* Add this div to push content to the top */}


                    <div className={""}>
                        <h1 className={"w-full"}>
                            <span className={"text-accent pr-12 w-2/5"}>Phone</span>
                            +98 939 707 57 50
                        </h1>
                        <h1>
                            <span className={"text-accent pr-12 w-1/6"}>Mail</span>
                            SamaMoayeri99@Gmail.com
                        </h1>
                        <h1>
                            <span className={"text-accent pr-12"}>Website</span>
                            www.SamaMoayeri.com
                        </h1>
                        <h1>
                            <span className={"text-accent pr-12"}>LinkedIn</span>
                            linkedin.com/in/samamoayeri
                        </h1>


                    </div>
                </Bigbox>




                <Bigbox
                    heading={""}
                    className={"col-span-3 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-4 lg:row-span-2 border-0 animated slide-up"}
                >
                    <div className={"w-full h-fit bg-gradient-to-b from-accent to-white "}>
                        <img src="/portfolioImages/Fondation Jan Michalski © Tonatiuh Ambrosetti.jpg"
                             className={"object-cover mix-blend-multiply grayscale"}/>
                    </div>
                    <h1 className={"text-[9px] text-gray-600"}>Photo © Tonatiuh Ambrosetti</h1>




                </Bigbox>




                <Bigbox
                    heading={"Profile"}
                    className={"sizeLargeHor border border-white p-12"}
                >
                    <p>
                        Experienced senior graphic designer with a passion
                        for UI/UX and web development. Proven track record in
                        teaching, translating, and creative arts. Recognized
                        for academic excellence and active participation in
                        international events. Proficient in HTML, CSS, JavaScript,
                        and a wide range of design software.
                    </p>


                </Bigbox>
            </div>


            <Link
                href={'#resume'}
                className={"bg-dark-teal hover:bg-accent w-screen p-4 text-center scroll-smooth flex justify-center items-center duration-500 transition-all"}
                onClick={scrollToNextDiv}
            >
                {viewingResume ? 'Hide Resume' : 'View Resume'}
            </Link>
            {viewingResume && (
                <div
                    id={"resume"}
                    className={"pt-6 m-10 grid lg:grid-cols-9 md:grid-cols-6 grid-cols-3 gap-6 scroll-smooth"}
                >








                    <Bigbox heading={"Work Experience"}
                            className={"border border-accent col-span-3 row-span-1 md:col-span-4 md:row-span-2 lg:col-span-6 lg:row-span-2"}>
                        {workExperienceData.map((experience, index) => (
                            <SubBox
                                key={index}
                                title={experience.title}
                                year={experience.year}
                                description={experience.description}
                                list={experience.list}
                            />
                        ))}
                    </Bigbox>


                    <Bigbox heading={"Education"}
                            className={'col-span-3 row-span-1 md:col-span-2 md:row-span-1 lg:col-span-3 lg:row-span-1'}
                    >
                        {educationData.map((education, index) => (
                            <SubBox
                                key={index}
                                title={education.title}
                                year={education.year}
                                description={education.description}
                            />
                        ))}
                    </Bigbox>


                    {/*<Bigbox heading={"Languages"}*/}
                    {/*        className={'col-span-3 row-span-1 md:col-span-2 md:row-span-1 lg:col-span-3 lg:row-span-1'}>*/}
                    {/*    {languageData.map((data, index) => (*/}
                    {/*        <LanguageItem*/}
                    {/*            key={index}*/}
                    {/*            language={data.language}*/}
                    {/*            proficiency={data.proficiency}*/}
                    {/*            additionalInfo={data.additionalInfo}*/}
                    {/*        />*/}
                    {/*    ))}*/}
                    {/*</Bigbox>*/}


                    <Bigbox heading={"Competences"} className={"row-span-2"} className={'col-span-3 row-span-1 md:col-span-2 md:row-span-3 lg:col-span-3 lg:row-span-3'}>
                        {competenceData.map((data, index) => (
                            <Competence key={index} title={data.title} items={data.items} />
                        ))}
                    </Bigbox>


                    <Bigbox heading={"Soft Skills"}
                            className={'border border-accent col-span-3 row-span-1 md:col-span-4 md:row-span-1 lg:col-span-6 lg:row-span-1'}


                    >
                        <div className={"w-full flex flex-wrap"}>
                            {softSkillsData.map((skill, index) => (
                                <h1 className={"p-2 m-1 rounded-full border text-xs"} key={skill}>{skill}</h1>
                            ))}
                            {Qualities.map((skill, index) => (
                                <h1 className={"p-2 m-1 rounded-full border text-xs"} key={skill}>{skill}</h1>
                            ))}
                        </div>


                    </Bigbox>


                    <Bigbox heading={"Honors"}
                            className={"col-span-3 row-span-1 md:col-span-4 md:row-span-2 lg:col-span-6 lg:row-span-2"}>

                        {honorsData.map((honors, index) => (
                            <SubBox
                                key={index}
                                title={honors.title}
                                year={honors.year}
                                description={honors.description}
                            />
                        ))}
                    </Bigbox>


                </div>


            )}


            {/*<PortfolioSection*/}
            {/*    title={project[0].title}*/}
            {/*    subheading={project[0].subheading}*/}
            {/*    year={project[0].year}*/}
            {/*    services={project[0].services}*/}
            {/*    description={project[0].description}*/}
            {/*>*/}
            {/*   <div className={"col-span-2 row-span-1 h-full aspect-square py-10"}>*/}
            {/*       <img src={'/Projects/Verite/lili.png'} className={"w-full h-full object-contain"}/>*/}
            {/*   </div>*/}
            {/*    <div className={"col-span-2 row-span-1 h-full aspect-square py-10"}>*/}
            {/*        <img src={'/Projects/Verite/lili.png'} className={"w-full h-full object-contain"}/>*/}
            {/*    </div>*/}
            {/*    <div className={"col-span-2 row-span-1 h-full aspect-square py-10"}>*/}
            {/*        <img src={'/Projects/Verite/lili.png'} className={"w-full h-full object-contain"}/>*/}
            {/*    </div>*/}


            {/*    /!*<div className={"col-span-2 row-span-1  w-screen"}>*!/*/}
            {/*    /!*    <img src={'/Projects/Verite/lili.png'} className={"w-full h-full object-contain"}/>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*    /!*<div className={"col-span-2 row-span-1"}>*!/*/}
            {/*    /!*    <img src={'/Projects/Verite/lili.png'} className={"w-full h-full object-contain"}/>*!/*/}
            {/*    /!*</div>*!/*/}


            {/*</PortfolioSection>*/}








        </Layout>
    )
}
