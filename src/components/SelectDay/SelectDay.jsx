import "./selectDay.css";
const SelectDay = ({
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
      <div className="selectDayBtns">
        <button
          id="decrementDay"
          className="dayChangeBtn"
          onClick={onDecrementDay}
        >
          ←
        </button>
        <button
          id="incrementDay"
          className="dayChangeBtn"
          onClick={onIncrementDay}
        >
          →
        </button>
      </div>
    </div>
  );
};
export default SelectDay;
