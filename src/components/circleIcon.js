import React from 'react';
import Link from 'gatsby-link';
import Radium from 'radium';

class CircleIcon extends React.Component{

  static defaultProps = {
      iconURL: "",
      description: "Component not set up",
      circleColour: "#f5f6f7",
      textColor: "inherit"
  }

  render(){
    return (<div>

    <div style={styles.container}>

      <div style={Object.assign({}, styles.circle, {background: this.props.circleColour})}>
        <div style={styles.iconContent}>
          <div style={{ display: "table", width: "100%", height: "100%" }}>
            <div style={{ display: "table-cell", verticalAlign: "middle" }}>
              <img style={styles.icon} src={this.props.iconURL} />
            </div>
          </div>
        </div>
        <span style={styles.after}></span>
      </div>

    </div>

    <p style={Object.assign({}, styles.description, {color: this.props.textColor})}>{this.props.description}</p>

      </div>);
  }

}

var styles = {};

styles.description = {
  fontWeight: "bold",
  fontFamily: "Apercu-Light",
  textAlign: "center",
  fontSize: "20px",
  "@media only screen and (max-width : 480px)": {
    fontSize: "15px"
  }
}

styles.container = {
  padding: "10% 20% 5%"
}

styles.icon = {
  width: "50%",
  margin: "0 auto",
  display: "block"

}

styles.circle = {
  position: "relative",
  borderRadius: "50%",
  marginBottom: "10%"
}

styles.iconContent = {
  position: "absolute",
  width: "100%",
  height: "100%",
}

styles.after = {
  content: "",
  display: "block",
  paddingBottom: "100%"
}

export default Radium(CircleIcon);