import React, { Component } from 'react';
import VisualSummary from './VisualSummary';
import RestaurantShowFormContainer from './RestaurantShowForm/RestaurantShowFormContainer';
import RestaurantShowPhotos from './RestaurantShowPhotos';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import RestaurantReviewsContainer from './RestaurantReviews/RestaurantReviewsContainter';
import * as RestaurantUtils from '../../../utils/restaurantUtils';

class RestaurantShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      isReviewed: !!this.props.reviews[this.props.currentUserId]
    }

    this.handleSaveClick = this.handleSaveClick.bind(this)
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

    this.props.requestRestaurant(payload).
      then(() => this.setState({ loaded: true }))
  }

  componentWillUnmount() {
    this.props.clearSavedRestaurant()
  }

  render() {
    if (!this.props.restaurant) return null;
    let { restaurant, reviews, savedRestaurantsJoin } = this.props;
    let { loaded } = this.state

    const sidebarDetails = RestaurantUtils.sidebarDataArr(restaurant);
    let tabArr = ['Overview', 'Photos', 'Reviews'];

    const mainTabs = tabArr.map((tab, i) => {
      return <li key={i}><NavLink smooth to={`/restaurants/${restaurant.id}#${tab}`}>{tab}</NavLink></li>
    })

    let saveButton = RestaurantUtils.saveButton(loaded, savedRestaurantsJoin, this.handleSaveClick)

    return (
      <div className="restaurant-show-page">
        {loaded && <header style={{ backgroundImage: `url(${restaurant.wallpaperURL})` }}>
          {saveButton}
        </header>}
        <main>
          <section className="restaurant-show-main">
            <ul>
              {mainTabs}
            </ul>
            <div className="restaurant-show-main-content">
              <h1>{restaurant.name}</h1>
              <VisualSummary restaurant={restaurant} reviews={reviews} />
              <div className="restaurant-show-main-content-desc">{restaurant.description}</div>
              <RestaurantShowPhotos restaurant={restaurant} />
              {loaded && <RestaurantReviewsContainer />}
            </div>
          </section>
          <section className="restaurant-show-sidebar">
            <RestaurantShowFormContainer bookedTimesToday={restaurant.bookedTimesToday} restaurantId={restaurant.id} />
            <ul className="restaurant-details">
              {sidebarDetails}
            </ul>
          </section>
        </main>
      </div >
    );
  }
}

export default RestaurantShow;
