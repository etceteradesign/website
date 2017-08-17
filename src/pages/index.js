import React from 'react';
import Link from 'gatsby-link';
import Radium from 'radium';
import Color from 'color';

import Reveal from 'react-reveal';

import HeaderShelf from '../components/headerShelf';
import ServicesShelf from '../components/servicesShelf';
import WorkShelf from '../components/workShelf';
import ContactShelf from '../components/contactShelf';
import FooterShelf from '../components/footerShelf';

class IndexPage extends React.Component{

  render(){
    return (<div>
      <HeaderShelf />
      <ServicesShelf />
      <WorkShelf />
      <ContactShelf />
      <FooterShelf />
    </div>)
  }

}

var styles = {
}

export default IndexPage