import ClassBtn from "./ClassBtn/Class";
const SelectClass = ({ onSelect, classes, visible }) => {
  if (visible) {
    return (
      <div className="selectClass">
        {...classes.map((classElement) => {
          return (
            <ClassBtn
              nameOfClass={classElement.name}
              onSelect={onSelect}
              btnID={classElement.value}
            />
          );
        })}
      </div>
    );
  }
};
export default SelectClass;
