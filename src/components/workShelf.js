import React from 'react';
import Link from 'gatsby-link';

import sharedStyles from '../shared/sharedStyles';

import reebok1 from '../assets/work/reebok1.jpg';

const WorkShelf = () =>
  <section className="diagonal clockwise" style={styles.section}>
    <h2 style={sharedStyles.sectionHeading}>Some Of My Work</h2>

    <div className="containerFluid">
      <div className="row">
        <div className="col-sm-6"><img src={reebok1} style={styles.featuredImage} /></div>
        <div className="col-sm-6" style={styles.rightHalf}>
          <h4 style={styles.h4}>Featured: Reebok Showcase</h4>
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

styles.featureImage = {
  width: "100%"
}

styles.rightHalf = {
  padding: "3%"
}

styles.h4 = {

}

styles.p = {
  fontFamily: "Apercu-Regular"
}

export default WorkShelf;

