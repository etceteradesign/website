import React from 'react';
import Link from 'gatsby-link';

import ProjectPage from '../components/projects/projectPage';

import bg from '../assets/projects/mercury/mercury-header-bg.jpg';

import mercury1 from '../assets/projects/mercury/mercury1.jpg';
import mercury2 from '../assets/projects/mercury/mercury2.jpg';
import mercury3 from '../assets/projects/mercury/mercury3.jpg';

class Mercury extends React.Component{

  render(){
    return (<div>
      <ProjectPage
        bg={bg}
        heading="Mercury Brochure"
        description="An annual report for Mercury Logistics. The approach to the text heavy document was founded on key words from the report itself; 'honest', 'open' and 'connected'. The curved graphic elements used in this context reflect these core values, while also adding movement and fluidity to the pages."
        images={[mercury1, mercury2, mercury3]}
        prevPageName='/festival-of-you'
        nextPageName='#' />
    </div>)
  }

}



export default Mercury;