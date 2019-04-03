import React, { Component } from 'react';
import SplashRestaurantsItem from './SplashRestaurantsItem';
import { withRouter } from 'react-router-dom'

class SplashRestaurants extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false }
  }

  componentDidMount() {
    // quick fix for stopping rerender on signing/signout modal
    if (this.props.restaurants.length !== 33) {
      this.props.requestAllRestaurants()
        .then(() => this.setState({ loaded: true }))
    } else {
      this.setState({ loaded: true })
    }
  }

  render() {
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
          {this.state.loaded && recs}
        </div>
      </section>
    );
  }
}

export default withRouter(SplashRestaurants);
