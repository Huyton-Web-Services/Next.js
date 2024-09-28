import {getContent} from "@/data/content";
import {getMenu} from "@/data/menu";
import {MainMenu} from "@/components/mainMenu/MainMenu";
//import Image from "next/image";
import Head from "next/head";
import {domain} from "@/pages/_app";
import { Container } from '@mantine/core';
import { Image } from '@mantine/core';

export async function getServerSideProps({resolvedUrl}) {
    const content = await getContent(resolvedUrl);
    const mainMenu = await getMenu();
    const articlesMenu = await getMenu('articles');
    return { props: { content, mainMenu, resolvedUrl, articlesMenu }}
}

export default function FolderPage({ content, mainMenu, resolvedUrl, articlesMenu }) {
    return (
        <main>
            <Head>
                <title>{content.meta_title}</title>
                <meta name="description" content={content.meta_description} />
                <link rel="canonical" href={domain + resolvedUrl} />
                {content.background_colour &&
                    <style>{`
                        body{
                            background: ${content.background_colour};
                            color: ${content.font_colour};
                        }
                    `}</style>
                }
            </Head>
            <MainMenu mainMenu={mainMenu} articlesMenu={articlesMenu} />
            <Container className="mainContainer" bg="var(--mantine-color-colours-0)">
                {content.main_image &&
                    <Image
                        src={content.main_image.url}
                        alt={content.main_image.alt}
                        fit="contain"
                    />
                }
                <h1>{content.title}</h1>
                <h2>{content.heading}</h2>
                <div dangerouslySetInnerHTML={{ __html: content.body }} />
            </Container>
        </main>
    );
}
