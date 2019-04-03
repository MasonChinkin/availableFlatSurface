export function dateToString(dateTimeInt) {
  let resDate = new Date(dateTimeInt);
  let date = (resDate.getMonth() + 1) + '/' + resDate.getDate() + '/' + resDate.getFullYear();
  let minutes = (resDate.getMinutes() < 10) ? `0${resDate.getMinutes()} PM` : `${resDate.getMinutes()} PM`;
  let hours = (resDate.getHours() === 12) ? `${resDate.getHours()}` : `${resDate.getHours() - 12}`;
  let time = hours + ':' + minutes;
  let dateTime = (resDate > new Date()) ? date + ' ' + time : date;
  return dateTime
}