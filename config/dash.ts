import { MainNavItem, SidebarNavItem } from "types/nav"

interface DashConfig {
    sidebarNav: SidebarNavItem[]
}

export const dashConfig: DashConfig = {
    sidebarNav: [
        {
            title: "Getting Started",
            items: [
                {
                    title: "Introduction",
                    href: "/docs",
                    items: [],
                },
                {
                    title: "Installation",
                    href: "/docs/installation",
                    items: [],
                },
            ],
        },
        {
            title: "Installation",
            items: [
                {
                    title: "Next.js",
                    href: "/docs/installation/next",
                    items: [],
                },
                {
                    title: "Vite",
                    href: "/docs/installation/vite",
                    items: [],
                },
            ],
        },
        {
            title: "Dark Mode",
            items: [
                {
                    title: "Next.js",
                    href: "/docs/dark-mode/next",
                    items: [],
                },
                {
                    title: "Vite",
                    href: "/docs/dark-mode/vite",
                    items: [],
                },
            ],
        },
        {
            title: "Components",
            items: [
                {
                    title: "Accordion",
                    href: "#",
                    items: [
                        {
                            title: "Accordion",
                            href: "",
                            items: [],
                        },
                        {
                            title: "Toast",
                            href: "",
                            items: [],
                        },
                    ],
                },
                {
                    title: "Toast",
                    href: "",
                    items: [],
                },
                {
                    title: "Disaled",
                    href: "",
                    items: [],
                },
                {
                    title: "Tooltip",
                    href: "",
                    items: [],
                },
            ],
        },
    ],
}
