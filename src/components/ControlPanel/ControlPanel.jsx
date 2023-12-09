import "./controlPanel.css";
const ControlPanel = ({
  onIncrementDay,
  onDecrementDay,
  onChangeGroup,
  onShowSelectClass,
  onShowSelectClassroom,
}) => {
  return (
    <div className="selectDay">
      <div className="groupSelect">
        <button id="changeGroupBtn" onClick={onChangeGroup}>
          Zmień grupę
        </button>
        <button id="showSelectClassFormBtn" onClick={onShowSelectClass}>
          Wybierz klasę
        </button>
        <button id="selectClassroomBtn" onClick={onShowSelectClassroom}>
          Wybierz salę
        </button>
      </div>
    </div>
  );
};
export default ControlPanel;
