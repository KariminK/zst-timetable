import SelectionBtn from "../Buttons/SelectionBtn";
const SelectClass = ({ onSelect, classes, activeBtn }) => {
  return (
    <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex w-96 flex-wrap border-2 bg-white p-2 border-red-600">
      {...classes.map((classElement, index) => {
        if (index + 1 != activeBtn) {
          return (
            <SelectionBtn
              text={classElement.name}
              onSelect={onSelect}
              btnID={classElement.value}
              active={false}
            />
          );
        } else {
          return (
            <SelectionBtn
              text={classElement.name}
              onSelect={onSelect}
              btnID={classElement.value}
              active={true}
            />
          );
        }
      })}
    </div>
  );
};
export default SelectClass;
