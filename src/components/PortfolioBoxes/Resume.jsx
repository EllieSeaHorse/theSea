import Bigbox from "@/components/PortfolioBoxes/Bigbox";
import {competenceData, educationData, honorsData, languageData, workExperienceData} from "@/data/resumeData";
import {Competence, LanguageItem, SubBox} from "@/components/PortfolioBoxes/elements";
import Link from "next/link";

const Resume = () => {

    const softSkillsData = ['UI/UX', 'Responsive Design', 'Team Collaboration', 'Problem Solving'];
    const Qualities = ['Creative Design', 'Fast Learning', 'Time Management', 'Flexibility', 'Adaptability'];
    return (
            <div
                id={"resume"}
                className={"article  grid lg:grid-cols-9 md:grid-cols-6 grid-cols-3 gap-6 scroll-smooth"}
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
                        <SubBox
                            title={educationData[0].title}
                            year={educationData[0].year}
                            description={educationData[0].description}
                        >
                            <p className={"py-2"}>Course Work:</p>
                            <Link href={`/Project/environment`}
                                  target={'_blank'}
                                  className={"link"}>
                                <p className={"py-2"}>
                                    2022  -  Final university project, 'Synergy of the Imaginary and The Symbolic', incorporating practical Book Art and theoretical research on text-image relationships.
                                </p>

                            </Link>
                            <p className={"py-2"}>
                                2022  -  Authored 'The Impact of Victorian Literature on 18th Century’s Photography' and 'A Review on Works of Germano Facetti' as original essays for coursework.
                            </p>
                            <Link href={`/Project/environment`}
                                  target={'_blank'}
                                  className={"link"}>
                                <p className={"py-2"}>
                                    2021  -  Created Environmental Art, a series of conceptual posters addressing the environmental crisis.
                                </p>
                            </Link>
                            <Link href={`/Project/whitenights`}
                                  target={'_blank'}
                                  className={"link"}>
                                <p className={"py-2"}>
                                2020  -  Produced 'White Nights', an original Photo Series, and 'Eclipse', an original Video Art project.
                                </p>
                            </Link>

                        </SubBox>
                    <SubBox
                            title={educationData[1].title}
                            year={educationData[1].year}
                            description={educationData[1].description}
                        />

                </Bigbox>


                <Bigbox heading={"Languages"}
                        className={'col-span-3 row-span-1 md:col-span-2 md:row-span-1 lg:col-span-3 lg:row-span-1'}>
                    {languageData.map((data, index) => (
                        <LanguageItem
                            key={index}
                            language={data.language}
                            proficiency={data.proficiency}
                            additionalInfo={data.additionalInfo}
                        />
                    ))}
                </Bigbox>


                <Bigbox heading={"Competences"} className={"row-span-2"} className={'col-span-3 row-span-1 md:col-span-2 md:row-span-3 lg:col-span-3 lg:row-span-3'}>
                    {competenceData.map((data, index) => (
                        <Competence key={index} title={data.title} items={data.items} />
                    ))}
                </Bigbox>


                <Bigbox heading={"Skills"}
                        className={'border border-neutral-800 col-span-3 row-span-1 md:col-span-4 md:row-span-1 lg:col-span-6 lg:row-span-1'}


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


                <Bigbox heading={"Honors and Certificates"}
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
    )
}
export default Resume