import Link from "next/link";
import {useRouter} from 'next/router';

export function MainMenu({mainMenu, articlesMenu}){
    const router = useRouter();

    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Curabitur</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainMenu"
                    aria-controls="mainMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                ><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="mainMenu">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {mainMenu.map((link)=>{
                            return (
                                <li className="nav-item" key={link.href}>
                                    <Link
                                        className={`nav-link ${router.asPath === link.href ? "active" : " "}`}
                                        aria-current="page"
                                        href={link.href}
                                    >{link.title}</Link>
                                </li>
                            );})
                        }
                        <li className="nav-item dropdown">
                            <Link
                                className={`nav-link dropdown-toggle`}
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Articles
                            </Link>
                            <ul className="dropdown-menu">
                                {articlesMenu.map((link)=>{
                                    return (
                                        <li key={link.href}><Link className={`dropdown-item ${router.asPath === link.href ? "active" : " "}`} href={link.href}>{link.title}</Link></li>
                                    );})
                                }
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
