import { connect } from 'react-redux';
import RestaurantReviews from './RestaurantReviews';
import { createReview, editReview, deleteReview } from '../../../../actions/reviewActions';
import { flipReviewForm } from '../../../../actions/uiActions';

const mSP = ({ entities, session, ui }, ownProps) => {
  return {
    reviews: Object.values(entities.reviews),
    users: entities.users,
    currentUserId: session.currentUser.id,
    displayReviewForm: ui.displayReviewForm
  }
};

const mDP = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  editReview: review => dispatch(editReview(review)),
  deleteReview: review => dispatch(deleteReview(review)),
  flipReviewForm: bool => dispatch(flipReviewForm(bool))
});

const RestaurantReviewsContainer = connect(mSP, mDP)(RestaurantReviews);

export default RestaurantReviewsContainer;