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
};

export type Review = {
  quality: number;
  grade: string;
  course: string;
  comment: string;
  string: string;
  recommended: boolean;
  difficulty: number;
  likes: string[];
  author: string;
  tags: number[];
};

export type Professor = {
  displayName: string;
  averageDifficulty: number;
  imageURL: string;
  departments: string[];
  averageQuality: number;
  totalReviews: number;
  reviews: { [key: string]: Review };
};