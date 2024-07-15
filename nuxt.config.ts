export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxthq/studio",
    "@vueuse/nuxt"
  ],
  ui: {
    icons: ["heroicons", "lucide"],
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
        class: "h-full",
      },
      bodyAttrs: {
        class: "antialiased bg-gray-50 dark:bg-black min-h-screen",
      },
    },
  },
  content: {
    highlight: {
      theme: "github-dark",
    },
  },
  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },
  // devServer: {
  //   host: "0.0.0.0",
  //   port: 8000, // you can replace this port with any port
  // },

  vite: {
    server: {
      // In my case I use Nginx reverse proxy
      // with self signet certificate (mkcert)
      // so I just want this works on localhost:3000
      // but these settings ignoring. You can check hmr is false
      // in 'vite:configResolved' hook
      // And the most efficient and elegant way to fix it is
      // override vite config in 'vite:extendConfig' hook below
      hmr: {
        protocol: 'ws',
        host: 'localhost',
      },
    },
  },
  hooks: {
    'vite:extendConfig' (viteInlineConfig, env) {
      viteInlineConfig.server = {
        ...viteInlineConfig.server,
        hmr: {
          protocol: 'ws',
          host: 'localhost',
        },
      }
    },
  },

});
