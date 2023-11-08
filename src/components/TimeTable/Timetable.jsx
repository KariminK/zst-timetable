import Lesson from "./lesson/Lesson";
import "./timetable.css";
const Timetable = ({ timetable, day, hours, group, nameClass }) => {
  let textDay = "Poniedziałek";
  switch (day) {
    case 1:
      textDay = "Wtorek";
      break;
    case 2:
      textDay = "Środa";
      break;
    case 3:
      textDay = "Czwartek";
      break;
    case 4:
      textDay = "Piątek";
      break;
    default:
      textDay = "Poniedziałek";
  }
  const currentDayTimetable = timetable[day];
  let elements = [];
  if (currentDayTimetable) {
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
        />
      );
    });
  }

  return (
    <div className="lessons">
      <h1>
        {textDay} {`(${nameClass} Grupa ${group})`}
      </h1>
      <table>
        <colgroup></colgroup>
        <thead>
          <tr>
            <th>Nr</th>
            <th>Godzina</th>
            <th>Lekcja</th>
            <th>Nauczyciel</th>
            <th>Sala</th>
          </tr>
        </thead>
        <tbody>{...elements}</tbody>
      </table>
    </div>
  );
};
export default Timetable;
