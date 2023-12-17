import Link from "next/link";
import Layout from "@/pages/layout";
import { worksData } from "@/data/worksData";

export default function Home() {
    return (
        <Layout>

            {/*<div className="grid  grid-cols-1 gap-4 items-center self-center w-full md:w-1/2 mx-auto "*/}
            {/*>*/}


            {/*<Link href={'Portfolio/portfolio'} className={"m-2 hover:rounded-none text-left p-8 pb-2 pl-4 bg-neutral-950 text-white scale-95 hover:scale-105 transition-all duration-500 "}> PORTFOLIO</Link>*/}
            {/*</div>*/}
            <div className="text-center">
                <div className="grid px-2 pb-24 grid-cols-1 gap-2 items-center self-center w-full md:w-1/2 mx-auto">
                    {worksData.map((work) => (
                        <Link key={work.id} href={`/Works/${work.id}`}>
                            <div className=" hover:rounded-none scale-95 hover:scale-105  transition-all duration-500 grid">
                                <img src={work.coverImageUrl} alt={`${work.description} Cover`} className={"hover:rounded-none transition-all duration-500  row-start-1 col-start-1  object-cover"} />
                                <h2 className=" row-start-1 self-end col-start-1 text-white p-4 text-left uppercase ">{work.title}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
