import "./lesson.css";
const Lesson = ({ lesson, hour, nr }) => {
  if (lesson) {
    return (
      <tr className="lesson">
        <td>{nr}</td>
        <td>
          {hour?.timeFrom} - {hour?.timeTo}
        </td>
        <td>{lesson?.subject}</td>
        <td>{lesson?.teacher}</td>
        <td>{lesson?.room}</td>
      </tr>
    );
  } else {
    return <tr className="lesson"></tr>;
  }
};
export default Lesson;
