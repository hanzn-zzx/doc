import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "hanzn-zzx的个人文库",
  description: "hanzn-zzx文章的发布地",
  base: "/doc/",
  outDir: "../public",
  lang: 'zh-CN',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'deepin入门', link: '/wiki/introduction' },
      { text: 'deepin常用资源整理', link: 'https://deepincol.gitlab.io/deepin-src-col.html' }
    ],

    sidebar:{
      '/': [
        { text: '文档首页', link: '/' },
        { text: '一篇水文', link:'/home' }
      ],
      '/wiki/': [
        { text: '介绍', link: 'wiki/introduction' }
      ]
    },  

    socialLinks: [
      { icon: 'github', link: 'https://gitlab.com/hanzn-zzx/wiki' }
    ]
  }
})
