import { connect } from 'react-redux';
import { flipSearchCalendar } from '../../../actions/uiActions';
import RestaurantShowForm from './RestaurantShowForm';

const mSP = ({ entities, ui }) => ({
  searchCalendar: ui.searchCalendar,
  restaurant: entities.restaurants
})

const mDP = dispatch => ({
  flipSearchCalendar: bool => dispatch(flipSearchCalendar(bool)),
  // ACTION TO request res times for specific restaurant
});

const RestaurantSearchFormContainer = connect(mSP, mDP)(RestaurantShowForm);

export default RestaurantSearchFormContainer;