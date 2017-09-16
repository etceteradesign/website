import React from 'react';
import Link from 'gatsby-link';

import ProjectPage from '../components/projects/projectPage';

import bg from '../assets/projects/festivalofyou/festivalofyou-header-bg.jpg';

import festivalofyou1 from '../assets/projects/festivalofyou/festivalofyou1.jpg';
import festivalofyou2 from '../assets/projects/festivalofyou/festivalofyou2.jpg';
import festivalofyou3 from '../assets/projects/festivalofyou/festivalofyou3.jpg';
import festivalofyou4 from '../assets/projects/festivalofyou/festivalofyou4.png';

class FestivalOfYou extends React.Component{

  render(){
    return (<div>
      <ProjectPage
        bg={bg}
        heading="Festival Of You"
        description="Urban Outfitters have been continually criticised for their negative influence on the self esteem and confidence in young people, especially young girls. 'Festival of You' is a concept designed to alter the brands damaged reputation. The event offers customers a 2 day celebration of themselves and a chance to improve their confidence through a series of inspirational talks and workshops."
        images={[festivalofyou1, festivalofyou2, festivalofyou3, festivalofyou4]}
        prevPageName='/jamie-veg-patch'
        nextPageName='#' />
    </div>)
  }

}



export default FestivalOfYou;