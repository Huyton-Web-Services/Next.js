import {getContent} from "@/data/content";
import {getMenu} from "@/data/menu";
import {MainMenu} from "@/components/mainMenu/MainMenu";

export async function getServerSideProps({resolvedUrl}) {
    const content = await getContent(resolvedUrl);
    const mainMenu = await getMenu();
    return { props: { content, mainMenu }}
}

export default function FolderPage({ content, mainMenu }) {
    return (
        <main>
            <MainMenu mainMenu={mainMenu} />
            <h1>{content.title}</h1>
            <h2>{content.heading}</h2>
            <div dangerouslySetInnerHTML={{ __html: content.body }} />
        </main>
    );
}
