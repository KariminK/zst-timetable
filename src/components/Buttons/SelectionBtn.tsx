import { MouseEventHandler } from "react";

type props = {
  active: boolean;
  btnID: string;
  onSelect: MouseEventHandler<HTMLButtonElement>;
  text: string;
};

const SelectionBtn = ({ active, btnID, onSelect, text }: props) => {
  const activeClass = active ? " bg-red-600 text-white" : "";
  return (
    <button
      className={
        "p-2 border-2 m-1 text-xl grow font-medium border-red-600 rounded hover:scale-110 transition duration-200" +
        activeClass
      }
      id={`Class${btnID}`}
      onClick={onSelect}
    >
      {text}
    </button>
  );
};
export default SelectionBtn;
