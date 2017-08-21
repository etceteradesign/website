import React from 'react';
import Link from 'gatsby-link';
import Radium from 'radium';

import sharedStyles from '../../shared/sharedStyles';

class ProjectDescription extends React.Component{

  static defaultProps = {
    heading: "Component not set up",
    description: "Component not set up"
  }

  render(){
    return (<section className="diagonal anticlockwise" style={styles.section}>
        <h2 style={sharedStyles.sectionHeading}>{this.props.heading}</h2>
        <p style={styles.description}>{this.props.description}</p>
      </section>);
  }

}


var styles = {};

styles.section = {
  height: '100vh',
  background: 'white'
}

styles.description = {
  color: '#b2b1b8',
  fontFamily: 'Apercu-Light',
  fontSize: '18px',
  width: '80%',
  maxWidth: '500px',
  margin: '0 auto',
  textAlign: 'center',
  letterSpacing: '0.06em',
  lineHeight: '1.7em'
}

export default ProjectDescription;