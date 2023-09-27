"use client"
import "@/styles/globals.css"
import { dashConfig } from "@/config/dash"

import { ScrollArea } from "@/components/ui/scroll-area"
import { SidebarNav } from "@/components/nav-sidebar"
import { Sidebar } from "./components/sidebar"
import { playlists } from "./data/playlists"


const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

interface DashLayoutProps {
    children: React.ReactNode
}

export default function DashLayout({ children }: DashLayoutProps) {
    return (
        <div className="border-b">
            <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
                <Sidebar playlists={playlists} className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)]" />
                {/* <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
                        <SidebarNav items={dashConfig.sidebarNav} />
                    </aside> */}
                <ScrollArea className="h-full py-6 pl-8 pr-6 lg:py-8">
                    {children}
                </ScrollArea>
            </div>
        </div>
    )
}
