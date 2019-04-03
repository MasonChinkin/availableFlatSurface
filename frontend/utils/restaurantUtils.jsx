import React from 'react';

export const fetchAllRestaurants = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/restaurants/`
  });
};

export const fetchRestaurant = payload => {
  return $.ajax({
    method: 'GET',
    url: `/api/restaurants/${payload.restaurant_id}`,
    data: {
      payload
    }
  });
};

export const searchRestaurants = searchTerm => {
  return $.ajax({
    method: 'GET',
    url: `/api/restaurants/`,
    data: {
      searchTerm
    }
  });
};

export function sidebarDataArr(rest) {
  let details = {
    'Address': [rest.address, 'fas fa-map-marker-alt'],
    'Cross Street': [rest.crossStreet, 'fas fa-car-alt'],
    'Neighborhood': [rest.neighborhood, 'far fa-building'],
    'Hours': [rest.hours, 'far fa-clock'],
    'Cuisine': [rest.cuisine, 'fas fa-utensils'],
    'Dress Code': [rest.dressCode, 'fas fa-tshirt'],
    'Parking Details': [rest.parkingDetails, 'fas fa-parking'],
    'Payment Options': [rest.paymentOptions, 'fas fa-credit-card'],
    'Phone Number': [rest.phone, 'fas fa-phone'],
    'Website': [rest.website, 'far fa-share-square'],
  }

  let sidebarDataArr = Object.entries(details);

  return sidebarDataArr.map((detail, i) => {
    if (detail[1]) {
      let label = detail[0];
      let val = detail[1][0] || 'N/A';
      let icon = detail[1][1];

      val = (label === 'Website' && val !== 'N/A') ? <a href={val}>{val}</a> : val

      return (
        <li key={i}>
          <i className={icon} />
          <div>
            <label>{label}</label>
            <p>{val}</p>
          </div>
        </li>
      )
    }
  })
}

export function saveButton(loaded, savedRestaurantsJoin, handleSaveClick) {
  // without &&, Object.values return error on first render, since savedrestaurantjoin initially null
  let saveButton = (loaded && Object.values(savedRestaurantsJoin).length > 0) ?
    <button className="save-restaurant-button saved-restaurant-button" onClick={handleSaveClick}>
      <i id="Overview" className='fa fa-bookmark' />Restaurant Saved!</button> :
    <button className="save-restaurant-button" onClick={handleSaveClick}>
      <i id="Overview" className='far fa-bookmark' />Save this Restaurant</button>

  return saveButton
}