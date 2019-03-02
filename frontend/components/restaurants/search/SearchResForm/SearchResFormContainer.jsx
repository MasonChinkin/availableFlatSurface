import { connect } from 'react-redux';
import SearchResForm from './SearchResForm';
import { requestSearchedRestaurants } from '../../../../actions/restaurantActions';

const mDP = dispatch => ({
  requestSearchedRestaurants: restaurants => dispatch(requestSearchedRestaurants(restaurants))
});

const SearchResFormContainer = connect(null, mDP)(SearchResForm);

export default SearchResFormContainer;