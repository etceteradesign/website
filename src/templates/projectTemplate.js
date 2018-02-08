import React from 'react';
import Link from 'gatsby-link';

import ProjectPage from '../components/projects/projectPage';

// import bg from '../assets/projects/buffalo7/buffalo7-header-bg.jpg';
//
// import infographic from '../assets/projects/buffalo7/buffalo7-1.jpg';

class ProjectTemplate extends React.Component{

  render(){

    const { markdownRemark } = this.props.data;
    const { frontmatter, html } = markdownRemark;

    let images = [frontmatter.images]

    return (
      <ProjectPage
        bg={frontmatter.headerBG}
        heading={frontmatter.title}
        description={frontmatter.description}
        images={images}
        prevPageName={frontmatter.prevPageName}
        nextPageName={frontmatter.nextPageName} />
    )
  }

}

export default ProjectTemplate;

export const pageQuery = graphql`
  query ProjectPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
        description
        headerBG
        images
        prevPageName
        nextPageName
      }
    }
  }
`;
