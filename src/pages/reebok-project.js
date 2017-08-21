import React from 'react';
import Link from 'gatsby-link';
import Radium from 'radium';
import Color from 'color';

import sharedStyles from '../shared/sharedStyles';

import bg from '../assets/projects/reebok-header-bg.jpg';

import PageHeader from '../components/page/pageHeader';
import ProjectDescription from '../components/projects/projectDescription';

class ReebokProject extends React.Component{

  render(){
    return (<div>
      <PageHeader bg={bg} />
      <ProjectDescription heading="Reebok Showcase" description="A presentation designed for an imaginary brief for Reebok on sexism in sport. The concept evolved from the idea of women ‘breaking’ and ‘tearing’ away from previous stereotypes that have causes their subordination in sports, even in the 21st century." />
    </div>)
  }

}



export default ReebokProject;