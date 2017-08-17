import React from 'react';
import Link from 'gatsby-link';

import bg from '../assets/header-bg-2500.jpg';
import logo from '../assets/logo.png';

console.log(bg);

const HeaderShelf = () =>
  <section style={styles.section}>
    <img src={logo} style={styles.logo} />
    <hr style={styles.hr} />
    <h1 style={styles.h1}>Freelance design work<br />by Stephanie Slater</h1>
  </section>

var styles = {};

styles.section = {
  height: '100vh',
  background: 'linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),url(' + bg + ') no-repeat center center',
  'WebkitBackgroundSize': 'cover',
  'MozBackgroundSize': 'cover',
  'OBackgroundSize': 'cover',
  'BackgroundSize': 'cover',
  paddingTop: '20vh'
}

styles.h1 = {
  color: 'white',
  textAlign: 'center',
  fontFamily: 'Apercu-Regular',
  fontSize: '3vw',
  letterSpacing: '0.07em'
}

styles.logo = {
  display: 'block',
  width: '12vw',
  height: 'auto',
  margin: '0 auto'
}

styles.hr = {
  width: styles.logo.width,
  margin: '0 auto',
  color: 'white',
  backgroundColor: 'white',
  marginTop: '4vh',
  marginBottom: '4vh'
}

export default HeaderShelf;
