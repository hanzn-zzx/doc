import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Linux wiki入门版",
  description: "针对小白的Linux入门文档",
  base: "/doc/",
  outDir: "../public",
  lang: 'zh-CN',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Linux入门', link: '/wiki/introduction' },
      { text: 'deepin常用资源整理', link: 'https://deepincol.gitlab.io/deepin-src-col.html' }
    ],

    sidebar: [
      { text: '文档首页', link: '/' },
      { text: '水文', link:'/home' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://gitlab.com/hanzn-zzx/wiki' }
    ]
  }
})
