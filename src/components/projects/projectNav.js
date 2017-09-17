import React from 'react';
import Link from 'gatsby-link';
import Radium from 'radium';

import sharedStyles from '../../shared/sharedStyles';

import prevIcon from '../../assets/projects/project-prev-icon.png';
import nextIcon from '../../assets/projects/project-next-icon.png';
import midIcon from '../../assets/projects/project-mid-icon.png';

console.log(prevIcon);

class ProjectNav extends React.Component{

  static defaultProps = {
    nextPageName: '#',
    prevPageName: '#'
  }

  render(){

    return (
      <div style={styles.projectNavContainer}>
        <ul style={styles.ul}>
          <li style={styles.li}><Link style={styles.prevLink} to={this.props.prevPageName}>Prev</Link></li>
          <li style={styles.li}><Link style={styles.homeLink} to="/">Home</Link></li>
          <li style={styles.li}><Link style={styles.nextLink} to={this.props.nextPageName}>Next</Link></li>
        </ul>
      </div>
      );

  }

}

var styles = {};

styles.projectNavContainer = {
  width: '100%',
  paddingBottom: '100px'
}

styles.ul = {
  listStyle: 'none',
  textAlign: 'center',
  margin: "0 auto",
  width: "100%",
  maxWidth: "500px",
}

styles.li = {
  display: 'inline-block',
  width: '25%',
  margin: '0 1%'
}

styles.a = {
  display: 'inline-block',
  width: '100%',
  height: '50px',
  paddingTop: '15px',
  fontFamily: 'Apercu-Light',
  textTransform: 'uppercase',
  textDecoration: 'none',
  color: '#b2b1b8'
}

styles.prevLink = Object.assign({}, styles.a, {
  background: 'transparent url(' + prevIcon + ') no-repeat center left',
  backgroundSize: '40px 40px',
  textAlign: 'right'
});

styles.homeLink = Object.assign({}, styles.a, {
  textAlign: 'center',
  textIndent: '-9999px',
  background: 'transparent url(' + midIcon + ') no-repeat center center',
  backgroundSize: '25px 25px',
});

styles.nextLink = Object.assign({}, styles.a, {
  textAlign: 'left',
  background: 'transparent url(' + nextIcon + ') no-repeat center right',
  backgroundSize: '40px 40px',
});

export default ProjectNav;