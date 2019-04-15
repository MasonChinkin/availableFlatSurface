import React from 'react';

export const fetchRecommendedRestaurants = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/recommended_restaurants/`
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
  let details = [
    ['Address', rest.address, 'fas fa-map-marker-alt'],
    ['Cross Street', rest.crossStreet, 'fas fa-car-alt'],
    ['Neighborhood', rest.neighborhood, 'far fa-building'],
    ['Hours', rest.hours, 'far fa-clock'],
    ['Cuisine', rest.cuisine, 'fas fa-utensils'],
    ['Dress Code', rest.dressCode, 'fas fa-tshirt'],
    ['Parking Details', rest.parkingDetails, 'fas fa-parking'],
    ['Payment Options', rest.paymentOptions, 'fas fa-credit-card'],
    ['Phone Number', rest.phone, 'fas fa-phone'],
    ['Website', rest.website, 'far fa-share-square'],
  ]

  return details.map((detail, i) => {
    if (!details[1]) return null;

    let label = detail[0];
    let val = detail[1] || 'N/A';
    let icon = detail[2];

    if (label === 'Website' && val !== 'N/A') debugger;

    if (label === 'Website' && val !== 'N/A') {
      val = (val.includes('www')) ? val : 'http://www.' + val
      val = <a href={val}>{val}</a>
    } else { val }

    return (
      <li key={i}>
        <i className={icon} />
        <div>
          <label>{label}</label>
          <p>{val}</p>
        </div>
      </li>
    )
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