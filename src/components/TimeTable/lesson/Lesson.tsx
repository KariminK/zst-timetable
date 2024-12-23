import { MouseEventHandler } from "react";
import { hour, lesson } from "../../../types";

type props = {
  lesson: lesson;
  hour: hour;
  classname?: string;
  onClassroomSel: MouseEventHandler<HTMLTableCellElement>;
  onClassSel: (
    e: React.MouseEvent<HTMLTableCellElement, MouseEvent>,
    classname: string
  ) => void;
  cell: boolean;
};

const Lesson = ({
  lesson,
  hour,
  classname,
  onClassroomSel,
  onClassSel,
  cell,
}: props) => {
  let EventHandler: MouseEventHandler<HTMLTableCellElement>;
  if (!classname) {
    EventHandler = (e) => onClassroomSel(e);
  } else {
    EventHandler = (e) => onClassSel(e, classname);
  }
  if (!lesson || !hour) {
    return <tr className="lesson"></tr>;
  }
  if (cell) {
    return (
      <td>
        <span className="font-bold mx-3">{lesson.subject}</span>
        <a href="#" className=" ">
          {lesson.teacher}
        </a>
        <a href="#" className="text-blue-900 font-bold ml-2">
          {!classname ? lesson.room : classname}
        </a>
      </td>
    );
  } else {
    return (
      <tr className="border-b border-slate-200 odd:bg-slate-100">
        <td className="p-2">{hour.number}</td>
        <td className="p-2">
          {hour.timeFrom} - {hour.timeTo}
        </td>
        <td className="p-2 font-bold">{lesson.subject}</td>
        <td className="p-2 sm:hidden">{lesson.teacher}</td>
        <td
          onClick={EventHandler}
          className="p-2 text-red-700 cursor-pointer hover:text-red-600 font-bold underline"
        >
          {!classname ? lesson.room : classname}
        </td>
      </tr>
    );
  }
};
export default Lesson;
