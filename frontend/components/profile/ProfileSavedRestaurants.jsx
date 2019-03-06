import React, { Component } from 'react';
import ProfileSavedRestaurantsItem from './ProfileSavedRestaurantsItem';

class ProfileSavedRestaurants extends Component {
  render() {
    let rests = Object.values(this.props.restaurants);
    if (rests === undefined) return null;

    let savedRestaurants = rests.map(rest => {
      return <ProfileSavedRestaurantsItem key={rest.id} restaurant={rest} />
    });

    return (
      <section className="saved-restaurants">
        {savedRestaurants}
      </section>
    );
  }
}

export default ProfileSavedRestaurants;
