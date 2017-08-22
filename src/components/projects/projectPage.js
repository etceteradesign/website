import React from 'react';
import Link from 'gatsby-link';

import PageHeader from '../page/pageHeader';
import ProjectDescription from '../projects/projectDescription';
import ProjectImages from '../projects/projectImages';
import ProjectNav from '../projects/projectNav';
import FooterShelf from '../footerShelf';

class ReebokProject extends React.Component{

  static defaultProps = {
    bg: "",
    heading: "Default Heading",
    description: "Default description",
    images: [],
    prevPageName: "#",
    nextPageName: "#" 
  }

  render(){
    return (<div>
      <PageHeader bg={this.props.bg} />
      <ProjectDescription heading={this.props.heading} description={this.props.description} />
      <ProjectImages images={this.props.images} />
      <ProjectNav prevPageName={this.props.prevPageName} nextPageName={this.props.nextPageName} />
      <FooterShelf />
    </div>)
  }

}



export default ReebokProject;