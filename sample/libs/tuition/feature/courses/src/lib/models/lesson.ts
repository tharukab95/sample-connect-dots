export interface Lesson {
    id: number;
    description: string;
    duration: string;
    course: number;
}


export function compareLessons(l1:Lesson, l2: Lesson) {

  const compareCourses = l1.course - l2.course;

  if (compareCourses > 0) {
    return 1;
  }
  else if (compareCourses < 0){
    return -1;
  }
  else {
    return l1.id - l2.id;
  }

}
