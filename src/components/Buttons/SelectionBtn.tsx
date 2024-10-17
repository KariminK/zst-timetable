const SelectionBtn = ({ active, btnID, onSelect, text }) => {
  let activeClass = active ? " bg-red-600 text-white" : "";
  return (
    <button
      className={
        "p-2 border-2 m-1 text-xl grow font-medium border-red-600 rounded hover:scale-110 transition duration-200" +
        activeClass
      }
      id={`Class${btnID}`}
      onClick={(e) => onSelect(e)}
    >
      {text}
    </button>
  );
};
export default SelectionBtn;
