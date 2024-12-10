import { MouseEvent } from "react";
import { schoolClass } from "../../types";

type props = {
  active: boolean;
  classname: schoolClass;
  onSelect: (e: MouseEvent<HTMLButtonElement>, classname: schoolClass) => void;
  text: string;
};

const SelectionBtn = ({ active, classname, onSelect, text }: props) => {
  const activeClass = active ? " bg-red-600 text-white" : "";
  return (
    <button
      className={
        "p-2 border-2 m-1 text-xl grow font-medium border-red-600 rounded hover:scale-110 transition duration-200" +
        activeClass
      }
      id={`Class${classname.name}`}
      onClick={(e) => onSelect(e, classname)}>
      {text}
    </button>
  );
};
export default SelectionBtn;
