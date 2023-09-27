"use client"

import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { Button } from "./ui/button"
import { Github, HelpCircle, Mail } from "lucide-react"
import { MixerHorizontalIcon } from "@radix-ui/react-icons"

interface SubNavProps {
  items?: NavItem[]
}

export function SubNav() {

  return (
    <div className="hidden gap-2 md:flex md:gap-0">
      <Button
        variant="ghost"
        size="icon"
        className="ml-auto hidden h-10 lg:flex"
      >
        <HelpCircle className="h-5 w-5" />
      </Button>

    </div>
  )
}
