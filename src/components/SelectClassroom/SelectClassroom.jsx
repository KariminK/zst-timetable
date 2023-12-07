import "./selectClassroom.css";

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
          <button
            className={
              "selectClassroomBtn" +
              (classroom === currentClassroom ? " active" : "")
            }
            onClick={(e) => onSelectClassroom(e)}
          >
            {classroom}
          </button>
        );
      }
    });
  }
  return <div className="selectClassroom">{...classRoomElements}</div>;
};
export default SelectClassroom;
