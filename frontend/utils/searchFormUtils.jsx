import React from 'react';

export const numPeople = () => {
  let options = [];

  for (let i = 1; i < 21; i++) {
    let val = (i === 1) ? `${i} person` : `${i} people`;
    options.push(<option key={i} value={val}>{val}</option>);
  }

  return options;
}

export const times = () => {
  const resTimes = [];
  for (let i = 0; i < 24; i++) {
    let newDateTime = new Date();
    newDateTime.setHours(12)
    newDateTime.setMinutes(0);
    let minutes = newDateTime.getMinutes();
    minutes += (i === 0) ? 0 : i * 30;
    newDateTime.setMinutes(minutes);

    let hour = (newDateTime.getHours())
    let min = newDateTime.getMinutes();
    min = (min < 10) ? `0${min} PM` : `${min} PM`;
    hour = (hour < 13) ? `${hour}` : `${hour - 12}`;

    resTimes.push(
      <option key={i} value={`${hour}:${min}`}>{`${hour}:${min}`}</option>
    );
  }

  return resTimes;
}

export const initialDate = () => {
  let date = new Date();
  let hours = date.getHours();
  date.setHours(hours + 1);
  date.setMinutes(0);
  return date
}