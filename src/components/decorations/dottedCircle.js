import React from "react";

import image from "../../assets/decorations/dotted-circle.png";

class DottedCircle extends React.Component{

  render(){

    return (
      <img src={image} style={this.props.style} />
      );
  }

}

export default DottedCircle;