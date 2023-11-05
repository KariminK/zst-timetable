import { useState, useEffect } from "react";
import Timetable from "./components/TimeTable/Timetable";
import SelectDay from "./components/SelectDay/SelectDay";
function App() {
  const [day, setDay] = useState(0);
  const [group, setGroup] = useState(1);
  const [timetable, setTimetable] = useState([]);
  const [hours, setHours] = useState([]);

  const fetchdata = async () => {
    const [hoursRes, tableRes] = await Promise.all([
      fetch("http://127.0.0.1:3000/hours"),
      fetch("http://127.0.0.1:3000/table"),
    ]);
    const [hoursData, tableData] = await Promise.all([
      hoursRes.json(),
      tableRes.json(),
    ]);
    setHours(hoursData);
    setTimetable(tableData);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const incrementDayHandle = () => {
    if (day != 4) setDay(day + 1);
  };
  const decrementDayHandle = () => {
    if (day != 0) setDay(day - 1);
  };
  const changeGroupHandle = () => {
    if (group == 1) {
      setGroup(2);
    } else {
      setGroup(1);
    }
  };
  return (
    <>
      <Timetable day={day} timetable={timetable} hours={hours} group={group} />
      <SelectDay
        onDecrementDay={decrementDayHandle}
        onIncrementDay={incrementDayHandle}
        onChangeGroup={changeGroupHandle}
      />
    </>
  );
}

export default App;
