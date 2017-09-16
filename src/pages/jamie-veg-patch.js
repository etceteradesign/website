import React from 'react';
import Link from 'gatsby-link';

import ProjectPage from '../components/projects/projectPage';

import bg from '../assets/projects/jamie/jamie-header-bg.jpg';

import jamie1 from '../assets/projects/jamie/jamie1.jpg';
import jamie2 from '../assets/projects/jamie/jamie2.jpg';
import jamie3 from '../assets/projects/jamie/jamie3.jpg';

class JamieVegPatch extends React.Component{

  render(){
    return (<div>
      <ProjectPage
        bg={bg}
        heading="Jamie's Veg Patch"
        description="A handmade approach to the design of an imaginary new Jamie Oliver cookbook. The concept intended to encapsulate the authentic and homely nature of the chefs cooking, using real vegetables and acrylic paints to produce a unique print for the cook book and range."
        images={[jamie1, jamie2, jamie3]}
        prevPageName='/open-market-presentation'
        nextPageName='#' />
    </div>)
  }

}



export default JamieVegPatch;