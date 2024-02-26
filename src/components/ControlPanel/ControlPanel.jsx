const ControlPanel = ({
  onChangeGroup,
  onShowSelectClass,
  onShowSelectClassroom,
}) => {
  return (
    <div className="w-fit mx-auto mt-5 mb-2">
      <div className="flex flex-wrap gap-2">
        <button
          id="changeGroupBtn"
          className="border-2 border-red-600 mx-1 sm:grow p-2 text-red-700 hover:bg-red-600 hover:text-white transition duration-200 font-bold rounded-sm text-lg sm:text-sm"
          onClick={onChangeGroup}
        >
          Zmień grupę
        </button>
        <button
          id="showSelectClassFormBtn"
          className="border-2 border-red-600 mx-1 sm:grow p-2 text-red-700 hover:bg-red-600 hover:text-white transition duration-200 font-bold rounded-sm text-lg sm:text-sm"
          onClick={onShowSelectClass}
        >
          Wybierz klasę
        </button>
        <button
          id="selectClassroomBtn"
          className="border-2 border-red-600 mx-1 sm:grow p-2 text-red-700 hover:bg-red-600 hover:text-white transition duration-200 font-bold rounded-sm text-lg sm:text-sm"
          onClick={onShowSelectClassroom}
        >
          Wybierz salę
        </button>
      </div>
    </div>
  );
};
export default ControlPanel;
