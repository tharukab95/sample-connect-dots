/**
 * Interface for the 'Courses' data
 */
export interface CoursesEntity {
  id: string | number; // Primary ID
  name: string;
  seqNo:number;
  url:string;
  iconUrl: string;
  courseListIcon: string;
  description: string;
  longDescription?: string;
  category: string;
  lessonsCount: number;
  promo: boolean;
}

export interface Lesson {
  id: string | number; // Primary ID
  name: string;
  description: string;
  duration: string;
  seqNo: number;
  courseId: number;
}

export function sortEntries(seqNo1: number, seqNo2: number) {

  const compare = seqNo1 - seqNo2;

  if (compare > 0) {
    return 1;
  }
  else if ( compare < 0) {
    return -1;
  }
  else return 0;

}
