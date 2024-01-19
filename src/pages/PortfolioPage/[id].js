import React from 'react';
import { projectsData } from '@/data/projectsData';
import Layout from '@/pages/layout';
import Link from "next/link";


const id = ({ project }) => {
    const { title, year, subheading,services, description, coverImageUrl, images, color } = project;
    const currentIndex = projectsData.findIndex((p) => p.id === project.id);
    console.log(`current ${currentIndex}`)
    const length = projectsData.length;
    const getNextProjectId = () => {
        const nextIndex = (currentIndex + 1) % projectsData.length;
        return projectsData[nextIndex]?.id;
    };

    const getPreviousProjectId = () => {
        const previousIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
        return projectsData[previousIndex]?.id;
    };

    return (
        <Layout>
            <div className={"h-screen grid grid-cols-4"}>

            <div className={"p-8 pt-16 flex flex-col justify-between col-span-1 text-white"}>
                {/*<div>*/}
                {/*    <h1 className="text-3xl font-bold">{title}</h1>*/}
                {/*    <p>{subheading}</p>*/}
                {/*    <p>{year}</p>*/}
                {/*    <p className={"text-xs text-justify p-2 border-l"}>{description}</p>*/}
                {/*</div>*/}
                <div className={"border-l p-4 px-4 "}>
                    <h1 className="text-3xl font-medium uppercase ">{title}</h1>
                    <p className="text-gray-500 text-sm pl-2 ">{year}</p>

                </div>
                <div className={"text-xs"} style={{color:color}}>
                    {services.map((service, index) => (
                    <p key={index}>
                        - {service}
                    </p>
                ))}
                </div>


                <div className={"flex justify-between text-xs text-neutral-400"}>
                    <Link href={`/PortfolioPage/${getPreviousProjectId()}`} >
                        <i className="bi bi-arrow-left-square"></i>
                    </Link>
                    <Link href={`/PortfolioPage/${getNextProjectId()}`} >
                        Next
                        <i className="p-2 bi bi-arrow-right-square"></i>

                    </Link>
                </div>


            </div>
            <div style={{ overflowX: 'auto' } } className={"flex col-span-3"}>

                {images.map((image, index) => (
                        <img key={index} src={image} alt={`${title} Image ${index + 1}`} className="h-full object-contain rounded-lg" />
                ))}
                <p className=" h-80 aspect-A4 text-xs p-6 self-center">{description}</p>

            </div>

            </div>


        </Layout>
    );
};

export default id;


export async function getStaticPaths() {
    const paths = projectsData.map((project) => ({
        params: { id: project.id.toString() }, // Convert the ID to string if it's not already
    }));

    return { paths, fallback: 'blocking' }; // Use 'blocking' for better SEO
}

export async function getStaticProps({ params }) {
    const projectId = params.id;
    const project = projectsData.find((p) => p.id === projectId);

    return {
        props: {
            project,
        },
    };
}

// export async function getStaticPaths() {
//     const paths = projectsData.map((project) => ({
//         params: { id: project.id },
//
//     }));
//
//     return { paths, fallback: true };
// }
//
// export async function getStaticProps({ params }) {
//     const project = projectsData.find((p) => p.id === params.id);
//
//     return {
//         props: {
//             project,
//         },
//     };
// }
// export async function getServerSideProps({ params }) {
//     const projectId = params.id;
//     console.log('Current Project ID:', projectId);
//
//     const project = projectsData.find((p) => p.id === projectId);
//     console.log('Current Project:', project);
//
//     const currentIndex = projectsData.findIndex((p) => p.id === projectId);
//     console.log('Current Index:', currentIndex);
//
//     return {
//         props: {
//             project,
//         },
//     };
// }

