import { useState, useEffect } from "react";
import Timetable from "./components/TimeTable/Timetable";
import SelectDay from "./components/SelectDay/SelectDay";
import SelectClass from "./components/SelectClass/SelectClass";
import "./app.css";
function App() {
  const [day, setDay] = useState(0);
  const [group, setGroup] = useState(1);
  const [classId, setClassId] = useState(1);
  const [classes, setClasses] = useState([]);
  const [timetable, setTimetable] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [hours, setHours] = useState([]);

  const fetchdata = async () => {
    const [hoursRes, tableRes, classRes] = await Promise.all([
      fetch("http://127.0.0.1:3000/hours"),
      fetch("http://127.0.0.1:3000/table?id=" + classId),
      fetch("http://127.0.0.1:3000/classes"),
    ]);
    const [hoursData, tableData, classData] = await Promise.all([
      hoursRes.json(),
      tableRes.json(),
      classRes.json(),
    ]);
    setHours(hoursData);
    setTimetable(tableData);
    setClasses(classData.classes);
  };
  useEffect(() => {
    fetchdata();
  }, [classId]);
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
  const selectClassHandle = (e) => {
    const classNum = e.target.id.slice(5, e.target.id.length);
    setClassId(classNum);
  };
  return (
    <>
      <Timetable day={day} timetable={timetable} hours={hours} group={group} />
      <SelectDay
        onDecrementDay={decrementDayHandle}
        onIncrementDay={incrementDayHandle}
        onChangeGroup={changeGroupHandle}
        onShowSelectClass={() =>
          !showForm ? setShowForm(true) : setShowForm(false)
        }
      />

      <SelectClass
        onSelect={selectClassHandle}
        classes={classes}
        visible={showForm}
      />
    </>
  );
}

export default App;
