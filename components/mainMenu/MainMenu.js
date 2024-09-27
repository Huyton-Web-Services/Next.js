import Link from "next/link";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export function MainMenu({mainMenu, articlesMenu}){
    return(
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Tramp Creative
                    </Typography>
                    <Divider />
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {mainMenu.map((link) => (
                            <Link href={link.href}>
                                <Button key={link.href} sx={{ color: '#fff' }}>
                                    {link.title}
                                </Button>
                            </Link>
                        ))}

                        <Button
                            sx={{ color: '#fff' }}
                        >
                            Articles
                        </Button>

                    </Box>
                </Toolbar>

            </AppBar>

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
        </>
    );
}
