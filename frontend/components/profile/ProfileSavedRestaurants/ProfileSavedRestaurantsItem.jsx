import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Link } from 'react-router-dom';

class ProfileSavedRestaurantsItem extends Component {

  constructor(props) {
    super(props);
    this.handleSaveClick = this.handleSaveClick.bind(this)
  }

  handleSaveClick() {
    confirmAlert({
      message: 'Are you sure to unsave this restaurant?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.unSaveRestaurant(this.props.save.id)
        },
        {
          label: 'No',
          onClick: () => { }
        }
      ]
    })
  }

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
        <Link to={`/restaurants/${rest.id}`}><img src={rest.profilePhotoURL} alt="restaurant photo" /></Link>
        <div>
          <Link to={`/restaurants/${rest.id}`}><h2>{rest.name}</h2></Link>
          <h3 className="profile-unsave" onClick={this.handleSaveClick}><i className='fas fa-bookmark' />Remove from saved restaurants</h3>
          <h2>{rating}</h2>
          <h3>{rest.cuisine} | {rest.neighborhood}</h3>
        </div>
      </div>
    );
  }
}

export default ProfileSavedRestaurantsItem;
