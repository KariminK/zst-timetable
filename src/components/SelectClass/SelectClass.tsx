import { MouseEventHandler } from "react";
import SelectionBtn from "../Buttons/SelectionBtn";
import { schoolClass } from "../../types";

type props = {
  onSelect: MouseEventHandler<HTMLButtonElement>;
  classes: schoolClass[];
  activeBtn: number;
};

const SelectClass = ({ onSelect, classes, activeBtn }: props) => {
  return (
    <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex w-96 flex-wrap border-2 bg-white p-2 border-red-600">
      {...classes.map((classElement, index) => {
        return (
          <SelectionBtn
            text={classElement.name}
            onSelect={onSelect}
            btnID={classElement.value}
            active={index + 1 == activeBtn}
          />
        );
      })}
    </div>
  );
};
export default SelectClass;
