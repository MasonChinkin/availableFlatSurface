export const getResTimes = (time) => {
  const resTimes = [];
  for (let i = 0; i < 5; i++) {
    let newTime = new Date(time);
    let minutes = time.getMinutes();
    minutes += (i === 0) ? 0 : i * 15;
    newTime.setMinutes(minutes);

    let buttonHours = newTime.getHours()
    let buttonMinutes = newTime.getMinutes();

    resTimes.push([buttonHours, buttonMinutes]);
  }

  return resTimes;
};