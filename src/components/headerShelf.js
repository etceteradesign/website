import React from 'react';
import Link from 'gatsby-link';

import bg from '../assets/header-bg-2500.jpg';
import logo from '../assets/logo.png';

console.log(bg);

const HeaderShelf = () =>
  <section style={styles.section}>
    <img src={logo} style={styles.logo} />
    <h1 style={styles.h1}>Freelance design work<br />by Stephanie Slater</h1>
  </section>

var styles = {};

styles.section = {
  height: '100vh',
  background: 'url(' + bg + ') no-repeat center center',
  'WebkitBackgroundSize': 'cover',
  'MozBackgroundSize': 'cover',
  'OBackgroundSize': 'cover',
  'BackgroundSize': 'cover'
}

styles.h1 = {
  color: 'white',
  textAlign: 'center'
}

styles.logo = {
  display: 'block',
  width: '20%',
  height: 'auto',
  margin: '0 auto'
}

export default HeaderShelf;
