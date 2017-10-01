import React from "react";

import image from "../../assets/decorations/dotted-circle.png";

class DottedCircle extends React.Component{

  render(){

    return (
      <img className="hidden-xs" src={image} style={this.props.style} />
      );
  }

}

export default DottedCircle;