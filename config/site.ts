import { Github, Twitter } from "lucide-react"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "tutu",
  ogImage: "https://ui.shadcn.com/og.jpg",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Dash",
      href: "/dash",
    },
    {
      title: "Themes",
      href: "/themes",
    },
    {
      title: "Tasks",
      href: "/tasks",
    },
  ],
  subNav: [
    {
      title: "GitHub",
      href: "https://github.com/huangyuzhang",
      icon: Github,
    },
    {
      title: "Twitter",
      href: "#",
      icon: Twitter,
    },
  ],
  links: {
    twitter: "#",
    github: "https://github.com/huangyuzhang",
    docs: "https://dash.hyz.im/docs",
  },
}
