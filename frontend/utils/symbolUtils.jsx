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

export function ratingSymbol(rating) {
  const filledStar = key => (
    <i key={key} className='fa fa-star' style={{ color: 'rgb(210, 40, 60)' }}></i>
  )

  const emptyStar = key => (
    <i key={key} className='fa fa-star' style={{ color: 'rgb(220, 210, 200)' }}></i>
  )

  let stars = []
  for (let i = 0; i < 5; i++) {
    (i < rating) ? stars.push(filledStar(i)) : stars.push(emptyStar(i))
  }

  return <i>{stars}</i>;
}