function toHourString(minutesSinceMidnight) {
  const hour = Math.floor(minutesSinceMidnight / 60);
  const minute = minutesSinceMidnight % 60;
  return `${hour}:${minute}`; // Not adding left padding because I'm lazy AF
}
