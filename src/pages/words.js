
import Layout from "@/pages/layout";
import Footer from "@/components/footer";
import Head from "next/head";
import Link from "next/link";
import { wordsData } from "@/data/wordsData";
import Cover from "@/components/BookPages/Cover";

export default function Words() {
    // Sort wordsData by date (newest first)
    const sortedWords = wordsData.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <Layout>
            <Head>
                <title>Sama Moayeri - Words</title>
                <meta name="description" content="Sama Moayeri's collection of words and projects." />
                <meta name="keywords" content="Photography, Art, Graphic Design, Artist Portfolio" />
                <meta name="theme-color" content="#232323"/>
            </Head>

            <div className="article my-24 p-6 space-y-4 ">
                {sortedWords.map((word) => (
                    <Link href={`/words/${word.id}`} key={word.id} className="border-b m-12 pb-2  flex flex-col md:flex-row">
                            
                            <div className={"bg-neutral-50 w-full h-full aspect-video "}>
                            <img className={"object-contain grayscale p-6 w-full h-full self-center place-self-center align-middle"} src={word.coverImageUrl.src}/>
                            </div>
                        < div  
                         className="p-2 place-self-end align-baseline self-end w-full pl-0 py-6 md:py-4 md:pl-10"
                             >
                            <h1 className="text-xl font-normal capitalize  ">{word.title}</h1>
                                <p className="text-gray-500 text-xs">{new Date(word.date).getFullYear()}</p>
                                <p className="text-gray-600 text-xs pt-1  ">
                                    {word.text[0].split(' ').slice(0, 66).join(' ') + '...' }
                                
                                     </p>   
                                     <p className="text-gray-600 text-[10px] pt-3 opacity-60 ">{word.coverImageUrl.alt}</p>

                            
                        </div>
                
                        
                    </Link>
                
                ))}
            </div>
            <p className={"m-10 md:m-24 p-4 md:p-10 border border-neutral-200 opacity-50 text-[10px]"}>Fair Use Notice:
                This website may contain copyrighted material used under the doctrine of Fair Use as outlined in Section 107 of the U.S. Copyright Act. Such material is made available for the purposes of commentary, critique, education, and scholarly research. All images and texts remain the property of their respective copyright holders. No copyright infringement is intended. If you are the rights holder and believe your work has been used improperly, please contact us to request removal or proper attribution.
                </p>

            <Footer className="pb-10 md:pb-0 relative"/>
        </Layout>
    );
}
