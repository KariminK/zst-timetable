import "./lesson.css";
const Lesson = ({
  lesson,
  hour,
  nr,
  classname,
  onClassroomSel,
  onClassSel,
}) => {
  let EventHandler;
  if (!classname) {
    EventHandler = (e) => onClassroomSel(e);
  } else {
    EventHandler = (e) => onClassSel(e, classname);
  }
  if (lesson) {
    return (
      <tr className="lesson">
        <td>{nr}</td>
        <td>
          {hour?.timeFrom} - {hour?.timeTo}
        </td>
        <td>{lesson?.subject}</td>
        <td>{lesson?.teacher}</td>
        <td onClick={EventHandler} className="classRoom">
          {!classname ? lesson?.room : classname}
        </td>
      </tr>
    );
  } else {
    return <tr className="lesson"></tr>;
  }
};
export default Lesson;
