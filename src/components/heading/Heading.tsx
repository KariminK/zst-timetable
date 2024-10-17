import SwitchDayBtn from "../Buttons/SwitchDayBtn";
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
    <header className="text-3xl px-2 sm:text-lg text-center bg-sky-950 text-white font-bold flex items-center justify-center sm:justify-between gap-10  py-4 ">
      <SwitchDayBtn onButtonClick={onDecrementDay} direction={"left"} />
      <h1>
        {textDay}{" "}
        {classroom === ""
          ? `(${className} Grupa ${group})`
          : `sala ${classroom}`}
      </h1>
      <SwitchDayBtn onButtonClick={onIncrementDay} direction={"right"} />
    </header>
  );
};
export default Heading;
