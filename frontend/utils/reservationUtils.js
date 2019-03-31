export const postReservation = reservation => {
  return $.ajax({
    method: 'POST',
    url: '/api/reservations',
    data: {
      reservation
    }
  });
};

export const deleteReservation = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/reservations/${id}`
  });
};