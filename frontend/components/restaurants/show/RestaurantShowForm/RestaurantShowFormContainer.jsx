import { connect } from 'react-redux';
import { flipSearchCalendar } from '../../../../actions/uiActions';
import RestaurantShowForm from './RestaurantShowForm';
import { makeReservation } from '../../../../actions/reservationActions';

const mSP = ({ entities, ui, session }) => {
  let currId = (session.currentUser.id === null) ? null : session.currentUser.id;
  return {
    searchCalendar: ui.searchCalendar,
    restaurant: entities.restaurants,
    currId: currId
  };
};

const mDP = dispatch => ({
  flipSearchCalendar: bool => dispatch(flipSearchCalendar(bool)),
  makeReservation: reservation => dispatch(makeReservation(reservation))
});

const RestaurantSearchFormContainer = connect(mSP, mDP)(RestaurantShowForm);

export default RestaurantSearchFormContainer;