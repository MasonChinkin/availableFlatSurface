import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

class RestaurantReviewPatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overallRating: 1,
      foodRating: 1,
      serviceRating: 1,
      ambienceRating: 1,
      body: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeRating = this.changeRating.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    let review = {
      user_id: this.props.IDs.currentUserId,
      restaurant_id: this.props.IDs.restaurantId,
      overall_rating: this.state.overallRating,
      food_rating: this.state.foodRating,
      service_rating: this.state.serviceRating,
      ambience_rating: this.state.ambienceRating,
      body: this.state.body
    }

    this.props.createReview(review)
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
        <textarea className="review-body"
          onChange={this.handleBodyChange}
          name="body"
          cols="30"
          rows="10"
          placeholder="Write review here" />
        <button className="review-submit-button">Update Review</button>
      </form>
    );
  }
}

export default RestaurantReviewPatch;
