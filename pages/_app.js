import { Jost } from 'next/font/google';
import '@mantine/core/styles.css';
import "../styles/globals.css";
import { createTheme, MantineProvider } from '@mantine/core';
import { ColorSchemeScript } from '@mantine/core';
import Head from "next/head";

const jost = Jost({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

export const apiDomain = "https://cms.trampcreative.co.uk"; // Use CMS domain
export const domain = "https://www.trampcreative.co.uk"; // Use your domain

const colours = [
    "#fffaf4", // Foreground
    "#f1e4d4", // Background
    "#e6d0b7",
    "#d7b68e",
    "#cca16c",
    "#c49356",
    "#c18c4a",
    "#aa773b",
    "#986a31",
    "#855a26"
];

const theme = createTheme({
    fontFamily: jost.style.fontFamily,
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
            <MantineProvider theme={theme}>
                <Component {...pageProps} />
            </MantineProvider>
        </>
    );
}
