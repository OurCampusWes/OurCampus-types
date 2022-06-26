import { ProfessorType, ReviewType } from '../types';

export class ProfessorModel implements ProfessorType {
  displayName: string;
  averageDifficulty: number;
  imageURL: string;
  departments: string[];
  averageQuality: number;
  totalReviews: number;
  reviews: { [key: string]: ReviewType };

  constructor(professorProps: ProfessorType) {
    this.displayName = professorProps.displayName;
    this.averageDifficulty = professorProps.averageDifficulty;
    this.imageURL = professorProps.imageURL;
    this.departments = professorProps.departments;
    this.averageQuality = professorProps.averageQuality;
    this.totalReviews = professorProps.totalReviews;
    this.reviews = professorProps.reviews;
  }
}

export class ProfessorCollection {
  professors: { [key: string]: ProfessorModel };

  constructor({
    professors,
  }: {
    professors: { [key: string]: ProfessorModel };
  }) {
    this.professors = professors;
  }
}
