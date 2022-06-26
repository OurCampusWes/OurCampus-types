import { Timestamp } from 'firebase/firestore';
import { OrganizationType } from '../types';

export class OrganizationModel implements OrganizationType {
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

  constructor(organizationProps: OrganizationType) {
    this.contact = organizationProps.contact;
    this.dateTimePosted = organizationProps.dateTimePosted;
    this.author = organizationProps.author;
    this.description = organizationProps.description;
    this.link = organizationProps.link;
    this.displayName = organizationProps.displayName;
    this.label = organizationProps.label;
    this.events = organizationProps.events;
    this.subscribers = organizationProps.subscribers;
    this.media = organizationProps.media;
    this.imageURL = organizationProps.imageURL;
    this.dateTimeEdited = organizationProps.dateTimeEdited;
  }
}

export class OrganizationCollection {
  organizations: { [key: string]: OrganizationModel };

  constructor({
    organizations,
  }: {
    organizations: { [key: string]: OrganizationModel };
  }) {
    this.organizations = organizations;
  }
}
