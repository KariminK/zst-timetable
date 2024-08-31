import flatLessonDay from "../../utils/flatLessonDay";
import flipTimetable from "../../utils/flipTimetable";
import Lesson from "./lesson/Lesson";
const Timetable = ({
  timetable,
  day,
  hours,
  group,
  classroom,
  onClassroomSel,
  onClassSel,
  allDayView,
}) => {
  let elements = [];
  if (!Array.isArray(timetable))
    return (
      <h1 className="text-center text-4xl my-5 font-bold">Ładowanie...</h1>
    );
  if (classroom === "") {
    if (allDayView) {
      let NumberOfLessons = 0;
      const flatTimetable = timetable.map((lessonDay) => {
        NumberOfLessons = lessonDay.length;
        return flatLessonDay(lessonDay, group);
      });

      elements = flipTimetable(NumberOfLessons, flatTimetable).map(
        (day, index) => {
          return (
            <tr className=" even:bg-slate-100" key={crypto.randomUUID()}>
              <td className="p-3 px-1 font-bold">{index + 1}.</td>
              <td className="p-3 px-1">
                {hours[index + 1].timeFrom} - {hours[index + 1].timeTo}
              </td>
              {day.map((element, index) => {
                return (
                  <Lesson
                    lesson={element}
                    nr={index + 1}
                    hour={hours[index + 1]}
                    key={index}
                    onClassSel={onClassSel}
                    onClassroomSel={onClassroomSel}
                    cell={true}
                  />
                );
              })}
            </tr>
          );
        }
      );
    } else {
      elements = flatLessonDay(timetable[day], group).map((element, index) => {
        return (
          <Lesson
            lesson={element}
            nr={index + 1}
            hour={hours[index + 1]}
            key={index}
            onClassSel={onClassSel}
            onClassroomSel={onClassroomSel}
          />
        );
      });
    }
  } else {
    elements = timetable.map((element, index) => {
      return (
        <Lesson
          lesson={element}
          nr={element.lessonNumber}
          hour={hours[element.lessonNumber]}
          key={index}
          classname={element.class}
          onClassSel={onClassSel}
          onClassroomSel={onClassroomSel}
          cell={allDayView}
        />
      );
    });
  }

  if (allDayView)
    return (
      <div className="mx-auto w-fit border-2 border-red-700 my-2 shadow-md shadow-red-900 rounded-t-lg">
        <table className="text-center text-xl sm:text-base">
          <thead className="bg-red-700">
            <tr>
              <th className="px-5 sm:p-2 text-white">#</th>
              <th className="p-3 sm:p-2 text-white">Godzina</th>
              <th className="p-3 w-56 sm:p-2 text-white">Poniedziałek</th>
              <th className="p-3 w-56 sm:p-2 text-white">Wtorek</th>
              <th className="p-3 w-56 sm:p-2 text-white">Środa</th>
              <th className="p-3 w-56 sm:p-2 text-white sm:hidden">Czwartek</th>
              <th className="p-3 w-56 sm:p-2 text-white">Piątek</th>
            </tr>
          </thead>
          <tbody>{elements}</tbody>
        </table>
        <div className="placeholder"></div>
      </div>
    );
  return (
    <div className="mx-auto w-fit border-2 border-red-700 my-2 shadow-md shadow-red-900">
      <table className="text-center text-xl sm:text-base">
        <thead className="bg-red-700">
          <tr>
            <th className="p-3 sm:p-2 text-white">Nr</th>
            <th className="p-3 sm:p-2 text-white">Godzina</th>
            <th className="p-3 sm:p-2 text-white">Lekcja</th>
            <th className="p-3 sm:p-2 text-white sm:hidden">Nauczyciel</th>
            <th className="p-3 sm:p-2 text-white">
              {classroom === "" ? "sala" : "klasa"}
            </th>
          </tr>
        </thead>
        <tbody>{elements}</tbody>
      </table>
      <div className="placeholder"></div>
    </div>
  );
};
export default Timetable;
