import React from 'react';
import Link from 'gatsby-link';

import bg from '../assets/header-bg-2500.jpg';
import logo from '../assets/logo.png';

console.log(bg);

const HeaderShelf = () =>
  <section style={styles.section}>
    <div style={{ display: "table", width: "100%", height: "100%" }}>
      <div style={{ display: "table-cell", verticalAlign: "middle" }}>
        <div>
          <img src={logo} style={styles.logo} />
          <hr style={styles.hr} />
          <h1 style={styles.h1}>Freelance design work<br />by Stephanie Slater</h1>
        </div>
      </div>
    </div>
  </section>

var styles = {};

styles.section = {
  height: '100vh',
  background: 'linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),url(' + bg + ') no-repeat center center',
  'WebkitBackgroundSize': 'cover',
  'MozBackgroundSize': 'cover',
  'OBackgroundSize': 'cover',
  'BackgroundSize': 'cover'
}

styles.h1 = {
  color: 'white',
  textAlign: 'center',
  fontFamily: 'Apercu-Regular',
  fontSize: '4.5vh',
  letterSpacing: '0.05em'
}

styles.logo = {
  display: 'block',
  width: '24vh',
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
