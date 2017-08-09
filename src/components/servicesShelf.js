import React from 'react';
import Link from 'gatsby-link';

const ServicesShelf = () => 
  <section className="diagonal" style={styles.section}>
    <h2 style={styles.h2}>My Services?</h2>
  </section>

var styles = {};

styles.section = {
  height: '100vh',
  background: '#eee'
}

styles.h2 = {
  fontFamily: 'Apercu-Bold',
  textTransform: 'uppercase',
  color: '#3a86ff',
  fontSize: '3vw',
  letterSpacing: '1.7',
  textAlign: 'center'
}

export default ServicesShelf