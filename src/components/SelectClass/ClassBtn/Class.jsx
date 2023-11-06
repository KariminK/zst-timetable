const ClassBtn = ({ onSelect, nameOfClass, btnID }) => {
  return (
    <button
      className="selectClassBtn"
      id={`Class${btnID}`}
      onClick={(e) => onSelect(e)}
    >
      {nameOfClass}
    </button>
  );
};
export default ClassBtn;
