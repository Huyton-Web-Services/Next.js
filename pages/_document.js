import { Html, Head, Main, NextScript } from 'next/document'

export default function _document() {
    return (
        <Html lang="en" data-bs-theme="dark">
            <Head />
            <body className="h-full">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
