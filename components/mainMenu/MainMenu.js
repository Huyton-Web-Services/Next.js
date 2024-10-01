import Link from "next/link";
import { Menu, Group, Center, Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './MainMenu.module.css';

export function MainMenu({mainMenu, articlesMenu}){
    const [opened, { toggle }] = useDisclosure(false);

    const articles =   {
        href: '#',
        title: 'Articles',
        links: articlesMenu
    };
    const theMainMenu = [...mainMenu,articles ];

    const items = theMainMenu.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.href}><Link href={item.href}>{item.title}</Link></Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu key={link.title} trigger="click" transitionProps={{ exitDuration: 1000 }}>
                    <Menu.Target>
                        <Link
                            href={link.href}
                            className={classes.link}
                        >
                            <Center>
                                <span className={classes.linkLabel}>{link.title}</span>
                                <IconChevronDown size="0.9rem" stroke={1.5} />
                            </Center>
                        </Link>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <Link
                key={link.title}
                href={link.href}
                className={classes.link}
            >
                {link.title}
            </Link>
        );
    });

    return (
        <header className={classes.header}>
            <div className={classes.mainMenu}>
                <h2><Link href={'/'}>Curabitur</Link></h2>
                <Group gap={5} visibleFrom="sm">
                    {items}
                </Group>
                <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
            </div>
        </header>
    );
}
