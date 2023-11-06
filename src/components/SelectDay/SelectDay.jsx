import "./selectDay.css";
const SelectDay = ({
  onIncrementDay,
  onDecrementDay,
  onChangeGroup,
  onShowSelectClass,
}) => {
  return (
    <div className="selectDay">
      <button
        id="decrementDay"
        className="dayChangeBtn"
        onClick={onDecrementDay}
      >
        ←
      </button>
      <div className="groupSelect">
        <button id="changeGroupBtn" onClick={onChangeGroup}>
          Zmień grupę
        </button>
        <button id="showSelectClassFormBtn" onClick={onShowSelectClass}>
          Wybierz klasę
        </button>
      </div>
      <button
        id="incrementDay"
        className="dayChangeBtn"
        onClick={onIncrementDay}
      >
        →
      </button>
    </div>
  );
};
export default SelectDay;
