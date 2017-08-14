import React from 'react';
import Link from 'gatsby-link';

import ServiceIcon from './serviceIcon';

import app from '../assets/services-icons/app-icon.png';
import dev from '../assets/services-icons/dev-icon.png';
import logo from '../assets/services-icons/logo-icon.png';
import presentation from '../assets/services-icons/presentation-icon.png';
import print from '../assets/services-icons/print-icon.png';
import web from '../assets/services-icons/web-icon.png';

const ServicesShelf = () => 
  <section className="diagonal" style={styles.section}>
    <h2 style={styles.h2}>My Services?</h2>
    <div className="container">
      <div className="row">
        <div className="col-sm-4"><ServiceIcon iconURL={web} description="Web design" /></div>
        <div className="col-sm-4"><ServiceIcon iconURL={print} description="Print & Brochure design" /></div>
        <div className="col-sm-4"><ServiceIcon iconURL={logo} description="Logos & branding" /></div>
      </div>
      <div className="row">
        <div className="col-sm-4"><ServiceIcon iconURL={app} description="App design" /></div>
        <div className="col-sm-4"><ServiceIcon iconURL={presentation} description="Presentation design" /></div>
        <div className="col-sm-4"><ServiceIcon iconURL={dev} description="Arrangement of printing and web/app development" /></div>
      </div>
    </div>

  </section>

var styles = {};

styles.section = {
  background: '#eff0f1'
}

styles.h2 = {
  fontFamily: 'Apercu-Bold',
  textTransform: 'uppercase',
  color: '#3a86ff',
  fontSize: '3vw',
  letterSpacing: '1.7',
  textAlign: 'center'
}

export default ServicesShelf