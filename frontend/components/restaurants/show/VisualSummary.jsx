import React, { Component } from 'react';
import * as SymbolUtils from '../../../utils/symbolUtils'

class VisualSummary extends Component {

  round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  render() {
    let rest = this.props.restaurant;
    let ratingSymbol = SymbolUtils.ratingSymbol(rest.rating, 'rgb(210, 40, 60)')

    return (
      <div className="restaurant-show-main-content-visual-summary">
        <div className="visual-summary-rating">
          {ratingSymbol} {this.round(rest.rating, 1)}
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
