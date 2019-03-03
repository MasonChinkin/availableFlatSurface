import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import { requestSearchedRestaurants } from '../../../../actions/restaurantActions';

const mDP = dispatch => ({
  requestSearchedRestaurants: restaurants => dispatch(requestSearchedRestaurants(restaurants))
});

const SearchFormContainer = connect(null, mDP)(SearchForm);

export default SearchFormContainer;