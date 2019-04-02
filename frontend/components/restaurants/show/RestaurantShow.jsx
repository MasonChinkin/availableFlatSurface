import React, { Component } from 'react';
import VisualSummary from './VisualSummary';
import RestaurantShowFormContainer from './RestaurantShowForm/RestaurantShowFormContainer';
import RestaurantShowPhotos from './RestaurantShowPhotos';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import RestaurantReviewsContainer from './RestaurantReviews/RestaurantReviewsContainter';

class RestaurantShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // does the user have a review
      isReviewed: !!this.props.reviews[this.props.currentUserId]
    }

    this.handleSaveClick = this.handleSaveClick.bind(this)
  }

  sidebarDataArr(rest) {
    let details = {
      'Address': [rest.address, 'fas fa-map-marker-alt'],
      'Cross Street': [rest.crossStreet, 'fas fa-car-alt'],
      'Neighborhood': [rest.neighborhood, 'far fa-building'],
      'Hours': [rest.hours, 'far fa-clock'],
      'Cuisine': [rest.cuisine, 'fas fa-utensils'],
      'Dress Code': [rest.dressCode, 'fas fa-tshirt'],
      'Parking Details': [rest.parkingDetails, 'fas fa-parking'],
      'Payment Options': [rest.paymentOptions, 'fas fa-credit-card'],
      'Phone Number': [rest.phone, 'fas fa-phone'],
      'Website': [rest.website, 'far fa-share-square'],
    }

    return Object.entries(details);
  }

  handleSaveClick() {
    if (this.props.currentUserId === null) return this.props.history.push(`${this.props.history.location.pathname}/signin`);

    let savedRestaurant = {
      user_id: this.props.currentUserId,
      restaurant_id: this.props.restaurant.id
    }

    let alreadySavedRestaurant = Object.values(this.props.savedRestaurantsJoin)

    if (Object.values(alreadySavedRestaurant).length > 0) {
      this.props.unSaveRestaurant(alreadySavedRestaurant[0].id)
    } else {
      this.props.createSavedRestaurant(savedRestaurant)
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)

    let payload = {
      user_id: this.props.currentUserId,
      restaurant_id: this.props.match.params.id
    }

    this.props.requestRestaurant(payload)
  }

  componentWillUnmount() {
    this.props.clearSavedRestaurant()
  }

  render() {
    if (!this.props.restaurant) return null;

    let { restaurant, reviews, savedRestaurantsJoin } = this.props;

    const sidebarDataArr = this.sidebarDataArr(restaurant);
    let tabArr = ['Overview', 'Photos', 'Reviews'];

    const mainTabs = tabArr.map((tab, i) => {
      return <li key={i}><NavLink smooth to={`/restaurants/${restaurant.id}#${tab}`}>{tab}</NavLink></li>
    })

    const sidebarDetails = sidebarDataArr.map((detail, i) => {
      if (detail[1]) {
        let label = detail[0];
        let val = detail[1][0] || 'N/A';
        let icon = detail[1][1];

        val = (label === 'Website' && val !== 'N/A') ? <a href={val}>{val}</a> : val

        return (
          <li key={i}>
            <i className={icon} />
            <div>
              <label>{label}</label>
              <p>{val}</p>
            </div>
          </li>
        )
      }
    })

    // without &&, Object.values return error on first render, since savedrestaurantjoin initially null
    let saveButton = (savedRestaurantsJoin && Object.values(savedRestaurantsJoin).length > 0) ?
      <button className="save-restaurant-button saved-restaurant-button" onClick={this.handleSaveClick}>
        <i id="Overview" className='fa fa-bookmark' />Restaurant Saved!</button> :
      <button className="save-restaurant-button" onClick={this.handleSaveClick}>
        <i id="Overview" className='far fa-bookmark' />Save this Restaurant</button>

    return (
      <div className="restaurant-show-page">
        <header style={{ backgroundImage: `url(${restaurant.wallpaperURL})` }}>
          {savedRestaurantsJoin && saveButton}
        </header>
        <main>
          <section className="restaurant-show-main">
            <ul>
              {mainTabs}
            </ul>
            <div className="restaurant-show-main-content">
              <h1>{restaurant.name}</h1>
              <VisualSummary restaurant={restaurant} reviews={reviews} />
              <div className="restaurant-show-main-content-desc">{restaurant.description}</div>
              <div id="Photos" className="restaurant-photos">
                <h2>Photos</h2>
                <RestaurantShowPhotos restaurant={restaurant} />
              </div>
              <RestaurantReviewsContainer />
            </div>
          </section>
          <section className="restaurant-show-sidebar">
            <RestaurantShowFormContainer bookedTimesToday={restaurant.bookedTimesToday} restaurantId={restaurant.id} />
            <ul className="restaurant-details">
              {sidebarDetails}
            </ul>
          </section>
        </main>
      </div>
    );
  }
}

export default RestaurantShow;
