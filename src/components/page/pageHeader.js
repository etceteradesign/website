import React from 'react';
import Link from 'gatsby-link';

import logo from '../../assets/logo.png';

class PageHeader extends React.Component{

  static defaultProps = {
    bg: ""
  }

  render(){

    return (<section className="cover" style={Object.assign({},styles.section, { backgroundImage: 'url(' + this.props.bg + ')', backgroundPosition: 'center center' })}>
      <Link to="/"><img src={logo} style={styles.logo} /></Link>
    </section>);

  }

}

var styles = {};

styles.section = {
  height: '100vh',
  'WebkitBackgroundSize': 'cover',
  'MozBackgroundSize': 'cover',
  'OBackgroundSize': 'cover',
  'BackgroundSize': 'cover',
  position: 'relative',
  zIndex: 0
}

styles.logo = {
  position: 'absolute',
  top: '3vh',
  left: '3vh',
  width: '100px',
  height: '100px'
}

export default PageHeader;