import { connect } from 'react-redux';
import ProfileReservations from './ProfileReservations';


const mSP = ({ entities }) => {
  let reservations = Object.values(entities.reservations)
  let upcoming = reservations.filter(res => new Date(res.reservation) > new Date());
  let past = reservations.filter(res => new Date(res.reservation) < new Date());
  return {
    restaurants: entities.restaurants,
    upcomingReservations: upcoming.sort((a, b) => a.reservation - b.reservation),
    pastReservations: past.sort((a, b) => b.reservation - a.reservation)
  };
};

const ProfileReservationsContainer = connect(mSP)(ProfileReservations);

export default ProfileReservationsContainer;