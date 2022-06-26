import {
  DocumentReference,
  DocumentSnapshot,
  QuerySnapshot,
} from 'firebase/firestore';
import { CourseType, SectionType } from '../types';

export class CourseModel implements CourseType {
  crosslistings: string[];
  displayName: string;
  link: string;
  sections: { [key: string]: SectionType };

  constructor(courseProps: CourseType) {
    this.crosslistings = courseProps.crosslistings;
    this.displayName = courseProps.displayName;
    this.link = courseProps.link;
    this.sections = courseProps.sections;
  }

  static _fromSnapshot(doc: DocumentSnapshot): CourseModel {
    const data = doc.data() as CourseType;
    return new CourseModel(data);
  }
}

export class CourseCollection {
  courses: { [key: string]: CourseModel };

  constructor({ courses }: { courses: { [key: string]: CourseModel } }) {
    this.courses = courses;
  }

  static fromSnapshot(query: QuerySnapshot, fromCache = true) {
    const res: { [key: string]: CourseModel } = {};
    const docs = query.docs;
    for (const doc of docs) {
      res[doc.id] = CourseModel._fromSnapshot(doc);
    }
    return res;
  }
}
