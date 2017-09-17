import React from 'react';
import Link from 'gatsby-link';
import Radium from 'radium';

import bg from '../assets/header-bg-2500.jpg';
import logo from '../assets/logo.png';

const HeaderShelf = () =>
  <section id="header-section" style={styles.sectionLong}>
    <section id="header-pin" className="cover" style={styles.section}>
      <div style={{ display: "table", width: "100%", height: "100%" }}>
        <div style={{ display: "table-cell", verticalAlign: "middle" }}>
          <div id="logo-strapline">
            <img id="logo" src={logo} style={styles.logo} />
            <hr style={styles.hr} />
            <h1 id="strapline" style={styles.h1}>Freelance design<br />by Stephanie Slater</h1>
          </div>
        </div>
      </div>
    </section>
  </section>

var styles = {};

styles.section = {
  height: '100vh',
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),url(' + bg + ')',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  'WebkitBackgroundSize': 'cover',
  'MozBackgroundSize': 'cover',
  'OBackgroundSize': 'cover',
  'BackgroundSize': 'cover'
}

styles.sectionLong = {
  height: '120vh'
}

styles.h1 = {
  color: 'white',
  textAlign: 'center',
  fontFamily: 'Apercu-Regular',
  fontSize: '4.5vh',
  letterSpacing: '0.05em',
  lineHeight: '1.3em',
  "@media only screen and (max-width : 480px)": {
    letterSpacing: 0
  }
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

export default Radium(HeaderShelf);
