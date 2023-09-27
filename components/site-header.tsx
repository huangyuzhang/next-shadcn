import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/nav-main"
import { MobileNav } from "./nav-mobile"
import { NavDropdown } from "./nav-dropdown"
import { ThemeToggle } from "@/components/theme-toggle"
import { SubNav } from "./nav-sub"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <MobileNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <SubNav />
            <ThemeToggle />
            <NavDropdown />
          </nav>
        </div>
      </div>
    </header>
  )
}
