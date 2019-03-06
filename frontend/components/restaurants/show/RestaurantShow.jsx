import React, { Component } from 'react';
import VisualSummary from './VisualSummary';
import RestaurantSearchFormContainer from './RestaurantShowFormContainer';
import RestaurantShowPhotos from './RestaurantShowPhotos';
import RestaurantReviewItem from './RestaurantShowReviewItem';

class RestaurantShow extends Component {
  sidebarDataArr(rest) {
    let details = {
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

  componentDidMount() {
    this.props.requestRestaurant(this.props.match.params.id);
  }

  render() {
    if (!this.props.restaurant) return null;

    const rest = this.props.restaurant;
    const sidebarDataArr = this.sidebarDataArr(rest);
    let tabArr = ['Overview', 'Photos', 'Menu', 'Reviews', 'Twitter'];

    const mainTabs = tabArr.map((tab, i) => {
      return <li key={i}>{tab}</li>
    })

    const sidebarDetails = sidebarDataArr.map((detail, i) => {
      if (detail[1]) {
        let label = detail[0];
        let val = detail[1][0] || 'N/A';
        let icon = detail[1][1];

        val = (label === 'Website') ? <a href={val}>{val}</a> : val
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

    const reviews = this.props.reviews.map(rev => {
      return <RestaurantReviewItem key={rev.id}
        review={rev}
        reviewer={this.props.reviewers[rev.userId]} />
    })

    return (
      <div className="restaurant-show-page">
        <header style={{ backgroundImage: `url(${this.props.restaurant.wallpaperURL})` }}>
          <button className="save-restaurant-button">
            <i className='far fa-bookmark' />Save this Restaurant
            </button>
        </header>
        <main>
          <section className="restaurant-show-main">
            <ul>
              {mainTabs}
            </ul>
            <div className="restaurant-show-main-content">
              <h1>{rest.name}</h1>
              <VisualSummary restaurant={rest} />
              <div className="restaurant-show-main-content-desc">{rest.description}</div>
              <div className="restaurant-photos">
                <h2>Photos</h2>
                <RestaurantShowPhotos restaurant={rest} />
              </div>
              <div className="restaurant-reviews">
                <h2>Reviews</h2>
                {reviews}
              </div>
            </div>
          </section>
          <section className="restaurant-show-sidebar">
            <RestaurantSearchFormContainer />
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
