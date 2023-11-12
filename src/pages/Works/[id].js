import { worksData } from "@/data/worksData";
import Layout from "@/pages/layout";

const Id = ({ work }) => {
    const { title, year, description, coverImageUrl, images } = work;

    return (
        <Layout>
            <h1>{title}</h1>
            <p>{year}</p>
            <p>{description}</p>
            {/*<img src={coverImageUrl} alt={`${title} Cover`} />*/}
            <div className="grid grid-cols-3 gap-4 ">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`${title} Image ${index + 1}`}
                        className="mx-auto object-cover w-full"
                    />
                ))}
            </div>
        </Layout>
    );
};

export default Id;

export async function getStaticPaths() {
    const paths = worksData.map((work) => ({
        params: { id: work.id },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const work = worksData.find((w) => w.id === params.id);

    return {
        props: {
            work,
        },
    };
}
