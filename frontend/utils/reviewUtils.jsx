import React from 'react';
import RestaurantReviewItem from '../components/restaurants/show/RestaurantReviews/RestaurantShowReviewItem'

export const postReview = review => {
  return $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: {
      review
    }
  });
};

export const patchReview = review => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/reviews/${review.id}`,
    data: {
      review
    }
  });
};

export const deleteReview = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${id}`,
  });
};