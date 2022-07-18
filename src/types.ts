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
  lastSeen: string;
  description: string;
};

export type EventType = {
  imageURL: string;
  invited: string[];
  endDateTime: string;
  joined: null[];
  title: string;
  location: string;
  description: string;
  startDateTime: string;
  public: boolean;
  category: number;
  dateTimePosted: string;
  author: string;
  flagged: null[];
  dateTimeEdited: string;
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
  dateTimePosted: string;
  author: string;
  description: string;
  link: string;
  displayName: string;
  label: string;
  events: string[];
  subscribers: string[];
  media: string[];
  imageURL: string;
  dateTimeEdited: string;
};

export type ReviewType = {
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
  directory: string;
  imageURL: string;
  blocked: boolean;
  displayName: string;
};

export type TruncatedUserType = {
  incognito: boolean;
  email: string;
  group: string;
  imageURL: string;
  displayName: string;
};

export type NotificationsType = {
  data: NotificationDataType;
  viewed: boolean;
  sender: string;
  string: string;
  type: number;
};

export type NotificationDataType = {
  body: string;
  restaurantId: string;
  title: string;
};
