import { MouseEventHandler } from "react";
import { hour, lesson } from "../../types";
import Lesson from "./lesson/Lesson";

type props = {
  timetable: lesson[];
  hours: hour[];
  classroom: string;
  onClassroomSel: MouseEventHandler<HTMLTableCellElement>;
  onClassSel: (
    e: React.MouseEvent<HTMLTableCellElement, MouseEvent>,
    classname: string
  ) => void;
};

const DayTimetable = ({
  timetable,
  hours,
  classroom,
  onClassroomSel,
  onClassSel,
}: props) => {
  let elements = [];

  if (!Array.isArray(timetable))
    return (
      <h1 className="text-center text-4xl my-5 font-bold">Ładowanie...</h1>
    );

  if (classroom === "") {
    elements = timetable.map((element, index) => {
      return (
        <Lesson
          lesson={element}
          hour={hours[index + 1]}
          key={index}
          onClassSel={onClassSel}
          onClassroomSel={onClassroomSel}
          cell={false}
        />
      );
    });
  } else {
    elements = timetable.map((element, index) => {
      return (
        <Lesson
          lesson={element}
          hour={hours[element.lessonNumber ? element.lessonNumber : index]}
          key={index}
          classname={element.class}
          onClassSel={onClassSel}
          onClassroomSel={onClassroomSel}
          cell={false}
        />
      );
    });
  }

  return (
    <div className="mx-auto w-fit border-2 border-red-700 my-2 shadow-md shadow-red-900">
      <table className="text-center text-xl sm:text-base">
        <thead className="bg-red-700">
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
        <tbody>{elements}</tbody>
      </table>
      <div className="placeholder"></div>
    </div>
  );
};
export default DayTimetable;
