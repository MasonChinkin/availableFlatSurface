import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class RestaurantShowPhotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: null,
      lightBox: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.setState({
      photoIndex: event.currentTarget.attributes[0].value, // [0] accesses the index attribute
      lightBox: true
    })
  }

  render() {
    let rest = this.props.restaurant;
    let URLs = rest.photoURLs;
    let photoIndex = parseInt(this.state.photoIndex)

    console.log(URLs)

    if (URLs === undefined) return null;

    let photos = URLs.map((URL, i) => {
      return <img onClick={this.handleClick} key={i} index={i} src={URL} alt="restaurant photo" />
    });

    return (
      <div id="Photos" className="restaurant-photos">
        <h2>Photos</h2>
        <ul className="show-photos">
          {photos}
        </ul>
        {this.state.lightBox && (
          <Lightbox
            mainSrc={URLs[photoIndex]}
            nextSrc={URLs[(photoIndex + 1) % URLs.length]}
            prevSrc={URLs[(photoIndex + URLs.length - 1) % URLs.length]}
            onCloseRequest={() => this.setState({ lightBox: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + URLs.length - 1) % URLs.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % URLs.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

export default RestaurantShowPhotos;
