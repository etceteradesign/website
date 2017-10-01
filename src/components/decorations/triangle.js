import React from "react";

class Triangle extends React.Component{

  render(){

    let vh = 7;

    if(typeof window !== "undefined"){
      vh = window.innerHeight / 100;
    }

    const width = this.props.width * vh;
    const height = this.props.height * vh;

    const svgWidth = width * 1.5;
    const svgHeight = height * 1.5;

    const styles = Object.assign({}, this.props.style, {
      width: svgWidth + "px",
      height: svgHeight + "px"
    });

    const topX = svgWidth / 2;
    const topY = svgHeight * 0.25;

    const leftX = svgWidth * 0.25;
    const leftY = height;

    const rightX = svgWidth * 0.75;
    const rightY = height;

    const points = `${topX},${topY} ${leftX},${leftY} ${rightX},${rightY}`;

    const transform = `rotate(${this.props.rotate} ${svgWidth / 2} ${svgHeight / 2})`;

    return (
      <div className="hidden-xs" style={styles}>
        <svg width={svgWidth} height={svgHeight}>
          <polygon points={points} stroke={this.props.colour} strokeWidth={width / 10} fill="none" transform={transform} />
        </svg>
      </div>
      );

  }

}

export default Triangle;