import React from 'react';

export function costSymbol(cost) {
  const darkDollar = key => (
    <i key={key} className='fas fa-dollar-sign' style={{ color: 'black' }}></i>
  )

  const lightDollar = key => (
    <i key={key} className='fas fa-dollar-sign' style={{ color: 'lightgrey' }}></i>
  )

  let dollars = []
  for (let i = 0; i < 4; i++) {
    (i < cost) ? dollars.push(darkDollar(i)) : dollars.push(lightDollar(i))
  }

  return dollars;
}

export function ratingSymbol(rating, filledColor) {
  const filledStar = key => (
    <i key={key} className='fa fa-star' style={{ color: filledColor }}></i>
  )

  const halfStar = key => (
    <i key={key} className='fa fa-star-half-full' style={{ color: filledColor }}></i>
  )

  const emptyStar = key => (
    <i key={key} className='fa fa-star-o' style={{ color: 'rgb(220, 210, 200)' }}></i>
  )

  let roundedRating = Math.round(rating)

  let stars = []
  for (let i = 0; i < 5; i++) {
    if (i <= rating - 1) {
      stars.push(filledStar(i))
    }
    else if (i < rating && rating % 1 >= 0.5) {
      stars.push(halfStar(i))
    } else {
      stars.push(emptyStar(i))
    }
  }

  return <i>{stars}</i>;
}