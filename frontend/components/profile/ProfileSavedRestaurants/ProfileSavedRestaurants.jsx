import React, { Component } from 'react';
import ProfileSavedRestaurantsItem from './ProfileSavedRestaurantsItem';

class ProfileSavedRestaurants extends Component {
  render() {
    let { restaurants } = this.props;
    if (restaurants === undefined || this.props.savedRestaurantsJoin === null) return null;
    let savedRestaurantsIds = Object.values(this.props.savedRestaurantsJoin)
    let restaurantItems = savedRestaurantsIds.map(save => {
      let rest = restaurants[save.restaurantId]
      return <ProfileSavedRestaurantsItem unSaveRestaurant={this.props.unSaveRestaurant} key={save.id} save={save} restaurant={rest} />
    });

    return (
      <section className="saved-restaurants">
        {restaurantItems}
      </section>
    );
  }
}

export default ProfileSavedRestaurants;
