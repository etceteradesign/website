import React from 'react';
import Link from 'gatsby-link';

import sharedStyles from '../shared/sharedStyles';

import reebok1 from '../assets/work/reebok1.jpg';

const WorkShelf = () =>
  <section className="diagonal clockwise" style={styles.section}>
    <h2 style={sharedStyles.sectionHeading}>Some Of My Work</h2>

    <div className="container-fluid" style={styles.container}>
      <div className="row no-gutters">
        <div className="col-sm-6">
          <div styles={styles.shadowImage}>
            <span style={styles.imageBefore}></span>
            <img src={reebok1} style={styles.featuredImage} />
          </div>
        </div>
        <div className="col-sm-6" style={styles.rightHalf}>
          <h4 style={styles.h4}><span style={styles.h4Before}></span>FEATURED: Reebok Showcase</h4>
          <p style={styles.p}>A presentation designed for a presentation on sexism in sport. The concept evolved from the idea of women ‘breaking’ and ‘tearing’ away from previous stereotypes that have causes their subordination in sports, even in the 21st century.</p>
          <p style={styles.p}>Click the link for more images of the project.</p>
        </div>
      </div>
    </div>
  </section>

var styles = {};

styles.section = {
  background: "white"
}

styles.container = {
  marginTop: "5%",
  padding: 0
}

styles.featureImage = {
  width: "100%",
  position: "relative",
  zIndex: 1
}

styles.shadowImage = {
  position: "relative"
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
  padding: "3% 6%"
}

styles.h4 = {
  fontFamily: "RobotoMono-Regular",
  marginBottom: "9%",
  position: "relative",
  display: "inline-block"
}

styles.h4Before = {
  position: "absolute",
  width: "110%",
  height: "92%",
  top: "10px",
  left: 0,
  background: "#fdc523",
  zIndex: -1
}

styles.p = {
  fontFamily: "Apercu-Regular",
  fontSize: "20px",
  color: "#b2b1b8",
  lineHeight: "1.7"
}

export default WorkShelf;

