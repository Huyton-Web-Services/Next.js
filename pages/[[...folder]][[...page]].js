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

            <div className="container headingContent">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <h1>{content.title}</h1>
                    </div>
                    <div className="col-12 col-md-4">
                        <p>{content.heading}</p>
                    </div>
                </div>
            </div>
            <div className="container mainContent">
                { content.main_image ?
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <Image
                                src={content.main_image.url}
                                width={content.main_image.width}
                                height={content.main_image.height}
                                alt={content.main_image.alt}
                                priority={true}
                                className="imageFix"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <div dangerouslySetInnerHTML={{ __html: content.body }} />
                        </div>
                    </div>
                    :
                    <div dangerouslySetInnerHTML={{ __html: content.body }} />
                }
            </div>
        </>
    );
}
