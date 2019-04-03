import React, { Component } from 'react';
import SplashRestaurantsItem from './SplashRestaurantsItem';

class SplashRestaurants extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false }
  }


  componentDidMount() {
    this.props.requestAllRestaurants()
      .then(() => this.setState({ loaded: true }))
  }

  render() {
    if (this.state.loaded === false) return null;
    let { fname, restaurants } = this.props
    let header = (fname) ? `, ${this.props.fname}` : ''

    let recs = restaurants.sort((a, b) => b.rating - a.rating).slice(0, 3)
    recs = recs.map((rec, i) => {
      return <SplashRestaurantsItem key={i} restaurant={rec} />
    })

    return (
      <section className="splash-recommendations">
        <h2>Recommended for you{header}</h2>
        <div className="splash-recommendations-list">
          {recs}
        </div>
      </section>
    );
  }
}

export default SplashRestaurants;
