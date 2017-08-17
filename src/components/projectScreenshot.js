import React from 'react';
import Link from 'gatsby-link';
import Radium from 'radium';

class ProjectScreenshot extends React.Component{

  static defaultProps = {
    screenshotURL: "",
    description: "Component not set up"
  }

  render(){
    return (
      <div style={styles.container}>

        <img src={this.props.screenshotURL} style={styles.img} />

        <div style={styles.cover}>
          <p style={styles.description}>{this.props.description}</p>
        </div>

      </div>
    );
  }

}

var styles = {};

styles.container = {
  position: "relative",
  marginBottom: "5%"
}

styles.img = {
  width: "100%",
  margin: 0,
  padding: 0
}

// TODO: Potentially make cover 200% tall and slide up on hover 

styles.cover = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "#fdc523",
  opacity: 0,
  WebkitTransition: "0.2s",
  transition: "0.2s",
  ":hover": {
    opacity: 0.85,
  }
}

styles.description = {
  fontFamily: "RobotoMono-Regular",
  color: "white",
  position: "absolute",
  bottom: "10px",
  left: "10px",
  padding: 0,
  margin: 0,
  fontSize: "18px",
  opacity: "1 !important"
}

export default Radium(ProjectScreenshot);
