import ClassBtn from "./Class";
import "./selectClass.css";
const SelectClass = ({ onSelect, classes, visible, activeBtn }) => {
  if (visible) {
    return (
      <div className="selectClass">
        {...classes.map((classElement, index) => {
          if (index + 1 != activeBtn) {
            return (
              <ClassBtn
                nameOfClass={classElement.name}
                onSelect={onSelect}
                btnID={classElement.value}
                active={false}
              />
            );
          } else {
            return (
              <ClassBtn
                nameOfClass={classElement.name}
                onSelect={onSelect}
                btnID={classElement.value}
                active={true}
              />
            );
          }
        })}
      </div>
    );
  }
};
export default SelectClass;
