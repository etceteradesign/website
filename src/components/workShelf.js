import React from 'react';
import Link from 'gatsby-link';
import Radium from 'radium';

import sharedStyles from '../shared/sharedStyles';

import ProjectScreenshot from './projectScreenshot';

import reebok1 from '../assets/work/reebok1.jpg';
import buffalo1 from '../assets/work/buffalo7-1.png';
import federal1 from '../assets/work/tigersdrawer1.jpg';
import openmarket1 from '../assets/work/openmarket1.jpg';
import jamie1 from '../assets/work/jamie1.jpg';
import festivalofyou1 from '../assets/work/festivalofyou1.jpg';
import mercury1 from '../assets/work/mercury1.jpg';

import DottedCircle from './decorations/dottedCircle';
import Circle from './decorations/circle';
import Triangle from './decorations/triangle';

class WorkShelf extends React.Component {

  componentDidMount(){

    if(typeof window !== "undefined"){

      const ScrollMagic = require('ScrollMagic');
      typeof window !== 'undefined' && require('animation.gsap');
      // require('debug.addIndicators');
      const TimelineMax = require('TimelineMax');

      const controller = new ScrollMagic.Controller();

      const tween = new TimelineMax();

      tween.add([
        TweenMax.to("#featured-image", 1, {x: 100, ease: Linear.easeNone}),
        TweenMax.to("#featured-image", 1, {opacity: 1, ease: Linear.easeNone})
        ]);

      var scene = new ScrollMagic.Scene({triggerHook: 0.5, triggerElement: "#work-section", duration: 200})
              .setTween(tween)
              // .setPin("#header-pin", {pushFollowers: true})
              // .addIndicators()
              .addTo(controller);

      const tween2 = new TimelineMax();

      tween2.add([
        TweenMax.to("#featured-info", 1, {y: 100, ease: Linear.easeNone}),
        TweenMax.to("#featured-info", 1, {opacity: 1, ease: Linear.easeNone})
        ]);

      var scene = new ScrollMagic.Scene({triggerHook: 0.4, triggerElement: "#work-section", duration: 200})
              .setTween(tween2)
              // .setPin("#header-pin", {pushFollowers: true})
              // .addIndicators()
              .addTo(controller);

      const tweenWorkProjects = new TimelineMax();

      tweenWorkProjects.add([
        TweenMax.to("#featured-info", 1, {y: 100, ease: Linear.easeNone}),
        TweenMax.to("#featured-info", 1, {opacity: 1, ease: Linear.easeNone})
        ]);

      var scene = new ScrollMagic.Scene({triggerHook: 0.4, triggerElement: "#work-section", duration: 200})
              .setTween(tweenWorkProjects)
              // .setPin("#header-pin", {pushFollowers: true})
              // .addIndicators()
              .addTo(controller);
    }
            

  }

  render(){

    return (<section id="work-section" className="diagonal clockwise" style={styles.section}>
      <h2 style={Object.assign({}, sharedStyles.sectionHeading, {marginBottom: "2em"})}>Some Of My Work</h2>

      <div className="container-fluid" style={styles.container}>
        <div className="row no-gutters">
          <div className="col-sm-6">
            <div id="featured-image" style={styles.shadowImage}>
              <span style={styles.imageBefore}></span>
              <Link to="/reebok-project"><img src={reebok1} style={styles.featuredImage} /></Link>
            </div>
          </div>
          <div id="featured-info" className="col-sm-6" style={styles.rightHalf}>
            <h4 className="specialHeading">FEATURED: Reebok Showcase</h4>
            <p style={styles.p}>A presentation designed for a presentation on sexism in sport. The concept evolved from the idea of women ‘breaking’ and ‘tearing’ away from previous stereotypes that have causes their subordination in sports, even in the 21st century.</p>
            <p style={styles.p}>Click the link for more images of the project.</p>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={styles.projectsContainer}>
        <div className="row">
          <div id="project1" className="col-xs-6 col-sm-4"><Link to="/buffalo7-infographic"><ProjectScreenshot screenshotURL={buffalo1} description="Buffalo 7" /></Link></div>
          <div id="project2" className="col-xs-6 col-sm-4"><Link to="/federal-menu"><ProjectScreenshot screenshotURL={federal1} description="Menu Design: Federal Caf&eacute;" /></Link></div>
          <div className="clearfix visible-xs-block"></div>
          <div id="project3" className="col-xs-6 col-sm-4"><Link to="/open-market-presentation"><ProjectScreenshot screenshotURL={openmarket1} description="Open Market" /></Link></div>
          <div className="clearfix visible-sm-block visible-md-block"></div>
          <div id="project4" className="col-xs-6 col-sm-4"><Link to="/jamie-veg-patch"><ProjectScreenshot screenshotURL={jamie1} description="Jamie's Veg Patch" /></Link></div>
          <div className="clearfix visible-xs-block"></div>
          <div id="project5" className="col-xs-6 col-sm-4"><Link to="/festival-of-you"><ProjectScreenshot screenshotURL={festivalofyou1} description="Festival Of You" /></Link></div>
          <div id="project6" className="col-xs-6 col-sm-4"><Link to="/mercury"><ProjectScreenshot screenshotURL={mercury1} description="Mercury Logistics" /></Link></div>
        </div>
        <Circle style={{position: "absolute", top: "-15vh", right: "-3vh"}} diameter="10" colour="#3a86ff" />
        <Triangle style={{position: "absolute", top: "20vh", left: "-4vh", zIndex: -1}} width="12" height="15" colour="#fdc523" rotate="45" />
      </div>

      <div style={styles.projectsLink}><Link className="specialHeading" to="/projects/">See all projects</Link></div>

      <DottedCircle style={{width: "25vh", height: "25vh", position: "absolute", top: "-10vh", right: "5vh"}} />

    </section>);
  }

}

var styles = {};

styles.section = {
  background: "white",
  position: "relative"
}

styles.container = {
  marginTop: "7%",
  padding: 0,
  marginBottom: "7%"
}

styles.featureImage = {
  width: "100%",
  position: "relative",
  zIndex: 1
}

styles.shadowImage = {
  position: "relative",
  left: "-100px",
  opacity: 0
}

styles.imageBefore = {
  position: "absolute",
  width: "102%",
  height: "92%",
  top: "-6%",
  left: 0,
  background: "#a8e4bc",
  zIndex: -1
}

styles.rightHalf = {
  padding: "3% 6%",
  position: "relative",
  top: "-100px",
  opacity: 0
}

styles.projectsLink = {
  textAlign: "center",
  marginTop: "3%",
  fontSize: "3vh"
}

styles.p = {
  fontFamily: "Apercu-Regular",
  fontSize: "20px",
  color: "#b2b1b8",
  lineHeight: "1.7"
}

styles.projectsContainer = {
  position: "relative"

}

export default Radium(WorkShelf);

