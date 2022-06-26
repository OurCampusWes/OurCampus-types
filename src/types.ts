import { DocumentReference, Timestamp } from 'firebase/firestore';

export type DepartmentType = {
  displayName: string;
  id: string;
  colors: string[];
};

export type SectionType = {
  instructorName: string;
  instructorUserName: string;
  seatsAvail: number;
};

export type CourseType = {
  crosslistings: string[];
  displayName: string;
  link: string;
  sections: { [key: string]: SectionType };
};

export type DishType = {
  subscribers: string[];
  isVegetarian: boolean;
  isGlutenFree: boolean;
  isVegan: boolean;
  uid: number;
  title: string;
  lastSeen: Timestamp;
  description: string;
};

export type EventType = {
  imageURL: string;
  invited: string[];
  endDateTime: Timestamp;
  joined: null[];
  title: string;
  location: string;
  description: string;
  startDateTime: Timestamp;
  public: boolean;
  category: number;
  dateTimePosted: Timestamp;
  author: string;
  flagged: null[];
  dateTimeEdited: Timestamp;
};

export type MenuType = {
  displayName: string;
  fixedMenu: unknown[];
  snippet: string;
  shortDisplayName: string;
  imageURL: string;
  menu: DishType[];
  fallbackURL: string;
  hours: unknown;
};

export type OrganizationType = {
  contact: string;
  dateTimePosted: Timestamp;
  author: string;
  description: string;
  link: string;
  displayName: string;
  label: string;
  events: string[];
  subscribers: string[];
  media: string[];
  imageURL: string;
  dateTimeEdited: Timestamp;
};

export interface ReviewType {
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
}

export type ProfessorType = {
  displayName: string;
  averageDifficulty: number;
  imageURL: string;
  departments: string[];
  averageQuality: number;
  totalReviews: number;
  reviews: { [key: string]: ReviewType };
};

export type UserType = {
  token: string;
  incognito: boolean;
  email: string;
  os: string;
  group: string;
  directory: DocumentReference;
  imageURL: string;
  blocked: boolean;
  displayName: string;
  notifications: NotificationsType;
};

export type NotificationsType = {
  data: NotificationDataType;
  viewed: boolean;
  sender: string;
  timestamp: Timestamp;
  type: number;
};

export type NotificationDataType = {
  body: string;
  restaurantId: string;
  title: string;
};
