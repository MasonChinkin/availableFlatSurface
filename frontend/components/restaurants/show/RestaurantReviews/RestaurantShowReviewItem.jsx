import React, { Component } from 'react';

class RestaurantReviewItem extends Component {

  ratingSymbol(rating) {
    const filledStar = key => <i key={key} className='fa fa-star' style={{ color: 'rgb(210, 40, 60)' }}></i>

    const emptyStar = key => <i key={key} className='fa fa-star' style={{ color: 'rgb(220, 210, 200)' }}></i>

    let dollars = []
    for (let i = 0; i < 5; i++) {
      (i < rating) ? dollars.push(filledStar(i)) : dollars.push(emptyStar(i))
    }

    return dollars;
  }

  render() {
    if (this.props.reviewer === undefined) return null;
    let { reviewer, review } = this.props
    let rating = this.ratingSymbol(this.props.review.overallRating)

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
      </div>
    );
  }
}

export default RestaurantReviewItem;
