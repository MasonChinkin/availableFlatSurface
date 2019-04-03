import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Link } from 'react-router-dom';
import * as SymbolUtils from '../../../utils/symbolUtils';

class ProfileSavedRestaurantsItem extends Component {

  constructor(props) {
    super(props);
    this.handleSaveClick = this.handleSaveClick.bind(this)
  }

  handleSaveClick() {
    confirmAlert({
      message: 'Are you sure you want to unsave this restaurant?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.unSaveRestaurant(this.props.save.id)
        },
        { label: 'No', onClick: () => { } }
      ]
    })
  }

  render() {
    if (this.props.restaurant === undefined) return null;
    let rest = this.props.restaurant;

    let rating = SymbolUtils.ratingSymbol(rest.rating, 'rgb(250, 160, 10)');

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
