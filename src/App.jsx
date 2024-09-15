import { useState, useEffect } from "react";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import SelectClass from "./components/SelectClass/SelectClass";
import SelectClassroom from "./components/SelectClassroom/SelectClassroom";
import Heading from "./components/heading/Heading";
import DayTimetable from "./components/TimeTable/DayTimetable";
import FullTimetable from "./components/TimeTable/FullTimetable";
function App() {
  const [day, setDay] = useState(0);
  const [group, setGroup] = useState(1);
  const [classId, setClassId] = useState(1);
  const [classes, setClasses] = useState([]);
  const [timetable, setTimetable] = useState([]);
  const [showClassSelection, setShowClassSelection] = useState(false);
  const [showClassroomSelection, setShowClassroomSelection] = useState(false);
  const [hours, setHours] = useState([]);
  const [allDayView, setAllDayView] = useState(false);
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

  const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    let url = `http://127.0.0.1:3000/${classId}/${group}/table?day=${day}`;
    if (classroom !== "")
      url = `http://127.0.0.1:3000/${classroom}/table?day=${day}`;
    if (allDayView) {
      if (classroom !== "") url = `http://127.0.0.1:3000/${classroom}/table`;
      else url = `http://127.0.0.1:3000/${classId}/${group}/table`;
    }

    console.log(
      "EFFECT FIRED! URL: ",
      url,
      "\n AllDayView: ",
      allDayView,
      "\n day: ",
      day,
      "\n hours: ",
      hours
    );
    fetchData(url).then((data) => {
      setTimetable(data);
    });
  }, [classId, group, day, classroom, allDayView]);
  useEffect(() => {
    fetchData(
      `http://127.0.0.1:3000/hours?id=${classroom ? "20" : classId}`
    ).then((data) => {
      setHours(data);
    });
  }, [classId, classroom, allDayView]);
  useEffect(() => {
    fetchData(`http://127.0.0.1:3000/classes`).then((data) => {
      setClasses(data.classes);
    });
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
      if (classId == 16 && group == 2) setGroup(3);
      else setGroup(1);
    }
  };
  const selectClassHandle = (e, classname) => {
    let classNum;
    if (classname) {
      classNum =
        classes.indexOf(
          classes.find((el) => {
            return el.name == classname;
          })
        ) + 1;
    } else classNum = e.target.id.slice(5, e.target.id.length);
    setClassroom("");
    setClassId(classNum);
    setShowClassSelection(false);
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
      {allDayView ? (
        <FullTimetable
          timetable={timetable}
          hours={hours}
          group={group}
          classroom={classroom}
          onClassSel={selectClassHandle}
          onClassroomSel={selectClassroomHandle}
        />
      ) : (
        <DayTimetable
          timetable={timetable}
          hours={hours}
          classroom={classroom}
          onClassSel={selectClassHandle}
          onClassroomSel={selectClassroomHandle}
        />
      )}

      <ControlPanel
        onChangeGroup={changeGroupHandle}
        onShowSelectClass={() => {
          setShowClassroomSelection(false);
          setShowClassSelection(!showClassSelection);
        }}
        onShowSelectClassroom={() => {
          setShowClassSelection(false);
          setShowClassroomSelection(!showClassroomSelection);
        }}
        onChangeView={() => {
          setAllDayView(!allDayView);
        }}
      />
      <div className="placeholder"></div>
      {showClassSelection && (
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
