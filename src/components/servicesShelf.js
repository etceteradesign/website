import React from 'react';
import Link from 'gatsby-link';

import CircleIcon from './circleIcon';

import sharedStyles from '../shared/sharedStyles';
import colours from '../shared/colours';

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

    <DottedCircle style={{width: "15vh", height: "15vh", position: "absolute", top: "-10vh", right: "10vh"}} />
    <Circle style={{position: "absolute", top: "-2vh", right: "5vh"}} diameter="7" colour="#fdc523" />
    <Triangle style={{position: "absolute", top: "20vh", left: "0vh", zIndex: -1}} width="12" height="15" colour="#3a86ff" rotate="45" />
    <Circle style={{position: "absolute", top: "37vh", left: "-1vh"}} diameter="7" colour="#fdc523" />

    <Triangle style={{position: "absolute", bottom: "20vh", right: "-8vh", zIndex: -1}} width="12" height="15" colour="#3a86ff" rotate="-45" />

  </section>

var styles = {};

styles.section = {
  background: colours.backgroundGrey,
  paddingBottom: "10%",
  position: "relative"
}

export default ServicesShelf