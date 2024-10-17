const ControlBtn = ({ text, onButtonClick }) => {
  return (
    <button
      id="changeGroupBtn"
      className="border-2 border-red-600 mx-1 sm:grow p-2 text-red-700 hover:bg-red-600 hover:text-white transition duration-200 font-bold rounded-sm text-lg sm:text-sm"
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
};
export default ControlBtn;
