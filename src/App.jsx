import { useState, useEffect } from "react";
import Timetable from "./components/TimeTable/Timetable";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import SelectClass from "./components/SelectClass/SelectClass";
import "./app.css";
import SelectClassroom from "./components/SelectClassroom/SelectClassroom";
import Heading from "./components/heading/Heading";
function App() {
  const [day, setDay] = useState(0);
  const [group, setGroup] = useState(1);
  const [classId, setClassId] = useState(1);
  const [classes, setClasses] = useState([]);
  const [timetable, setTimetable] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [hours, setHours] = useState([]);
  const [showClassroomSelection, setShowClassroomSelection] = useState(false);
  const [classroom, setClassroom] = useState("");
  const classrooms = [
    "55",
    "52",
    "18",
    "73",
    "74",
    "16",
    "22",
    "wf2",
    "57",
    "26",
    "A1",
    "13",
    "50",
    "6",
    "20",
    "C1",
    "56",
    "Boisk1",
    "19",
    "71",
    "42",
    "79",
    "65",
    "21",
    "72",
    "77",
    "48",
    "84",
    "A2",
    "A3",
    "53",
    "69",
    "24",
    "5",
    "82",
    "Boisk2",
    "wf1",
    "41",
    "81",
    "75",
  ];
  classrooms.sort();
  const fetchClassData = async () => {
    const [hoursRes, tableRes, classRes] = await Promise.all([
      fetch("http://127.0.0.1:3000/hours?id=" + classId),
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
  const fetchClassroomData = async () => {
    if (classroom !== "") {
      const [classroomRes, hoursRes] = await Promise.all([
        fetch(
          `http://127.0.0.1:3000/classRoomLessons?day=${day}&classroom=${classroom}`
        ),
        fetch("http://127.0.0.1:3000/hours?id=20"),
      ]);
      const [classroomData, hoursData] = await Promise.all([
        classroomRes.json(),
        hoursRes.json(),
      ]);
      setTimetable(classroomData);
      setHours(hoursData);
    }
  };
  useEffect(() => {
    fetchClassData();
  }, [classId]);
  useEffect(() => {
    fetchClassroomData();
  }, [classroom, day]);
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
      if (classId == 16 && group == 2) setGroup(3);
      else setGroup(1);
    }
  };
  const selectClassHandle = (e) => {
    const classNum = e.target.id.slice(5, e.target.id.length);
    setClassroom("");
    setClassId(classNum);
    setShowForm(false);
  };
  const selectClassroomHandle = (e) => {
    setClassroom(e.target.textContent);
    setShowClassroomSelection(false);
    setClassId(-1);
  };
  return (
    <>
      <Heading
        day={day}
        className={classes[classId - 1]?.name}
        classroom={classroom}
        group={group}
        onIncrementDay={incrementDayHandle}
        onDecrementDay={decrementDayHandle}
      />
      <Timetable
        day={day}
        timetable={timetable}
        hours={hours}
        group={group}
        classroom={classroom}
      />
      <ControlPanel
        onChangeGroup={changeGroupHandle}
        onShowSelectClass={() => !showClassroomSelection && setShowForm(true)}
        onShowSelectClassroom={() =>
          !showForm && setShowClassroomSelection(true)
        }
      />
      <div className="placeholder"></div>
      {showForm && (
        <SelectClass
          onSelect={selectClassHandle}
          classes={classes}
          activeBtn={classId}
        />
      )}
      {showClassroomSelection && (
        <SelectClassroom
          classrooms={classrooms}
          currentClassroom={classroom}
          onSelectClassroom={selectClassroomHandle}
        />
      )}
    </>
  );
}

export default App;
