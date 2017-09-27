import React from 'react';
import Link from 'gatsby-link';
import Radium from 'radium';
import Color from 'color';

import Reveal from 'react-reveal';

// import * as ScrollMagic from 'ScrollMagic';
// import gsap from "gsap";
// import {TweenMax} from "gsap";
// require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
const ScrollMagic = require('ScrollMagic');
require('animation.gsap');
require('debug.addIndicators');
const TimelineMax = require('TimelineMax');

import HeaderShelf from '../components/headerShelf';
import ServicesShelf from '../components/servicesShelf';
import WorkShelf from '../components/workShelf';
import ContactShelf from '../components/contactShelf';
import FooterShelf from '../components/footerShelf';

class IndexPage extends React.Component{

  componentDidMount(){
    const controller = new ScrollMagic.Controller();

    // var tween = TweenMax.to("#logo", 1, {rotation: 360, ease: Linear.easeNone});

    var tween = new TimelineMax();
    tween.add([
      TweenMax.to("#logo-strapline", 1, {y: -100, ease: Linear.easeNone}),
      TweenMax.to("#logo-strapline", 1, {opacity: 0, ease: Linear.easeNone})
      ]);

    // build scene
    var scene = new ScrollMagic.Scene({triggerHook: 0, triggerElement: "#header-section", duration: document.documentElement.clientHeight / 2})
            .setTween(tween)
            .setPin("#header-pin", {pushFollowers: true})
            // .addIndicators()
            .addTo(controller);

  }

  render(){
    return (<div id="pin-container">
      <HeaderShelf />
      <WorkShelf />
      <ServicesShelf />
      <ContactShelf />
      <FooterShelf />
    </div>)
  }

}

var styles = {
}

export default IndexPage