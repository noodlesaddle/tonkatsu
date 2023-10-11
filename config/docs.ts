import { DocsConfig } from "types"

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Projects",
      href: "/projects",
    },
  ],
  sidebarNav: [
   
    {
      title: "",
      items: [
        {
          title: "Projects",
          href: "/projects",
        },
        {
          title: "Go Lang web scrappers",
          href: "/projects/golang",
        },

        {
          title: "Chat Search project with Open AI API",
          href: "/projects/chatSearch",

        },
        {
          title: "Easy coding app for kids",
          href: "/projects/in-progress",
          disabled: true,
        },
      ],
    },
  ],
}
