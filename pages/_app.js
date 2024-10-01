import { Fredoka } from 'next/font/google';
import Bootstrap from "../components/bootstrap/Bootstrap";
import "../styles/globals.scss";
import Head from "next/head";

const fredoka = Fredoka({
    weight: '300', // 700 for bold
    subsets: ['latin'],
});

export const apiDomain = "https://cms.trampcreative.co.uk"; // Use CMS domain
export const domain = "https://www.trampcreative.co.uk"; // Use your domain

export default function MyApp({ Component, pageProps }) {
    return (
        <main className={fredoka.className}>
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="all" />
            </Head>
            <Component {...pageProps} />
            <Bootstrap/>
        </main>
    );
}
