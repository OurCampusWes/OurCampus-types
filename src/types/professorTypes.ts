import { Timestamp } from '@firebase/firestore-types';
import { Override } from './utilTypes';

export type Department = {
  displayName: string;
  id: string;
  colors: string[];
};

export type Section = {
  instructorName: string;
  instructorUserName: string;
  seatsAvail: number;
};

export type Course = {
  crosslistings: string[];
  displayName: string;
  link: string;
  sections: { [key: string]: Section };
  dateTimeEdited: string ;
};

export type CourseDeserialized = Override< Course, {
  timestamp: Timestamp ;
  dateTimeEdited: Timestamp ;
}>;

export type Review = {
  quality: number;
  grade: string;
  course: string;
  comment: string;
  timestamp: string ;
  dateTimeEdited: string ;
  recommended: boolean;
  difficulty: number;
  likes: string[];
  author: string;
  tags: number[];
  id: string;
  professor: string;
  blockedUsers: string[];
  flagged: boolean
};

export type ReviewDeserialized = Override< Review, {
  timestamp: Timestamp ;
  dateTimeEdited: Timestamp ;
}>;

export type Professor = {
  displayName: string;
  averageDifficulty: number;
  imageURL: string;
  departments: string[];
  averageQuality: number;
  totalReviews: number;
  reviews: { [key: string]: Review };
  id: string;
  dateTimeEdited: string ;
};

export type ProfessorDeserialized = Override< Professor, {
  dateTimeEdited: Timestamp ;
}>;