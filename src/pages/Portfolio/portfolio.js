import Layout from "@/pages/layout";
import Bigbox from "@/components/PortfolioBoxes/Bigbox";
import {projectsData} from "@/data/projectsData";
import Link from 'next/link';
import React, {useState} from 'react';
import Resume from "@/components/PortfolioBoxes/Resume";
import Footer from "@/components/footer";
import {motion} from "framer-motion";
import useLoadingState from '@/components/Hooks/useLoadingState';
import LoadingVisual from "@/components/Transition/LoadingVisual";



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

    const [viewingResume, setViewingResume] = useState(true);


    // const { isLoading, data: projects, error } = useLoadingState(fetchProjectsData);
    //
    // if (isLoading) {
    //     return <LoadingVisual />;
    // }
    //
    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }


    return (
        <Layout>
            <motion.div

                initial={{  y: 100 }}
                animate={{  y: 0 }}
                exit={{ y: 20 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 50,
                }}
                className={"px-6 pt-6 md:pt-10 grid lg:grid-cols-9 md:grid-cols-6 grid-cols-3 gap-6 text-sm"}
            >
                <Bigbox className={"col-span-3 md:py-14 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-5 lg:row-span-2 text-xs md:text-sm h-full flex flex-col animated slide-up"}>
                    <h1 className={"text-4xl mt-4 text-white lg:text-7xl"}>PORTFOLIO</h1>
                    <h1 className={"text-lg pl-1 uppercase"}>Sama Moayeri</h1>
                    <h1 className={"text-xs text-accent uppercase align-bottom justify-self-end text-right pt-6"}>Selection of works</h1>
                    <h1 className={"text-xs text-accent uppercase text-right pb-16"}>2018-2023</h1>

                    <p className={"p-4 leading-5 my-4 border"}>
                        Experienced senior graphic designer with a passion
                        for UI/UX and web development. Proven track record in
                        teaching, translating, and creative arts. Recognized
                        for academic excellence and active participation in
                        international events. Proficient in HTML, CSS, JavaScript,
                        and a wide range of design software.
                    </p>

                    <div className="md: flex-grow "></div> {/* Add this div to push content to the top */}
                    <div className="flex flex-col space-y-2 cursor-pointer text-xs">
                        <h1 className="flex items-center">
                            <span className="text-accent pr-4">Phone</span>
                            <Link href="tel:+989397075750">+98 939 707 57 50</Link>
                        </h1>
                        <h1 className="flex items-center">
                            <span className="text-accent pr-4">Mail</span>
                            <Link href="mailto:SamaMoayeri99@Gmail.com">SamaMoayeri99@Gmail.com</Link>
                        </h1>
                        <h1 className="flex items-center">
                            <span className="text-accent pr-4">Website</span>
                            <Link href="http://www.SamaMoayeri.com" passHref>
                                <p target="_blank">www.SamaMoayeri.com</p>
                            </Link>
                        </h1>
                        <h1 className="flex items-center">
                            <span className="text-accent pr-4">LinkedIn</span>
                            <Link href="https://linkedin.com/in/sama-moayeri" passHref>
                                <p target="_blank">linkedin.com/in/samamoayeri</p>
                            </Link>
                        </h1>
                    </div>


                </Bigbox>

                <Bigbox
                    heading={""}
                    className={"col-span-3 p-4 md:p-12  row-span-1 md:col-span-3 md:row-span-2 lg:col-span-4 lg:row-span-2 border-0 animated slide-up"}
                >
                    <div className={"w-full h-fit bg-gradient-to-b from-accent to-white "}>
                        <img src="/Portfolio/Fondation Jan Michalski © Tonatiuh Ambrosetti.jpg"
                             className={"object-cover mix-blend-multiply grayscale"}/>
                    </div>
                    <h1 className={"text-[9px] text-gray-600"}>Photo © Tonatiuh Ambrosetti</h1>

                </Bigbox>

                {/*<Bigbox*/}
                {/*    heading={"Profile"}*/}
                {/*    className={"col-span-3 row-span-3 md:col-span-6 md:row-span-6 lg:col-span-9 lg:row-span-9  border border-white p-12"}*/}
                {/*>*/}
                {/*    <p>*/}
                {/*        Experienced senior graphic designer with a passion*/}
                {/*        for UI/UX and web development. Proven track record in*/}
                {/*        teaching, translating, and creative arts. Recognized*/}
                {/*        for academic excellence and active participation in*/}
                {/*        international events. Proficient in HTML, CSS, JavaScript,*/}
                {/*        and a wide range of design software.*/}
                {/*    </p>*/}

                {/*</Bigbox>*/}
            </motion.div>
            {/*<div*/}
            {/*    className={" bg-gray-800 mx-auto rounded-2xl hover:bg-accent w-full p-4 mb-4 text-center scroll-smooth flex justify-center items-center duration-500 transition-all"}*/}

            {/*></div>*/}
            <Link
                href={'#resume'}
                className={" bg-neutral-950 border border-neutral-800 mx-auto rounded-sm hover:border-neutral-400 w-3/12 p-2 text-xs mb-4 text-center scroll-smooth flex justify-center items-center duration-500 transition-all"}
                onClick={scrollToNextDiv}
            >
                {viewingResume ? 'Hide Resume' : 'View Resume'}
            </Link>
            {viewingResume && (
                <Resume/>
            )}
            {/*<div>*/}
            {/*    {projectsData.map((project, index) => (*/}
            {/*        <PortfolioSection*/}
            {/*            key={index}*/}
            {/*            title={project.title}*/}
            {/*            subheading={project.subheading}*/}
            {/*            year={project.year}*/}
            {/*            services={project.services}*/}
            {/*            description={project.description}*/}
            {/*            coverImageUrl={project.coverImageUrl}*/}
            {/*            images={project.images}*/}
            {/*            color={project.color}*/}
            {/*        >*/}
            {/*        </PortfolioSection>*/}
            {/*    ))}*/}
            {/*</div>*/}

            <Footer className={"relative"}/>

        </Layout>
    )
}

// const fetchProjectsData = async () => {
//     // Simulate an asynchronous data fetching operation
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(projectsData);
//         }, 1000); // Simulate a 1-second delay
//     });
// };


