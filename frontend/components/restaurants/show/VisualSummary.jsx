import React, { Component } from 'react';

class VisualSummary extends Component {

  ratingSymbol(rating) {
    const filledStar = key => (
      <i key={key} className='fa fa-star' style={{ color: 'rgb(210, 40, 60)' }}></i>
    )

    const emptyStar = key => (
      <i key={key} className='fa fa-star' style={{ color: 'rgb(220, 210, 200)' }}></i>
    )

    let dollars = []
    for (let i = 0; i < 5; i++) {
      (i < rating) ? dollars.push(filledStar(i)) : dollars.push(emptyStar(i))
    }

    return <i>{dollars}</i>;
  }

  render() {
    let rest = this.props.restaurant;
    let ratingSymbol = this.ratingSymbol(rest.rating)

    return (
      <div className="restaurant-show-main-content-visual-summary">
        <div className="visual-summary-rating">
          {ratingSymbol} {rest.rating}
        </div>
        <div className="visual-summary-reviews">
          <i className="far fa-comment-alt" /> {this.props.reviews.length} reviews
        </div>
        <div className="visual-summary-cost">
          <i className="far fa-money-bill-alt" /> ${rest.cost * 10} and under
        </div>
        <div className="visual-summary-cost">
          <i className="fas fa-utensils" /> {rest.cuisine}
        </div>
      </div>
    );
  }
}

export default VisualSummary;
