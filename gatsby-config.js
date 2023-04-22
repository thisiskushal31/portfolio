module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://kushalgupta.netlify.app/`,
    // Your Name
    name: 'Kushal Gupta',
    // Main Site Title
    title: `Kushal Gupta | Software Engineer`,

    email: `guptakushal070@gmail.com`,
    // Description that goes under your name in main bio
    description: `A Full Stack Developer and DevOps Enthusiast`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/thisiskushal31`,

    gitlab: `https://git.rwth-aachen.de/abdallah.atouani`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/thisiskushalgupta/`,
    // Optional: Twitter account URL
    twitter: `https://twitter.com/thisis_kushal`,
    // Optional: External Links
    external: `https://linktr.ee/thisiskushalgupta`,
    // Content of the About Me section
    about: `Hey 👋🏼, my name is Kushal and I´m a passionate software engineer. I am currently working as a DevOps Engineer at Purplle in India. Besides that, I seek to explore a variety of cutting-edge cloud and microservices technologies and methodologies in the software development industry.`,
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        company: 'Purplle.com',
        position: 'DevOps Engineer',
        time: 'Jan 2023 - Present',
        location: 'India',
        link: 'https://www.purplle.com/',
      },
      // {
      //   company: 'Trifacta',
      //   position: 'Software Engineer Intern',
      //   time: 'Oct 2019 - Jan 2020',
      //   location: 'Berlin, Germany',
      //   link: 'https://www.trifacta.com/',
      // },
      // {
      //   company: 'VEDA GmbH',
      //   position: 'Working Student - Software Engineer',
      //   time: 'Apr 2018 - Apr 2019',
      //   location: 'Aachen, Germany',
      //   link: 'https://www.veda.net/',
      // },
    ],
    publications: [
      {
        name: 'Artifact and reference models for generative machine learning frameworks and build systems',
        description: 'Proceedings of the 20th ACM SIGPLAN International Conference on Generative Programming: Concepts and Experiences · 1. Okt. 2021',
        link: 'https://doi.org/10.1145/3486609.3487199'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Abdallah Atouani`,
        short_name: `abdallah.at`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`, // This color appears on mobile
        display: `standalone`,
        icon: `src/images/logo_small.png`,
      },
    },
  ],
};
