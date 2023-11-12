import Link from "next/link";
import Layout from "@/pages/layout";
import { worksData } from "@/data/worksData";

export default function Home() {
    return (
        <Layout>
            <Link href={'Portfolio/portfolio'}> Portfolio</Link>

            <div className="text-center">
                <h1>Works</h1>
                <div className="grid grid-cols-1 gap-4 items-center self-center w-1/2 mx-auto">
                    {worksData.map((work) => (
                        <Link key={work.id} href={`/Works/${work.id}`}>
                            <div className="border p-4">
                                <img src={work.coverImageUrl} alt={`${work.description} Cover`} />
                                <h2 className="mt-2">{work.title}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
