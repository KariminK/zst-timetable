export type schoolClass = {
  name: string;
  value: string;
};

export type classrooms = Array<string>;

export type lesson = {
  subject: string;
  teacher: string;
  teacherId: string;
  room: string;
  lessonNumber?: number;
  class?: string;
};

export type hour = {
  number: number;
  timeFrom: string;
  timeTo: string;
};
