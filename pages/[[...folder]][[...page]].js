import {getContent} from "@/data/content";
import {getMenu} from "@/data/menu";
import {MainMenu} from "@/components/mainMenu/MainMenu";
import Image from "next/image";
import Head from "next/head";
import {domain} from "@/pages/_app";

import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';

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

            <Box width={'100%'} alignContent={'center'} display={'flex'}>
                <Box backgroundColor={'#f00'} width={{
                    base: '100%',
                    md: '768px',
                    lg: '960px',
                    xl: '1200px',
                    '2xl': '1536px',
                }} >Test responsive</Box>
            </Box>

            <Container className="headingContainer">
                <Heading fontSize='6xl' as='h1'>{content.title}</Heading>
                <Text>{content.heading}</Text>
            </Container>

            <Container className="contentContainer" >
                {content.main_image &&
                    <Image
                        src={content.main_image.url}
                        width={content.main_image.width}
                        height={content.main_image.height}
                        alt={content.main_image.alt}
                        priority={true}
                    />
                }
                <div dangerouslySetInnerHTML={{ __html: content.body }} />
            </Container>
        </main>
    );
}
