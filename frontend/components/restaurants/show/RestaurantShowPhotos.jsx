import React, { Component } from 'react';

class RestaurantShowPhotos extends Component {
  render() {
    let rest = this.props.restaurant;
    let URLs = rest.photoURLs;

    if (URLs === undefined) return null;

    let photos = URLs.map((URL, i) => {
      return <img key={i} src={URL} alt="restaurant photo" />
    });

    return (
      <ul className="show-photos">
        {photos}
      </ul>
    );
  }
}

export default RestaurantShowPhotos;
