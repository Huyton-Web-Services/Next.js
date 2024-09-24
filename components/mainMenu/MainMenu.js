import Link from "next/link";

export function MainMenu({mainMenu}){
    return(
        <ul>
            {
                mainMenu.map((link)=>{
                    return (
                        <li key={link.href}><Link href={link.href}>{link.title}</Link></li>
                    )
                })
            }
        </ul>
    );
}
