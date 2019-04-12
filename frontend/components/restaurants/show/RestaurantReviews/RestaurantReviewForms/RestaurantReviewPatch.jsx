import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

class RestaurantReviewPatch extends Component {
  constructor(props) {
    super(props);
    let { review } = this.props

    this.state = {
      userId: review.userId,
      restaurantId: review.restaurantId,
      overallRating: review.overallRating,
      foodRating: review.foodRating,
      serviceRating: review.serviceRating,
      ambienceRating: review.ambienceRating,
      body: review.body
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeRating = this.changeRating.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    let review = {
      id: this.props.review.id,
      user_id: this.state.userId,
      restaurant_id: this.state.restaurantId,
      overall_rating: this.state.overallRating,
      food_rating: this.state.foodRating,
      service_rating: this.state.serviceRating,
      ambience_rating: this.state.ambienceRating,
      body: this.state.body
    }

    this.props.editReview(review)
      .then(this.props.handleReviewSubmit)
  }

  handleBodyChange(event) {
    this.setState({ body: event.currentTarget.value })
  }

  changeRating(newRating, name) {
    this.setState({ [name]: newRating });
  }

  render() {
    let ratings = [
      ['overallRating', 'Overall'],
      ['foodRating', 'Food'],
      ['serviceRating', 'Service'],
      ['ambienceRating', 'Ambience']
    ]

    ratings = ratings.map((rating, i) => {
      return <div key={i} className="review-rating">
        <h2>{rating[1]}</h2>
        <StarRatings
          rating={this.state[rating[0]]}
          starRatedColor="red"
          changeRating={this.changeRating}
          numberOfStars={5}
          name={rating[0]}
          starDimension='20px'
          starSpacing='0px'
        />
      </div>
    })

    return (
      <form className="review-form" onSubmit={this.handleSubmit}>
        <div className="review-stars">
          {ratings}
        </div>
        <h2 className="review-error">{this.props.reviewErrors}</h2>
        <textarea className="review-body"
          onChange={this.handleBodyChange}
          name="body"
          cols="30"
          rows="10"
          value={this.state.body} />
        <button className="review-submit-button">Update Review</button>
      </form>
    );
  }
}

export default RestaurantReviewPatch;
