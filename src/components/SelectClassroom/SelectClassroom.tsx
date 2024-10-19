import { MouseEventHandler } from "react";
import { classrooms } from "../../types";
import SelectionBtn from "../Buttons/SelectionBtn";

type props = {
  classrooms: classrooms;
  onSelectClassroom: MouseEventHandler<HTMLButtonElement>;
  currentClassroom: string;
};

const SelectClassroom = ({
  classrooms,
  onSelectClassroom,
  currentClassroom,
}: props) => {
  const classRoomElements = classrooms.map((classroom) => {
    return (
      <SelectionBtn
        active={classroom === currentClassroom}
        onSelect={onSelectClassroom}
        text={classroom}
        btnID={classroom}
      />
    );
  });
  return (
    <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex w-96 flex-wrap border-2 bg-white p-2 border-red-600">
      {...classRoomElements}
    </div>
  );
};
export default SelectClassroom;
