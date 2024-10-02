import {getContent} from "@/data/content";
import {getMenu} from "@/data/menu";
import {MainMenu} from "@/components/mainMenu/MainMenu";
import Image from "next/image";
import Head from "next/head";
import {domain} from "@/pages/_app";

export async function getServerSideProps({resolvedUrl}) {
    const content = await getContent(resolvedUrl);
    const mainMenu = await getMenu();
    const articlesMenu = await getMenu('articles');
    return { props: { content, mainMenu, resolvedUrl, articlesMenu }}
}

export default function FolderPage({ content, mainMenu, resolvedUrl, articlesMenu }) {
    return (
        <>
            <Head>
                <title>{content.meta_title}</title>
                <meta name="description" content={content.meta_description} />
                <link rel="canonical" href={domain + resolvedUrl} />
            </Head>

            <MainMenu mainMenu={mainMenu} articlesMenu={articlesMenu} />

            <div className="container mx-auto py-20 clear-both">
                <h1 className="text-7xl w-3/4 mb-4 float-start clear-start">{content.title}</h1>
                <h2 className="text-2xl w-1/4 mb-4 float-end clear-end">{content.heading}</h2>
            </div>

            <div className="container mx-auto bg-white p-4 rounded-t-md clear-both">
                {content.main_image ?
                    <div className="lg:columns-2">
                        <Image
                            src={content.main_image.url}
                            width={content.main_image.width}
                            height={content.main_image.height}
                            alt={content.main_image.alt}
                            priority={true}
                            className="break-after-column"
                        />
                        <div className="prose" dangerouslySetInnerHTML={{ __html: content.body }} />
                    </div>
                    :
                    <div className="prose" dangerouslySetInnerHTML={{ __html: content.body }} />
                }
            </div>
        </>
    );
}
