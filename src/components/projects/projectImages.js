import React from 'react';
import Link from 'gatsby-link';

class ProjectImages extends React.Component{

  static defaultProps = {
    images: []
  }

  render(){

    const images = this.props.images;
    var imagesGrid = <div></div>

    switch(images.length){
      case 0:
        break
      case 1:
        imagesGrid =
          <div style={styles.container} className="container">
            <img src={images[0]} className="img-responsive" />
          </div>
        break;

      case 2:
        imagesGrid =
          <div style={styles.container} className="container">
            <div className="row">
              <div className="col-xs-6"><img src={images[0]} className="img-responsive" /></div>
              <div className="col-xs-6"><img src={images[1]} className="img-responsive" /></div>
            </div>
          </div>
        break;

      case 3:
        imagesGrid = 
          <div style={styles.container} className="container">
            <div className="row">
              <div className="col-xs-6"><img src={images[0]} className="img-responsive" /></div>
              <div className="col-xs-6"><img src={images[1]} className="img-responsive" /></div>
            </div>
            <div className="row">
              <div className="col-xs-12"><img src={images[2]} className="img-responsive" /></div>
            </div>
          </div>
        break;

      case 4:
        imagesGrid =
          <div style={styles.container} className="container">
            <div className="row">
              <div className="col-xs-12"><img src={images[0]} className="img-responsive" /></div>
            </div>
            <div className="row">
              <div className="col-xs-6"><img src={images[1]} className="img-responsive" /></div>
              <div className="col-xs-6"><img src={images[2]} className="img-responsive" /></div>
            </div>
            <div className="row">
              <div className="col-xs-12"><img src={images[3]} className="img-responsive" /></div>
            </div>
          </div>
        break;
    }

    return imagesGrid;
  }

}

var styles = {};
styles.container = {
}

export default ProjectImages;
