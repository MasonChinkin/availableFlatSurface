import React, { Component } from 'react';
import RestaurantReviewItem from './RestaurantShowReviewItem';
import RestaurantReviewPatch from './RestaurantReviewForms/RestaurantReviewPatch';
import RestaurantReviewPost from './RestaurantReviewForms/RestaurantReviewPost';
import { withRouter } from 'react-router-dom'

class RestaurantReviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // does the user have a review
      isReviewed: this.isReviewed(),
      reviewFormDisplay: false
    }

    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.handleFormClick = this.handleFormClick.bind(this)
  }

  isReviewed() {
    for (let i = 0; i < this.props.reviews.length; i++) {
      const review = this.props.reviews[i]
      if (review.userId === this.props.currentUserId) return true
    }

    return false
  }

  handleFormClick() {
    if (this.props.currentUserId === null) return this.props.history.push(`${this.props.history.location.pathname}/signin`);
    this.setState({ reviewFormDisplay: !this.state.reviewFormDisplay })
  }

  handleReviewSubmit() {
    this.setState({ reviewFormDisplay: !this.state.reviewFormDisplay })
  }

  handleDeleteClick() {
    this.props.deleteReview()
  }

  render() {
    if (!this.props.reviews.length) return null
    let { reviews, users, currentUserId, createReview, editReview } = this.props
    let { isReviewed, reviewFormDisplay } = this.state
    debugger
    let restaurantId = reviews[0].restaurantId
    let IDs = { currentUserId: currentUserId, restaurantId: restaurantId }

    const reviewButtons = (this.state.isReviewed) ?
      <>
        <h3 onClick={this.handleFormClick}><i className='fas fa-edit' /> Edit your review</h3>
        <h3 onClick={this.handleDeleteClick}><i className='fa fa-close' /> Delete your review</h3>
      </> :
      <h3 onClick={this.handleFormClick}><i className='fas fa-plus' /> Make a review</h3>

    const reviewList = reviews.map(rev => {
      return <RestaurantReviewItem key={rev.id}
        review={rev}
        reviewer={users[rev.userId]} />
    })

    const reviewForm = (isReviewed) ?
      <RestaurantReviewPatch IDs={IDs} editReview={editReview} /> :
      <RestaurantReviewPost IDs={IDs} createReview={createReview} />

    return (
      <div id="Reviews" className="restaurant-reviews">
        <div className="review-header">
          <h2>Reviews</h2>
          {reviewButtons}
        </div>
        {reviewFormDisplay && reviewForm}
        {reviewList}
      </div>
    );
  }
}

export default withRouter(RestaurantReviews);
