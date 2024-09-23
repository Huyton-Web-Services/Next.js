import Link from "next/link";
/*import {getContent} from "@/data/content";

export async function getServerSideProps({ res }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=300, stale-while-revalidate=3600'
    );

    const content = await getContent('/lorem-ipsum');

    return { props: { content }}
}
*/
export default function FolderPage() {
    return (
        <main>
            <h1>Tramp Creative</h1>
            <h2>Coming Soon</h2>
            <footer><p>Created by <Link href="https://www.huytonweb.com/" target="_blank">Huyton Web Services</Link></p></footer>
        </main>
    );
}
