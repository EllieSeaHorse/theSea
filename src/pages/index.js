import Link from "next/link";
import Layout from "@/pages/layout";
import { worksData } from "@/data/worksData";

export default function Home() {
    return (
        <Layout>
            <div className="grid grid-cols-1 gap-4 items-center self-center w-full md:w-1/2 mx-auto  hover:scale-105 transition-all duration-500 mb-4">

            <Link href={'Portfolio/portfolio'} className={"rounded-xl text-left pt-8 pb-2 pl-4 bg-black text-white "}> PORTFOLIO</Link>
            </div>
            <div className="text-center">
                <div className="grid grid-cols-1 gap-4 items-center self-center w-full md:w-1/2 mx-auto">
                    {worksData.map((work) => (
                        <Link key={work.id} href={`/Works/${work.id}`}>
                            <div className=" rounded-xl hover:scale-105 transition-all duration-500 mb-1 grid">
                                <img src={work.coverImageUrl} alt={`${work.description} Cover`} className={" rounded-xl row-start-1 col-start-1  object-cover"} />
                                <h2 className=" row-start-1 self-end col-start-1 text-white p-4 text-left uppercase ">{work.title}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
