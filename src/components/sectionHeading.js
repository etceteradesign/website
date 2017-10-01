import React from "react";
import colours from '../shared/colours';

class SectionHeading extends React.Component {

  render(){

    return (
      <div style={styles.container}>
      <h2 style={Object.assign({}, styles.sectionHeading, this.props.style)}>{this.props.title}<span style={styles.span}>{this.props.smallText}</span></h2>
      </div>
      );

  }

}

export default SectionHeading;

let styles = {};

styles.container = {
  textAlign: "center"
}

styles.sectionHeading = {
  fontFamily: 'Apercu-Bold',
  textTransform: 'uppercase',
  color: colours.blue,
  fontSize: '4.5vh',
  letterSpacing: '0.06em',
  textAlign: 'center',
  position: "relative",
  display: "inline-block",
  margin: "0 auto",
  marginBottom: "2em"
}

styles.span = {
  position: "absolute",
  top: "-3.5vh",
  left: "2px",
  color: "black",
  fontFamily: "RobotoMono-Regular",
  textTransform: "initial",
  fontSize: "2.5vh"
}