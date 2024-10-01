import { Fredoka } from 'next/font/google';
import '@mantine/core/styles.css';
import "../styles/globals.css";
import { createTheme, MantineProvider } from '@mantine/core';
import { ColorSchemeScript } from '@mantine/core';
import Head from "next/head";

const fredoka = Fredoka({
    weight: ['300', '700'],
    style: ['normal'],
    subsets: ['latin'],
});

export const apiDomain = "https://cms.trampcreative.co.uk"; // Use CMS domain
export const domain = "https://www.trampcreative.co.uk"; // Use your domain

const colours = [
    "#eeebff",
    "#d7d0fa",
    "#ab9df8",
    "#7e66f7",
    "#5939f7",
    "#431ef7",
    "#3712f8",
    "#2b08dd",
    "#2404c6",
    "#1b00ad" // Main blue 9
];

const theme = createTheme({
    fontFamily: fredoka.style.fontFamily,
    colors: {
        colours,
    }
});

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="all" />
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <ColorSchemeScript />
            </Head>
            <MantineProvider defaultColorScheme="dark" theme={theme}>
                <Component {...pageProps} />
            </MantineProvider>
        </>
    );
}
