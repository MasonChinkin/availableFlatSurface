import { connect } from 'react-redux';
import ResButtons from './ResButtons';

const mSP = ({ ui }) => ({
  searchedDateTime: ui.reservationForm.resDateTime,
  numPeople: ui.reservationForm.numPeople
});

const mDP = dispatch => ({
  makeReservation: reservation => dispatch(makeReservation(reservation))
})

const ResButtonsContainer = connect(mSP, mDP)(ResButtons);

export default ResButtonsContainer;