import { connect } from 'react-redux';
import ProfileReservations from './ProfileReservations';

const mSP = ({ entities }) => ({
  restaurants: entities.restaurants,
  reservations: entities.reservations
});

const ProfileReservationsContainer = connect(mSP)(ProfileReservations);

export default ProfileReservationsContainer;