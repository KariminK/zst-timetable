const flipTimetable = (NumberOfLessons, flatTimetable) => {
  const flippedTimetable = new Array(NumberOfLessons);
  for (let i = 0; i < flippedTimetable.length; i++) {
    flippedTimetable[i] = new Array(flatTimetable.length);
  }
  for (let i = 0; i < flatTimetable.length; i++) {
    for (let j = 0; j < flatTimetable[i].length; j++) {
      flippedTimetable[j][i] = structuredClone(flatTimetable[i][j]);
    }
  }
  return flippedTimetable;
};
export default flipTimetable;
