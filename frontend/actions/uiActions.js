export const DROP_DOWN_DROPPED = 'DROP_DOWN_DROPPED';
export const SEARCH_CALENDAR_DROPPED = 'SEARCH_CALENDAR_DROPPED';

export const flipWindowListener = bool => ({
  type: DROP_DOWN_DROPPED,
  bool
});

export const flipSearchCalendar = bool => ({
  type: SEARCH_CALENDAR_DROPPED,
  bool
});