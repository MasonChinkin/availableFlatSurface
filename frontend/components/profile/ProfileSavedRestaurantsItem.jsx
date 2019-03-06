import React, { Component } from 'react';

class ProfileSavedRestaurantsItem extends Component {

  ratingSymbol(rating) {
    const filledStar = key => (
      <i key={key} className='fa fa-star' style={{ color: 'rgb(250, 160, 10)' }}></i>
    )

    const emptyStar = key => (
      <i key={key} className='fa fa-star' style={{ color: 'rgb(220, 210, 200)' }}></i>
    )

    let dollars = []
    for (let i = 0; i < 5; i++) {
      (i < rating) ? dollars.push(filledStar(i)) : dollars.push(emptyStar(i))
    }

    return dollars;
  }

  render() {
    if (this.props.restaurant === undefined) return null;
    let rest = this.props.restaurant;

    let rating = this.ratingSymbol(rest.rating);

    return (
      <div className="profile-saved_restaurant-item">
        <img src={rest.profilePhotoURL} alt="restaurant photo" />
        <div>
          <h2>{rest.name}</h2>
          <h3><i className='fas fa-bookmark' />Remove from saved restaurants</h3>
          <h2>{rating}</h2>
          <h3>{rest.cuisine} | {rest.neighborhood}</h3>
        </div>
      </div>
    );
  }
}

export default ProfileSavedRestaurantsItem;
