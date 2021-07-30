import { resolve } from 'path';

export default {
  target: 'server',
  /**
   * 允许在访问文件时使用别名访问自定义目录
   * 默认的别名，@和~路径<srcDir>，@@和~~路径<rootDir>
   * https://zh.nuxtjs.org/docs/2.x/configuration-glossary/configuration-alias
   */
  alias: {
    'images': resolve(__dirname, "./assets/images"),
    'styles': resolve(__dirname, "./assets/styles")
  },
  /**
   * 构建配置
   * https://zh.nuxtjs.org/docs/2.x/configuration-glossary/configuration-build
   */
  build: {},
  /**
   * 样式文件管理
   * https://zh.nuxtjs.org/docs/2.x/configuration-glossary/configuration-css
   */
  css: [
    "nprogress/nprogress.css",
    // "@primer/css/markdown/index.scss",
    "~/assets/styles/code-highlight.scss",
    "~/assets/styles/colors.scss",
    "~/assets/styles/gitalk.scss",
    "~/assets/styles/global.scss"
  ],
  /** 
   * 自动导入组件
   * https://zh.nuxtjs.org/docs/2.x/configuration-glossary/configuration-components
   */
  components: true,
  /**
   * 页面头部标签信息
   * https://zh.nuxtjs.org/docs/2.x/configuration-glossary/configuration-head
   */
  head: {
    title: "chenkun8651",
    htmlAttrs: {
      lang: "zh"
    },
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        name: "description",
        hid: "description",
        content: "陈坤的博客"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ],
  },
  /**
   * 插件
   * https://go.nuxtjs.dev/config-plugins
   */
  plugins: [
    {
      src: "@/plugins/router.ts",
      ssr: false
    },
  ],
  /**
   * 模块
   * https://go.nuxtjs.dev/config-modules
   */
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/dayjs",
  ],
  /**
   * 生产模块
   * https://go.nuxtjs.dev/config-modules
   */
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss",
  ],
  // 环境变量
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRETS: process.env.CLIENT_SECRETS,
  },
  // axios模块配置
  axios: {},
  // dayjs模块配置
  dayjs: {
    locales: ["zh", "en"],
    defaultLocale: "zh",
  }
};
