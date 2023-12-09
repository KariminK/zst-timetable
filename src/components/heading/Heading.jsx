import "./heading.css";
const Heading = ({
  day,
  classroom,
  className,
  group,
  onIncrementDay,
  onDecrementDay,
}) => {
  let textDay;
  switch (day) {
    case 1:
      textDay = "Wtorek";
      break;
    case 2:
      textDay = "Środa";
      break;
    case 3:
      textDay = "Czwartek";
      break;
    case 4:
      textDay = "Piątek";
      break;
    default:
      textDay = "Poniedziałek";
  }
  return (
    <header>
      <button
        id="decrementDay"
        className="dayChangeBtn"
        onClick={onDecrementDay}
      >
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
        </svg>
      </button>
      <h1>
        {textDay}{" "}
        {classroom === ""
          ? `(${className} Grupa ${group})`
          : `sala ${classroom}`}
      </h1>
      <button
        id="incrementDay"
        className="dayChangeBtn"
        onClick={onIncrementDay}
      >
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
        </svg>
      </button>
    </header>
  );
};
export default Heading;
