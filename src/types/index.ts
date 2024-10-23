export type schoolClass = {
  name: string;
  value: string;
};

export type classrooms = string[];

export interface lesson {
  subject: string;
  teacher: string;
  teacherId: string;
  room: string;
}
export interface classroomLesson extends lesson {
  lessonNumber: number;
  class: string;
}

export type hour = {
  number: number;
  timeFrom: string;
  timeTo: string;
};
