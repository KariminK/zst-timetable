import SelectionBtn from "../Buttons/SelectionBtn";
const SelectClassroom = ({
  classrooms,
  onSelectClassroom,
  currentClassroom,
}) => {
  let classRoomElements = [];
  if (Array.isArray(classrooms)) {
    classRoomElements = classrooms.map((classroom) => {
      if (classroom) {
        return (
          <SelectionBtn
            active={classroom === currentClassroom}
            onSelect={onSelectClassroom}
            text={classroom}
          />
        );
      }
    });
  }
  return (
    <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex w-96 flex-wrap border-2 bg-white p-2 border-red-600">
      {...classRoomElements}
    </div>
  );
};
export default SelectClassroom;
