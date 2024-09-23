import {getContent} from "@/data/content";

export async function getServerSideProps() {
    //const content = await getContent('/articles/article-2');
    const content = await getContent();
    return { props: { content }}
}

export default function FolderPage({ content }) {
    //console.log(content);
    return (
        <main>
            <h1>{content.title}</h1>
            <h2>{content.heading}</h2>
            <div dangerouslySetInnerHTML={{ __html: content.body }} />
        </main>
    );
}
