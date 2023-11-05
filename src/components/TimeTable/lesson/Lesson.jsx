import "./lesson.css";
const Lesson = ({ lesson, hour }) => {
  if (lesson) {
    return (
      <tr className="lesson">
        <td>
          {hour?.timeFrom} - {hour?.timeTo}
        </td>
        <td>{lesson?.subject}</td>
        <td>{lesson?.room}</td>
      </tr>
    );
  } else {
    return <tr className="lesson"></tr>;
  }
};
export default Lesson;
