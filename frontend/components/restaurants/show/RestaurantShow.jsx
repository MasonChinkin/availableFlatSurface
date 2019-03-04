import React, { Component } from 'react';
import VisualSummary from './VisualSummary';
import RestaurantSearchFormContainer from './RestaurantShowFormContainer';

class RestaurantShow extends Component {

  sidebarDataArr(rest) {
    let pojo = {
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

    return Object.entries(pojo);
  }

  componentDidMount() {
    this.props.requestRestaurant(this.props.match.params.id);
  }

  render() {
    if (!this.props.restaurant) return (<div>loading...</div>)

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

    return (
      <div className="restaurant-show-page">
        <header>
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
                <h2>(WIP) Photos</h2>
                <div className="restaurant-photos-container">Photos</div>
              </div>
              <div className="restaurant-reviews">
                <h2>(WIP) Reviews</h2>
                <div className="restaurant-reviews-container">Reviews</div>
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
