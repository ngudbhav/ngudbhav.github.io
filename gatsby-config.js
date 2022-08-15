module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "NGUdbhav",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
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
