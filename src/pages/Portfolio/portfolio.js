import Book from "@/components/Book";
import Layout from "@/pages/layout";
import Sbox from "@/components/PortfolioBoxes/Bigbox";
import {SubBox, Competence} from "@/components/PortfolioBoxes/elements";
import Bigbox from "@/components/PortfolioBoxes/Bigbox";
import {honorsData, workExperienceData, educationData, competenceData} from "@/data/resumeData";



export default function Portfolio() {
    return (
        <Layout>
            <div
                className={"m-4  grid grid-cols-3 gap-6"}
            >
                <Bigbox
                    heading={"Profile"}
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

                <Bigbox heading={"Work Experience"}
                className={"col-span-2 row-span-2"}>
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

                <Bigbox heading={"Education"}>
                    {educationData.map((education, index) => (
                        <SubBox
                            key={index}
                            title={education.title}
                            year={education.year}
                            description={education.description}
                        />
                    ))}
                </Bigbox>


                <Bigbox heading={"Honors"}>
                    {honorsData.map((honors, index) => (
                        <SubBox
                            key={index}
                            title={honors.title}
                            year={honors.year}
                            description={honors.description}
                        />
                    ))}
                </Bigbox>

                <Bigbox heading={"Competences"}>
                    {competenceData.map((data, index) => (
                        <Competence key={index} title={data.title} items={data.items} />
                    ))}
                </Bigbox>

            </div>



        </Layout>
    )
}