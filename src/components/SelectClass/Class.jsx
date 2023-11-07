const ClassBtn = ({ onSelect, nameOfClass, btnID, active }) => {
  let activeClass = active ? "active" : "";
  return (
    <button
      className={"selectClassBtn " + activeClass}
      id={`Class${btnID}`}
      onClick={(e) => onSelect(e)}
    >
      {nameOfClass}
    </button>
  );
};
export default ClassBtn;
