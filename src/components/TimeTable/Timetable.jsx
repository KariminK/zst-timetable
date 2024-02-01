import Lesson from "./lesson/Lesson";
import "./timetable.css";
const Timetable = ({
  timetable,
  day,
  hours,
  group,
  classroom,
  onClassroomSel,
  onClassSel,
}) => {
  let elements = [];
  if (classroom === "") {
    const currentDayTimetable = timetable[day];
    if (Array.isArray(currentDayTimetable)) {
      const flatTimetable = currentDayTimetable.reduce((acc, curr) => {
        if (curr.length === 0) {
          //sprawdzam czy tablica jest pusta
          acc.push(curr);
        } else {
          if (curr[0].groupName === undefined || curr[0].groupName === "1/1")
            // sprawdzam czy daną lekcje mają wszystkie grupy
            acc.push(curr[0]);
          else {
            const currGroupLesson = curr.filter((lesson) => {
              let slicedGroupname = lesson.groupName.slice(0, 1);
              return slicedGroupname == group;
            }); // wyszukuje w tablicy lekcji dla danej grupy
            if (currGroupLesson.length === 0)
              // jeśli aktualna grupa nie ma lekcji to wrzuca pustą tablicę
              acc.push([]);
            else {
              acc.push(currGroupLesson[0]);
            }
          }
        }
        return acc;
      }, []);
      elements = flatTimetable.map((element, index) => {
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
        />
      );
    });
  }

  return (
    <div className="mx-auto w-fit border-2 border-red-600 my-2 shadow-md shadow-red-900">
      <table className="text-center text-xl sm:text-base">
        <thead className="bg-red-600">
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
        <tbody>{...elements}</tbody>
      </table>
      <div className="placeholder"></div>
    </div>
  );
};
export default Timetable;
