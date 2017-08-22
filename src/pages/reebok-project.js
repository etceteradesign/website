import React from 'react';
import Link from 'gatsby-link';

import ProjectPage from '../components/projects/projectPage';

import bg from '../assets/projects/reebok/reebok-header-bg.jpg';

import reebok1 from '../assets/projects/reebok/reebok1.jpg';
import reebok2 from '../assets/projects/reebok/reebok2.jpg';
import reebok3 from '../assets/projects/reebok/reebok3.jpg';
import reebok4 from '../assets/projects/reebok/reebok4.jpg';

class ReebokProject extends React.Component{

  render(){
    return (<div>
      <ProjectPage
        bg={bg}
        heading="Reebok Showcase"
        description="A presentation designed for an imaginary brief for Reebok on sexism in sport. The concept evolved from the idea of women ‘breaking’ and ‘tearing’ away from previous stereotypes that have causes their subordination in sports, even in the 21st century."
        images={[reebok1, reebok2, reebok3, reebok4]}
        prevPageName='#'
        nextPageName='/buffalo7-infographic' />
    </div>)
  }

}



export default ReebokProject;