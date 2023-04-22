import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionExperience from '../components/section-experience';
import SectionProjects from '../components/section-projects';
import SectionPublications from '../components/section-publications';
import SectionSkills from '../components/section-skills';
import SEO from '../components/seo';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const publications = get(data, 'site.siteMetadata.publications', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const experience = get(data, 'site.siteMetadata.experience', false);
  const skills = get(data, 'site.siteMetadata.skills', false);

  return (
    <Layout>
      <SEO />
      <Header metadata={data.site.siteMetadata} image={data.file.childImageSharp.fluid} />
      {about && <SectionAbout about={about} />}
      {projects && projects.length && <SectionProjects projects={projects} />}
      {experience && experience.length && (
        <SectionExperience experience={experience} />
      )}
      {publications && publications.length && (
        <SectionPublications publications={publications} />
      )}
      {skills && skills.length && <SectionSkills skills={skills} />}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        email
        description
        about
        author
        github
        gitlab
        linkedin
        projects {
          name
          description
          link
        }
        experience {
          company
          position
          time
          location
          link
        }
        publications {
          name
          description
          link
        }
        skills {
          name
          description
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    file(extension: {eq: "png"}, name: {eq: "icon"}) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
