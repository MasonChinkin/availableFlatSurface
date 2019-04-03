import React, { Component } from 'react';
import RestaurantReviewItem from './RestaurantShowReviewItem';
import RestaurantReviewPatch from './RestaurantReviewForms/RestaurantReviewPatch';
import RestaurantReviewPost from './RestaurantReviewForms/RestaurantReviewPost';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { withRouter } from 'react-router-dom'

class RestaurantReviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // does the user have a review
      userReview: this.isReviewed(),
      reviewFormDisplay: false
    }

    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.handleFormClick = this.handleFormClick.bind(this)
    this.handleReviewSubmit = this.handleReviewSubmit.bind(this)
  }

  isReviewed() {
    for (let i = 0; i < this.props.reviews.length; i++) {
      const review = this.props.reviews[i]
      if (review.userId === this.props.currentUserId) return review
    }

    return null
  }

  handleFormClick() {
    if (this.props.currentUserId === null) return this.props.history.push(`${this.props.history.location.pathname}/signin`);
    this.props.flipReviewForm(!this.props.displayReviewForm)
  }

  handleReviewSubmit() {
    this.setState({ userReview: this.isReviewed() })
    this.props.flipReviewForm(!this.props.displayReviewForm)
  }

  handleDeleteClick() {
    confirmAlert({
      message: 'Are you sure you want to delete your review?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            if (this.props.displayReviewForm) this.props.flipReviewForm(!this.props.displayReviewForm)
            this.props.deleteReview(this.state.userReview.id)
              .then(() => this.setState({ userReview: this.isReviewed() }))
          }
        },
        { label: 'No', onClick: () => { } }
      ]
    })
  }

  render() {
    if (!this.props.reviews.length) return null
    let { reviews, users, currentUserId, createReview, editReview, displayReviewForm } = this.props
    let { userReview } = this.state

    let restaurantId = reviews[0].restaurantId
    let IDs = { currentUserId: currentUserId, restaurantId: restaurantId }

    const reviewButtons = (userReview) ?
      <>
        <h3 onClick={this.handleFormClick}><i className='fas fa-edit' /> Edit your review</h3>
        <h3 onClick={this.handleDeleteClick}><i className='fa fa-close' /> Delete your review</h3>
      </> :
      <h3 onClick={this.handleFormClick}><i className='fas fa-plus' /> Write a review</h3>

    let currUserReview;
    const reviewList = reviews.map(review => {
      // put user's review at top
      if (review.userId === currentUserId) {
        currUserReview = <RestaurantReviewItem key={review.id}
          review={review}
          reviewer={users[review.userId]}
          belongsToUser={true} />
      } else {
        return <RestaurantReviewItem key={review.id}
          review={review}
          reviewer={users[review.userId]}
          belongsToUser={false} />
      }
    })

    // conditional removes user's review while they edit it
    if (!displayReviewForm) reviewList.unshift(currUserReview)

    const reviewForm = (userReview) ?
      <RestaurantReviewPatch review={this.state.userReview} handleReviewSubmit={this.handleReviewSubmit} editReview={editReview} /> :
      <RestaurantReviewPost IDs={IDs} handleReviewSubmit={this.handleReviewSubmit} createReview={createReview} />

    return (
      <div id="Reviews" className="restaurant-reviews">
        <div className="review-header">
          <h2>Reviews</h2>
          {reviewButtons}
        </div>
        {displayReviewForm && reviewForm}
        {reviewList}
      </div>
    );
  }
}

export default withRouter(RestaurantReviews);
