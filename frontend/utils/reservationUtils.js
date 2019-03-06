export const postReservation = reservation => {
  return $.ajax({
    method: 'POST',
    url: '/api/reservations',
    data: {
      reservation
    }
  });
};