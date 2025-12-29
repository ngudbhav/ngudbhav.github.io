module.exports = {
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
  },
  siteMetadata: {
    title: 'NGUdbhav || Udbhav Gambhir',
    description: 'Udbhav Gambhir, NGUdbhav, Portfolio Website Resume',
    siteUrl: "https://www.ngudbhav.com/",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data/`,
      },
    },
    "gatsby-transformer-json",
    "gatsby-plugin-transition-link",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/mstile-310x310.png",
        name: `NGUdbhav || Udbhav Gambhir`,
        short_name: `NGUdbhav`,
        start_url: `/shopper`,
        background_color: `#151515`,
        theme_color: `#ffa500`,
        display: `standalone`,
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          placeholder: "blurred",
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "src": "src",
          "components": "src/components",
          "fonts": "src/fonts",
          "hooks": "src/hooks",
          "images": "src/images",
          "lib": "src/lib",
          "styles": "src/styles",
          "utils": "src/utils",
        }
      }
    }
  ],
};
