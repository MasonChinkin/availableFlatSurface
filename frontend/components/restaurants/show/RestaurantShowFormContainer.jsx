import { connect } from 'react-redux';
import { flipSearchCalendar } from '../../../actions/uiActions';
import RestaurantShowForm from './RestaurantShowForm';
import { makeReservation } from '../../../actions/reservationActions';

const mSP = ({ entities, ui, session }) => ({
  searchCalendar: ui.searchCalendar,
  restaurant: entities.restaurants,
  userId: session.currentUser.id
});

const mDP = dispatch => ({
  flipSearchCalendar: bool => dispatch(flipSearchCalendar(bool)),
  makeReservation: reservation => dispatch(makeReservation(reservation))
});

const RestaurantSearchFormContainer = connect(mSP, mDP)(RestaurantShowForm);

export default RestaurantSearchFormContainer;