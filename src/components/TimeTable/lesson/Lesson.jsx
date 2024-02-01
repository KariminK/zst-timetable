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
      <tr className="border-b border-slate-200">
        <td className="p-2">{nr}</td>
        <td className="p-2">
          {hour?.timeFrom} - {hour?.timeTo}
        </td>
        <td className="p-2 font-bold">{lesson?.subject}</td>
        <td className="p-2 sm:hidden">{lesson?.teacher}</td>
        <td
          onClick={EventHandler}
          className="p-2 text-red-700 cursor-pointer hover:text-red-600 font-bold underline"
        >
          {!classname ? lesson?.room : classname}
        </td>
      </tr>
    );
  } else {
    return <tr className="lesson"></tr>;
  }
};
export default Lesson;
