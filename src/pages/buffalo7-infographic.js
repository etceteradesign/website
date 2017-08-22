import React from 'react';
import Link from 'gatsby-link';

import ProjectPage from '../components/projects/projectPage';

import bg from '../assets/projects/buffalo7/buffalo7-header-bg.jpg';

import infographic from '../assets/projects/buffalo7/buffalo7-1.jpg';

class ReebokProject extends React.Component{

  render(){
    return (<div>
      <ProjectPage
        bg={bg}
        heading="Buffalo7 Infographic"
        description="An infographic designed for Buffalo 7, as featured on their website and twitter page."
        images={[infographic]}
        prevPageName='/reebok-project'
        nextPageName='#' />
    </div>)
  }

}



export default ReebokProject;