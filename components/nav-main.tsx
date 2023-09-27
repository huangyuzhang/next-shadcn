"use client"

import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Rabbit } from "lucide-react"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()

  return (
    <div className="hidden gap-6 md:flex md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Rabbit className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center px-4",
                    pathname?.startsWith(item.href)
                      ? "font-bold text-primary"
                      : "font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
