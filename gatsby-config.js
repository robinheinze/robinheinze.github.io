module.exports = {
  siteMetadata: {
    description: "Personal page of Robin Heinze",
    locale: "en",
    title: "Robin Heinze",
    formspreeEndpoint: "https://formspree.io/f/mvolqzqn",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        theme: "dark-pink",
        showThemeLogo: true,
      },
    },
  ],
};
