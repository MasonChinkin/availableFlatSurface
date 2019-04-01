import { connect } from 'react-redux';
import RestaurantReviews from './RestaurantReviews';
import { createReview, editReview, deleteReview } from '../../../../actions/reviewActions';

const mSP = ({ entities, session }, ownProps) => {
  return {
    reviews: Object.values(entities.reviews),
    users: entities.users,
    currentUserId: session.currentUser.id,
  }
};

const mDP = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  editReview: review => dispatch(editReview(review)),
  deleteReview: review => dispatch(deleteReview(review)),
});

const RestaurantReviewsContainer = connect(mSP, mDP)(RestaurantReviews);

export default RestaurantReviewsContainer;