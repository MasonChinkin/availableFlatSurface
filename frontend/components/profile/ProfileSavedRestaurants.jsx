import React, { Component } from 'react';

class ProfileSavedRestaurants extends Component {
  render() {
    if (this.props.restaurants === undefined) return null;
    return (
      <section className="saved-restaurants">

      </section>
    );
  }
}

export default ProfileSavedRestaurants;
