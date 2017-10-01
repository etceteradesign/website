import React from 'react';
import Link from 'gatsby-link';

import ProjectPage from '../components/projects/projectPage';

import bg from '../assets/projects/federal/federal-header-bg.jpg';

import federal1 from '../assets/projects/federal/federal-1.jpg';
import federal2 from '../assets/projects/federal/federal-2.jpg';
import federal3 from '../assets/projects/federal/federal-3.jpg';

class FederalMenuProject extends React.Component{

  render(){
    return (<div>
      <ProjectPage
        bg={bg}
        heading="Federal Café Menu"
        description="The design of a cocktail menu for a café in Manchester’s Nothern Quarter. The end product included bold type and an illustrated approach, with a range of artwork being commissioned to represent the drinks on offer."
        images={[federal1, federal3, federal2]}
        prevPageName='/buffalo7-infographic'
        nextPageName='/open-market-presentation' />
    </div>)
  }

}



export default FederalMenuProject;