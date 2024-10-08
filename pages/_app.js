import "../styles/globals.css";
import Head from "next/head";

export const apiDomain = "https://cms.trampcreative.co.uk"; // Use CMS domain
export const domain = "https://www.trampcreative.co.uk"; // Use your domain

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
            </Head>
            <Component {...pageProps} />
        </>
    );
}
