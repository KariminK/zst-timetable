const SwitchDayBtn = ({ direction, onButtonClick }) => {
  return (
    <button
      id="decrementDay"
      className="fill-white bg-red-700 hover:scale-110 p-4 sm:p-2 rounded-full transition duration-200"
      onClick={onButtonClick}
    >
      {direction === "left" && (
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
        </svg>
      )}
      {direction === "right" && (
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
        </svg>
      )}
    </button>
  );
};
export default SwitchDayBtn;
