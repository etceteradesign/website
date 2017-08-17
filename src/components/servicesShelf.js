import React from 'react';
import Link from 'gatsby-link';

import CircleIcon from './circleIcon';

import sharedStyles from '../shared/sharedStyles';

import app from '../assets/services-icons/app-icon.png';
import dev from '../assets/services-icons/dev-icon.png';
import logo from '../assets/services-icons/logo-icon.png';
import presentation from '../assets/services-icons/presentation-icon.png';
import print from '../assets/services-icons/print-icon.png';
import web from '../assets/services-icons/web-icon.png';

const circleColour = "#f5f6f7";

const ServicesShelf = () => 
  <section className="diagonal anticlockwise" style={styles.section}>
    <h2 style={sharedStyles.sectionHeading}>My Services?</h2>
    <div className="container">
      <div className="row">
        <div className="col-xs-6 col-sm-4"><CircleIcon iconURL={web} description="Web design" /></div>
        <div className="col-xs-6 col-sm-4"><CircleIcon iconURL={print} description="Print & Brochure design" /></div>
        <div className="clearfix visible-xs-block"></div>
        <div className="col-xs-6 col-sm-4"><CircleIcon iconURL={logo} description="Logos & branding" /></div>
        <div className="clearfix visible-sm-block visible-md-block"></div>
        <div className="col-xs-6 col-sm-4"><CircleIcon iconURL={app} description="App design" /></div>
        <div className="clearfix visible-xs-block"></div>
        <div className="col-xs-6 col-sm-4"><CircleIcon iconURL={presentation} description="Presentation design" /></div>
        <div className="col-xs-6 col-sm-4"><CircleIcon iconURL={dev} description="Arrangement of printing and web/app development" /></div>
      </div>
    </div>

  </section>

var styles = {};

styles.section = {
  background: '#eff0f1',
  paddingBottom: "100px"
}

export default ServicesShelf