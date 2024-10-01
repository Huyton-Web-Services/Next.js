import {getContent} from "@/data/content";
import {getMenu} from "@/data/menu";
import {MainMenu} from "@/components/mainMenu/MainMenu";
//import Image from "next/image";
import Image from 'react-bootstrap/Image';
import Head from "next/head";
import {domain} from "@/pages/_app";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

            <Container>
                <Row>
                    <Col md={12} lg={8}>
                        <h1>{content.title}</h1>
                    </Col>
                    <Col md={12} lg={4}>
                        <p>{content.heading}</p>
                    </Col>
                </Row>
            </Container>

            <Container>
                {content.main_image ?
                    <Row>
                        <Col md={12} lg={6}>
                            <Image
                                src={content.main_image.url}
                                alt={content.main_image.alt}
                                fluid
                            />
                        </Col>
                        <Col md={12} lg={6}>
                            <div dangerouslySetInnerHTML={{ __html: content.body }} />
                        </Col>
                    </Row>
                    :
                    <div dangerouslySetInnerHTML={{ __html: content.body }} />
                }
            </Container>
        </>
    );
}
