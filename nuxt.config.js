import { resolve } from 'path';

export default {
  /**
   * 允许在访问文件时使用别名访问自定义目录
   * 默认的别名，@和~路径<srcDir>，@@和~~路径<rootDir>
   */
  alias: {
    'images': resolve(__dirname, "./assets/images"),
    'styles': resolve(__dirname, "./assets/styles")
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  // 设置页面头部信息
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
        hid: "description",
        name: "description",
        content: ""
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

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Global CSS: https://go.nuxtjs.dev/config-css
  // 样式文件管理
  css: [
    "nprogress/nprogress.css",
    "@primer/css/markdown/index.scss",
    "~/assets/styles/theme.scss",
    "~/assets/styles/gitalk.scss",
    "~/assets/styles/code-highlight.scss",
    "~/assets/styles/global.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // 全局plugins插件
  plugins: [
    {
      src: "@/plugins/router.js",
      ssr: false
    },
    {
      src: "@/plugins/api.js",
      ssr: false
    },
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/dayjs",
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},



  // 环境变量
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRETS: process.env.CLIENT_SECRETS,
  },

  // axios模块配置: https://go.nuxtjs.dev/config-axios
  axios: {},

  // dayjs模块配置:
  dayjs: {
    locales: ["zh", "en"],
    defaultLocale: "zh",
  }
};
