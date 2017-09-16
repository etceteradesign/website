import React from 'react';
import Link from 'gatsby-link';

import ProjectPage from '../components/projects/projectPage';

import bg from '../assets/projects/openmarket/openmarket-header-bg.jpg';

import openmarket1 from '../assets/projects/openmarket/openmarket1.jpg';
import openmarket2 from '../assets/projects/openmarket/openmarket2.jpg';
import openmarket3 from '../assets/projects/openmarket/openmarket3.jpg';
import openmarket4 from '../assets/projects/openmarket/openmarket4.jpg';

class OpenMarketPresentation extends React.Component{

  render(){
    return (<div>
      <ProjectPage
        bg={bg}
        heading="OpenMarket Presentation"
        description="A powerpoint template designed while working at Buffalo 7. Using OpenMarket’s brand guidelines, the result was a diverse and functional template, including data visualisation, custom graphics & illustration and animation techniques. "
        images={[openmarket1, openmarket2, openmarket3, openmarket4]}
        prevPageName='/federal-menu'
        nextPageName='#' />
    </div>)
  }

}



export default OpenMarketPresentation;