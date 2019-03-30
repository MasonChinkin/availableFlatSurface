import React, { Component } from 'react';
import VisualSummary from './VisualSummary';
import RestaurantShowFormContainer from './RestaurantShowForm/RestaurantShowFormContainer';
import RestaurantShowPhotos from './RestaurantShowPhotos';
import RestaurantReviewItem from './RestaurantShowReviewItem';
import { NavHashLink as NavLink } from 'react-router-hash-link';

class RestaurantShow extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this)
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

  handleSave() {
    let savedRestaurant = {
      user_id: this.props.currentUser.id,
      restaurant_id: this.props.restaurant.id
    }

    console.log(savedRestaurant)

    this.props.createSavedRestaurant(savedRestaurant)
  }

  componentDidMount() {
    this.props.requestRestaurant(this.props.match.params.id);
  }

  render() {
    if (!this.props.restaurant) return null;
    let { restaurant, users, reviews } = this.props;

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

    const reviewList = reviews.map(rev => {
      return <RestaurantReviewItem key={rev.id}
        review={rev}
        reviewer={users[rev.userId]} />
    })

    return (
      <div className="restaurant-show-page">
        <header style={{ backgroundImage: `url(${restaurant.wallpaperURL})` }}>
          <button className="save-restaurant-button" onClick={this.handleSave}>
            <i id="Overview" className='far fa-bookmark' />Save this Restaurant
            </button>
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
              <div id="Reviews" className="restaurant-reviews">
                <h2>Reviews</h2>
                {reviewList}
              </div>
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
