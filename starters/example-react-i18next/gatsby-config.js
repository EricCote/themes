module.exports = {
  siteMetadata: {
    siteUrl: `https://gatsby-theme-i18n-react-i18next.netlify.app`,
    title: "gatsby-theme-i18n-react-i18next",
    description: `Default example for i18n with react-i18next`,
    author: `LekoArts`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/i18n/react-i18next`,
        name: `locale`
      }
    },
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-theme-i18n`,
    //   options: {
    //     defaultLang: `en`,
    //     configPath: require.resolve(`./i18n/config.json`),
    //   },
    // },
    // {
    //   resolve: `gatsby-theme-i18n-react-i18next`,
    //   options: {
    //     locales: `./i18n/react-i18next`,
    //     i18nextOptions: {
    //       ns: ["translation", "blog", "404"],
    //     },
    //   },
    // },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        localeJsonSourceName: `locale`, 
        languages:['en','de'],
        defaultLanguage:'en',
        siteUrl:'https://example.com',
        // trailingSlash: 'always',
        i18nextOptions: {
          debug: true,
          fallbackLng: 'en',
          supportedLngs: ['en','de'],
          defaultNS: ["translation", "blog", "404"],
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          }
        },
        // pages: [
        //   {
        //     matchPath: '/:lang?/blog/:uid',
        //     getLanguageFromPath: true
        //   },
        //   {
        //     matchPath: '/preview',
        //     languages: ['en']
        //   }
        // ]
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // defaultLayouts: {
        //   default: require.resolve(`./src/components/layout.js`),
        // },
      },
    },
  ],
}
