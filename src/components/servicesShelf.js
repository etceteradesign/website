import React from 'react';
import Link from 'gatsby-link';

import CircleIcon from './circleIcon';

import sharedStyles from '../shared/sharedStyles';
import colours from '../shared/colours';

import SectionHeading from "./sectionHeading";

import app from '../assets/services-icons/app-icon.png';
import dev from '../assets/services-icons/dev-icon.png';
import logo from '../assets/services-icons/logo-icon.png';
import presentation from '../assets/services-icons/presentation-icon.png';
import print from '../assets/services-icons/print-icon.png';
import web from '../assets/services-icons/web-icon.png';

import DottedCircle from './decorations/dottedCircle';
import Circle from './decorations/circle';
import Triangle from './decorations/triangle';

const circleColour = "#f5f6f7";

const ServicesShelf = () => 
  <section className="diagonal anticlockwise" style={styles.section}>
    <SectionHeading title="My Services?" smallText="What are" />
    <div className="container">
      <div className="row">
        <div style={styles.col} className="col-xs-6 col-sm-4"><CircleIcon iconURL={web} description="Web design" /></div>
        <div style={styles.col} className="col-xs-6 col-sm-4"><CircleIcon iconURL={print} description="Print & Brochure design" /></div>
        <div style={styles.col} className="clearfix visible-xs-block"></div>
        <div style={styles.col} className="col-xs-6 col-sm-4"><CircleIcon iconURL={logo} description="Logos & branding" /></div>
        <div style={styles.col} className="clearfix visible-sm-block visible-md-block"></div>
        <div style={styles.col} className="col-xs-6 col-sm-4"><CircleIcon iconURL={app} description="App design" /></div>
        <div style={styles.col} className="clearfix visible-xs-block"></div>
        <div style={styles.col} className="col-xs-6 col-sm-4"><CircleIcon iconURL={presentation} description="Presentation design" /></div>
        <div style={styles.col} className="col-xs-6 col-sm-4"><CircleIcon iconURL={dev} description="Arrangement of printing and web/app development" /></div>
      </div>
    </div>

    <DottedCircle style={{width: "20vh", height: "20vh", position: "absolute", top: "-10vh", right: "10vh"}} />
    <Circle style={{position: "absolute", top: "3vh", right: "5vh"}} diameter="10" colour="#fdc523" />
    <Triangle style={{position: "absolute", top: "20vh", left: "0vh", zIndex: -1}} width="15" height="18" colour="#3a86ff" rotate="45" />
    <Circle style={{position: "absolute", top: "45vh", left: "-4vh"}} diameter="9" colour="#fdc523" />


  </section>

var styles = {};

styles.section = {
  background: colours.backgroundGrey,
  paddingBottom: "10%",
  position: "relative"
}

styles.col = {
  paddingLeft: 0,
  paddingRight: 0
}

export default ServicesShelf