import React, { Component } from 'react';

class RestaurantSearchItem extends Component {
  render() {
    return (
      <div className="search-item">
        <h1>{this.props.restaurant.name}</h1>
      </div>
    );
  }
}

export default RestaurantSearchItem;
