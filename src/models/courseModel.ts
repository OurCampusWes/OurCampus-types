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
}

export class CourseModelCollection {
  courses: { [key: string]: CourseModel };

  constructor({ courses }: { courses: { [key: string]: CourseModel } }) {
    this.courses = courses;
  }
}
