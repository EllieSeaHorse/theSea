import Layout from "@/pages/layout";
import Bigbox from "@/components/PortfolioBoxes/Bigbox";
import {projectsData} from "@/data/projectsData";
import Link from 'next/link';
import React, {useState} from 'react';
import Resume from "@/components/PortfolioBoxes/Resume";
import Footer from "@/components/footer";
import {motion} from "framer-motion";
import Head from "next/head";



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



    return (
        <Layout>
            <Head>
                <title>Sama Moayeri</title>
                <meta name="description" content={"Resume - Sama Moayeri -  Selection of Graphic Design and Photography Projects from 2016"} />
                <meta name="keywords" content={'Photography, Art, Graphic Design, Artist Portfolio, Artist Resume'} />
                <meta name="theme-color" content="#AA3949"/>
            </Head>
            <motion.div

                initial={{  y: 100 }}
                animate={{  y: 0 }}
                exit={{ y: 20 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 50,
                }}
                className={"pb-6 article px-6 pt-6 md:pt-10 grid lg:grid-cols-9 md:grid-cols-6 grid-cols-3 gap-6 text-sm"}
            >
                <Bigbox className={"col-span-3 md:py-0 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-5 lg:row-span-2 text-xs md:text-sm h-full flex flex-col animated slide-up"}>
                    <h1 className={"text-2xl mt-4  font-medium lg:text-4xl"}>About Me</h1>
                    {/* <h1 className={" uppercase py-2"}>+ Portfolio / CV</h1> */}
                    {/* <h1 className={"text-xs text-accent uppercase align-bottom justify-self-end text-right pt-6"}>Sama Moayeri</h1> */}
                    {/* <h1 className={"text-xs text-accent uppercase text-right pb-16"}>1999</h1> */}

                    <p className={" leading-5 py-6 text-sm my-4"}>
                    Passionate Creative Designer 
                    with an extensive background in 
                    visual communication and a strong 
                    foundation in both historical and contemporary art 
                    practices. Her experience spans across creative design, 
                    photography, translation, and teaching, each role 
                    enhancing her versatility and enriching her creative vision.
                    </p>

                    {/* <div className="md:flex-grow  "></div> {/* Add this div to push content to the top */
                    // <div className="flex flex-col space-y-2 cursor-pointer text-xs">
                        {/* <h1 className="flex items-center">
                            <span className="text-accent pr-4">Phone</span>
                            <Link href="tel:+989397075750">+98 939 707 57 50</Link>
                        </h1> */}
                    //     <h1 className="flex items-center">
                    //         <span className="text-accent pr-4">Mail</span>
                    //         <Link href="mailto:Sama.Moayeri.Bu@Gmail.com">Sama.Moayeri.Bu@Gmail.com</Link>
                    //     </h1>

                    //     <h1 className="flex items-center">
                    //         <span className="text-accent pr-4">LinkedIn</span>
                    //         <Link href="https://linkedin.com/in/sama-moayeri" passHref>
                    //             <p target="_blank">/SamaMoayeri</p>
                    //         </Link>
                    //     </h1>
                    </div> */}


                </Bigbox>

                <Bigbox
                    heading={""}
                    className={"col-span-3  row-span-1 md:col-span-3 md:row-span-2 lg:col-span-4 lg:row-span-2 border-0 animated slide-up"}
                >
                    <div className={"w-full h-fit  "}>
                        <img src="/Portfolio/Sama Moayeri © Tonatiuh Ambrosetti-01.jpg"
                             className={"object-cover mix-blend-multiply grayscale"}
                             width="933" height="1181"
                             alt={"Photo of Sama Moayeri by Tonatiuh Ambrosetti"}
                        />
                    </div>
                    <h1 className={"text-[7px] opacity-30"}>Photo © Tonatiuh Ambrosetti</h1>

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
            {/* <Link
                href={'#resume'}
                className={"bg-milk-darker hover:shadow-md mx-auto rounded-sm w-3/12 p-2 text-xs mb-4 text-center scroll-smooth flex justify-center items-center duration-500 transition-all"}
                onClick={scrollToNextDiv}
            >
                {viewingResume ? 'Hide Resume' : 'View Resume'}
            </Link>
            {viewingResume && (
                <Resume/>
            )} */}
            {/*<div className={"w-full bg-black px-2"}>*/}
            {/*    {Array.from({length: 28}, (_, index) => (*/}
            {/*        <img*/}
            {/*            key={index + 1}*/}
            {/*            src={`/Portfolio/Selection/selec${index + 1}.jpg`}*/}
            {/*            alt={`Image ${index + 1}`}*/}
            {/*            width={'1700'} height={'1100'}*/}
            {/*            className={"object-contain w-full max-h-screen"}*/}
            {/*        />*/}
            {/*    ))}*/}
            {/*</div>*/}

            <Footer className={"relative bottom-0"}/>

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


