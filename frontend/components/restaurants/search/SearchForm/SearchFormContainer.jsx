import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import { requestSearchedRestaurants } from '../../../../actions/restaurantActions';
import { flipSearchCalendar } from '../../../../actions/uiActions';

const mSP = ({ ui }) => ({
  searchCalendar: ui.searchCalendar
})

const mDP = dispatch => ({
  requestSearchedRestaurants: restaurants => dispatch(requestSearchedRestaurants(restaurants)),
  flipSearchCalendar: bool => dispatch(flipSearchCalendar(bool))
});

const SearchFormContainer = connect(mSP, mDP)(SearchForm);

export default SearchFormContainer;