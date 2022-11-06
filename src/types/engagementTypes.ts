import { Timestamp } from '@firebase/firestore-types';

export type Event = {
  imageURL: string;
  invited: string[];
  endDateTime: string | Timestamp;
  joined: string[];
  title: string;
  location: string;
  description: string;
  startDateTime: string | Timestamp;
  public: boolean;
  category: number;
  dateTimePosted:  string | Timestamp;
  author: string;
  flagged: string[];
  label: 'c' | 'u' | 's',
  dateTimeEdited: string | Timestamp;
  id: string;
  blockedUsers: string[];
};

export type Organization = {
  contact: string;
  dateTimePosted: string | Timestamp;
  author: string;
  description: string;
  link: string;
  displayName: string;
  label: string;
  events: string[];
  subscribers: string[];
  media: string[];
  imageURL: string;
  dateTimeEdited: string | Timestamp;
};

export type Advertisment = {
  appearance: 'dark' | 'light';
  description: string;
  id: string;
  imageUrl: string;
  snippet: string;
  gradientStartColor: string;
  gradientEndColor: string;
  links: Link[]
};

export type Link = {
  link: string;
  logoUrl: string;
  displayName: string
};