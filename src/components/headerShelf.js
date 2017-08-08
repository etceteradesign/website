import React from 'react';
import Link from 'gatsby-link';

import bg from '../assets/header-bg-2500.jpg';

console.log(bg);

const HeaderShelf = () =>
  <section style={styles}>

  </section>

var styles = {
  height: '100vh',
  background: 'url(' + bg + ') no-repeat center center fixed',
  'WebkitBackgroundSize': 'cover',
  'MozBackgroundSize': 'cover',
  'OBackgroundSize': 'cover',
  'BackgroundSize': 'cover'
}

export default HeaderShelf;
