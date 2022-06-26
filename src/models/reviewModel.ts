import { Timestamp } from 'firebase/firestore';
import { ReviewType } from '../types';

export class ReviewModel implements ReviewType {
  quality: number;
  grade: string;
  course: string;
  comment: string;
  timestamp: Timestamp;
  recommended: boolean;
  difficulty: number;
  likes: string[];
  author: string;
  tags: number[];

  constructor(reviewProps: ReviewType) {
    this.quality = reviewProps.quality;
    this.grade = reviewProps.grade;
    this.course = reviewProps.course;
    this.comment = reviewProps.comment;
    this.timestamp = reviewProps.timestamp;
    this.recommended = reviewProps.recommended;
    this.difficulty = reviewProps.difficulty;
    this.likes = reviewProps.likes;
    this.author = reviewProps.author;
    this.tags = reviewProps.tags;
  }
}

export class ReviewCollection {
  reviews: { [key: string]: ReviewModel };

  constructor({ reviews }: { reviews: { [key: string]: ReviewModel } }) {
    this.reviews = reviews;
  }
}
