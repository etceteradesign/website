import React from 'react';
import Link from 'gatsby-link';

class ServiceIcon extends React.Component{

  getDefaultProps(){
    return {
      iconURL: "",
      description: "Component not set up"
    }
  }

  render(){
    return (<div style={styles.container}>

    <div style={styles.circle}>
      <div style={styles.iconContent}>
        <div style={{ display: "table", width: "100%", height: "100%" }}>
          <div style={{ display: "table-cell", verticalAlign: "middle" }}>
            <img style={styles.icon} src={this.props.iconURL} />
          </div>
        </div>
      </div>
      <span style={styles.after}></span>
    </div>
    <p style={styles.description}>{this.props.description}</p>

      </div>);
  }

}

var styles = {};

styles.description = {
  fontWeight: "bold",
  fontFamily: "Apercu-Regular",
  textAlign: "center",
  fontSize: "18px"
}

styles.container = {
  padding: "10% 20%"
}

styles.icon = {
  width: "50%",
  margin: "0 auto",
  display: "block"

}

styles.circle = {
  position: "relative",
  background: "#f5f6f7",
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

export default ServiceIcon;