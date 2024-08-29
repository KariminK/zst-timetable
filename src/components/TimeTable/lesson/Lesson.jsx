const Lesson = ({
  lesson,
  hour,
  nr,
  classname,
  onClassroomSel,
  onClassSel,
  cell,
}) => {
  let EventHandler;
  if (!classname) {
    EventHandler = (e) => onClassroomSel(e);
  } else {
    EventHandler = (e) => onClassSel(e, classname);
  }
  if (!lesson) {
    return <tr className="lesson"></tr>;
  }
  if (cell) {
    return (
      <td className="p-3 px-1">
        <p className="font-bold">{lesson?.subject}</p>
        <a href="#" className=" ">
          {lesson?.teacher}
        </a>
        <a href="#" className="text-blue-900 font-bold ml-2">
          {!classname ? lesson?.room : classname}
        </a>
      </td>
    );
  } else {
    return (
      <tr className="border-b border-slate-200 odd:bg-neutral-300">
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
  }
};
export default Lesson;
