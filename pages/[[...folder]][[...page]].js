import {getContent} from "@/data/content";
import {getMenu} from "@/data/menu";
import {MainMenu} from "@/components/mainMenu/MainMenu";
import Image from "next/image";
import Head from "next/head";
import {domain} from "@/pages/_app";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';

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
            </Head>
            <MainMenu mainMenu={mainMenu} articlesMenu={articlesMenu} />
            <Container fixed>
                <Grid container spacing={2}>
                    <Grid size={{ sm: 12, md: 8 }}>
                        <h1>{content.title}</h1>
                    </Grid>
                    <Grid size={{ sm: 12, md: 4 }}>
                        <p>{content.heading}</p>
                    </Grid>
                </Grid>
            </Container>
            <Container className="contentContainer" fixed>
                {content.main_image ?

                <Grid container spacing={2}>
                    <Grid size={{ sm: 12, md: 6 }}>
                        {content.main_image &&
                            <Image
                                src={content.main_image.url}
                                width={content.main_image.width}
                                height={content.main_image.height}
                                alt={content.main_image.alt}
                                priority={true}
                                className="imageFix"
                            />
                        }
                    </Grid>
                    <Grid size={{ sm: 12, md: 6 }}>
                        <div dangerouslySetInnerHTML={{ __html: content.body }} />
                    </Grid>
                </Grid>
                    :

                    <div dangerouslySetInnerHTML={{ __html: content.body }} />
                }

            </Container>
        </main>
    );
}
