import { Override } from './utilTypes';
import { Timestamp } from '@firebase/firestore-types';

export type Event = {
  imageURL: string;
  invited: string[];
  joined: string[];
  title: string;
  location: string;
  description: string;
  public: boolean;
  category: number;
  author: string;
  flagged: boolean;
  label: 'c' | 'u' | 's';
  id: string;
  blockedUsers: string[];
  dateTimePosted: string ;
  startDateTime: string;
  endDateTime: string;
  dateTimeEdited: string ;
};

export type EventDeserialized = Override<Event, {
  startDateTime: Timestamp ;
  endDateTime: Timestamp;
  dateTimePosted: Timestamp;
  dateTimeEdited: Timestamp;
}>;

export type Organization = {
  contact: string;
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
  dateTimePosted: string ;
};

export type OrganizationDeserialized = Override<Organization, {
  dateTimeEdited: Timestamp;
  dateTimePosted: Timestamp ;
}>;

export type Advertisement = {
  appearance: 'dark' | 'light';
  description: string;
  displayName: string;
  id: string;
  imageUrl: string;
  snippet: string;
  gradientStartColor: string;
  gradientEndColor: string;
  links: Link[];
};

export type Link = {
  link: string;
  logoUrl: string;
  displayName: string;
};
