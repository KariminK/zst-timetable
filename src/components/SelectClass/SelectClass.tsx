import SelectionBtn from "../Buttons/SelectionBtn";
import { schoolClass } from "../../types";
import { MouseEvent } from "react";

type props = {
  onSelect: (e: MouseEvent<HTMLButtonElement>, classname: schoolClass) => void;
  classes: schoolClass[];
  activeBtn: number;
};

const SelectClass = ({ onSelect, classes, activeBtn }: props) => {
  return (
    <div className="absolute flex flex-wrap p-2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-red-600 top-1/2 left-1/2 w-96">
      {...classes.map((classElement, index) => {
        return (
          <SelectionBtn
            text={classElement.name}
            onSelect={onSelect}
            classname={classElement}
            active={index + 1 == activeBtn}
          />
        );
      })}
    </div>
  );
};
export default SelectClass;
