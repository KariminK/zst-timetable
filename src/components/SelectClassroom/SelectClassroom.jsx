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
              "p-2 border-2 m-1 text-xl grow font-medium border-red-600 rounded hover:scale-110 transition duration-200" +
              (classroom === currentClassroom ? " bg-red-600 text-white" : "")
            }
            onClick={(e) => onSelectClassroom(e)}
          >
            {classroom}
          </button>
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
