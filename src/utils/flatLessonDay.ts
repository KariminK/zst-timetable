const flatLessonDay = (lessonDay, group) =>
  lessonDay.reduce((acc, curr) => {
    if (curr.length === 0) {
      //sprawdzam czy tablica jest pusta
      acc.push(curr);
    } else {
      if (curr[0].groupName === undefined || curr[0].groupName === "1/1")
        // sprawdzam czy daną lekcje mają wszystkie grupy
        acc.push(curr[0]);
      else {
        const currGroupLesson = curr.filter((lesson) => {
          let slicedGroupname = lesson.groupName.slice(0, 1);
          return slicedGroupname == group;
        }); // wyszukuje w tablicy lekcji dla danej grupy
        if (currGroupLesson.length === 0)
          // jeśli aktualna grupa nie ma lekcji to wrzuca pustą tablicę
          acc.push([]);
        else {
          acc.push(currGroupLesson[0]);
        }
      }
    }
    return acc;
  }, []);
export default flatLessonDay;
