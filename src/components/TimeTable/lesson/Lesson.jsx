import "./lesson.css";
const Lesson = ({ lesson, hour, nr, classname }) => {
  if (lesson) {
    return (
      <tr className="lesson">
        <td>{nr}</td>
        <td>
          {hour?.timeFrom} - {hour?.timeTo}
        </td>
        <td>{lesson?.subject}</td>
        <td>{lesson?.teacher}</td>
        <td>{!classname ? lesson?.room : classname}</td>
      </tr>
    );
  } else {
    return <tr className="lesson"></tr>;
  }
};
export default Lesson;
