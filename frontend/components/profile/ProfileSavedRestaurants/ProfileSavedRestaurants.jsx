import React, { Component } from 'react';
import ProfileSavedRestaurantsItem from './ProfileSavedRestaurantsItem';

class ProfileSavedRestaurants extends Component {
  render() {
    let { restaurants } = this.props;
    if (restaurants === undefined) return null;

    let restaurantItems = restaurants.map(rest => {
      return <ProfileSavedRestaurantsItem key={rest.id} restaurant={rest} />
    });

    return (
      <section className="saved-restaurants">
        {restaurantItems}
      </section>
    );
  }
}

export default ProfileSavedRestaurants;
