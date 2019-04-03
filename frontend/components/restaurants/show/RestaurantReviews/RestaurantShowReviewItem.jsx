import React, { Component } from 'react';
import * as SymbolUtils from '../../../../utils/symbolUtils'

class RestaurantReviewItem extends Component {
  render() {
    if (this.props.reviewer === undefined) return null;
    let { reviewer, review } = this.props
    let rating = SymbolUtils.ratingSymbol(this.props.review.overallRating, 'rgb(210, 40, 60)')
    let yourReview = <h2 className="user-review">Your review</h2>

    return (
      <div className="review-item">
        <div className="review-item-left">
          <div className="user-letter-circle">
            {reviewer.name.split('')[0]}
          </div>
          <h2>{reviewer.name.split(' ')[0]}</h2>
          <h3>San Francisco</h3>
        </div>
        <div className="review-item-right">
          <div className="review-item-right-top">
            {rating}
          </div>
          <div className="review-item-right-middle">
            <h2>Overall</h2>
            <h3>{review.overallRating}</h3>
            <h2>Food</h2>
            <h3>{review.foodRating}</h3>
            <h2>Service</h2>
            <h3>{review.serviceRating}</h3>
            <h2>Ambience</h2>
            <h3>{review.ambienceRating}</h3>
          </div>
          <div className="review-item-body">
            <p>{review.body}</p>
          </div>
        </div>

        {this.props.belongsToUser && yourReview}
      </div>
    );
  }
}

export default RestaurantReviewItem;
