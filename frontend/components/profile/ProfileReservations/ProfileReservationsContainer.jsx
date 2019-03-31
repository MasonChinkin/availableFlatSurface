import { connect } from 'react-redux';
import ProfileReservations from './ProfileReservations';
import { clearNewReservation, cancelReservation } from '../../../actions/reservationActions';


const mSP = ({ entities, ui }) => {
  let reservations = Object.values(entities.reservations);
  let upcoming = reservations.filter(res => new Date(res.reservation) > new Date());
  let past = reservations.filter(res => new Date(res.reservation) < new Date());

  return {
    restaurants: entities.restaurants,
    upcomingReservations: upcoming.sort((a, b) => a.reservation - b.reservation),
    pastReservations: past.sort((a, b) => b.reservation - a.reservation),
    newReservationId: ui.newReservation.id
  };
};

const mDP = dispatch => ({
  clearNewReservation: () => dispatch(clearNewReservation()),
  cancelReservation: id => dispatch(cancelReservation(id))
});

const ProfileReservationsContainer = connect(mSP, mDP)(ProfileReservations);

export default ProfileReservationsContainer;