import React from 'react';
import Link from 'gatsby-link';

import sharedStyles from '../shared/sharedStyles';
import colours from '../shared/colours';

import twitter from '../assets/footer-icons/twitter-icon.png';
import instagram from '../assets/footer-icons/instagram-icon.png';
import pinterest from '../assets/footer-icons/pinterest-icon.png';

import Circle from './decorations/circle';

const FooterShelf = () => 
  <section className="diagonal clockwise" style={styles.section}>

    <div style={styles.footer}>
      <ul style={styles.ul}>
        <li style={styles.li}><a style={styles.a} href="https://twitter.com/_etceteradesign"><img src={twitter} /></a></li>
        <li style={styles.li}><a style={styles.a} href="#"><img src={instagram} /></a></li>
        <li style={styles.li}><a style={styles.a} href="#"><img src={pinterest} /></a></li>
      </ul>
      <p style={styles.p}>Copyright 2017 &copy; etcetera.design</p>
    </div>

    <Circle style={{position: "absolute", top: "-15vh", left: "10vh", zIndex: 100}} diameter="15" colour="#a9e5bb" />
  </section>

var styles = {};

styles.section = {
  background: '#ffffff',
  paddingBottom: 0
}

styles.footer = {
  background: colours.backgroundGrey,
  padding: "30px 0 5px"
}

styles.ul = {
  listStyle: "none",
  textAlign: "center"
}

styles.li = {
  display: "inline-block",
  width: "25px",
  margin: "0 3%"
}

styles.a = {
  width: "100%"
}

styles.p = {
  fontFamily: "RobotoMono-Regular",
  fontSize: "18px",
  textAlign: "center"
}

export default FooterShelf;