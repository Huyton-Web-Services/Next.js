import Link from "next/link";

export function MainMenu({mainMenu, articlesMenu}){
    return(
        <nav>
            <h3>Main Menu</h3>
            <ul>
                {mainMenu.map((link)=>{
                    return (
                        <li key={link.href}><Link href={link.href}>{link.title}</Link></li>
                    );})
                }
                <li>Articles
                    <ul>
                        {articlesMenu.map((link)=>{
                            return (
                                <li key={link.href}><Link href={link.href}>{link.title}</Link></li>
                            );})
                        }
                    </ul>
                </li>
            </ul>
        </nav>
    );
}
