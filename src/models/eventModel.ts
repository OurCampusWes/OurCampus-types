import { Timestamp } from 'firebase/firestore';
import { EventType } from '../types';

export class EventModel implements EventType {
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

  constructor(eventProps: EventType) {
    this.imageURL = eventProps.imageURL;
    this.invited = eventProps.invited;
    this.joined = eventProps.joined;
    this.location = eventProps.location;
    this.description = eventProps.description;
    this.startDateTime = eventProps.startDateTime;
    this.public = eventProps.public;
    this.category = eventProps.category;
    this.dateTimePosted = eventProps.dateTimePosted;
    this.author = eventProps.author;
    this.flagged = eventProps.flagged;
    this.dateTimeEdited = eventProps.dateTimeEdited;
    this.endDateTime = eventProps.endDateTime;
    this.title = eventProps.title;
  }
}

export class EventModelCollection {
  events: { [key: string]: EventModel };

  constructor({ events }: { events: { [key: string]: EventModel } }) {
    this.events = events;
  }
}
