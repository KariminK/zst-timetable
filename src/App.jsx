import { useState, useEffect } from "react";
import Timetable from "./components/TimeTable/Timetable";
function App() {
  const [day, setDay] = useState(3);
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
  return (
    <>
      <Timetable day={3} timetable={timetable} hours={hours} group={1} />
    </>
  );
}

export default App;
