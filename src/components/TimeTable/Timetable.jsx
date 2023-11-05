import Lesson from "./lesson/Lesson";
import "./timetable.css";
const Timetable = ({ timetable, day, hours, group }) => {
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
  console.log(currentDayTimetable);
  let elements = [];
  if (currentDayTimetable) {
    const flatTimetable = currentDayTimetable.reduce((acc, curr) => {
      if (curr.length > 1) {
        acc = acc.concat(curr[group - 1]);
      } else if (
        (curr.length === 1 && !curr[0].groupName) ||
        (curr.length === 1 && curr[0].groupName === `${group}/2`)
      ) {
        acc = acc.concat(curr[0]);
      } else {
        acc.push(curr);
      }
      return acc;
    }, []);
    elements = flatTimetable.map((element, index) => {
      return <Lesson lesson={element} hour={hours[index + 1]} />;
    });
  }
  return (
    <div className="lessons">
      <h1>{textDay}</h1>
      <table>
        <thead>
          <tr>
            <th>Godzina</th>
            <th>Lekcja</th>
            <th>Sala</th>
          </tr>
        </thead>
        <tbody>{...elements}</tbody>
      </table>
    </div>
  );
};
export default Timetable;
