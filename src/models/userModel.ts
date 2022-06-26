import { DocumentData, DocumentReference, Timestamp } from 'firebase/firestore';
import { NotificationsType, UserType } from '../types';

export class UserModel implements UserType {
  token: string;
  incognito: boolean;
  email: string;
  os: string;
  group: string;
  directory: DocumentReference<DocumentData>;
  imageURL: string;
  blocked: boolean;
  displayName: string;
  notifications: NotificationsType;

  constructor(userProps: UserType) {
    this.token = userProps.token;
    this.incognito = userProps.incognito;
    this.email = userProps.email;
    this.os = userProps.os;
    this.group = userProps.group;
    this.directory = userProps.directory;
    this.imageURL = userProps.imageURL;
    this.blocked = userProps.blocked;
    this.displayName = userProps.displayName;
    this.notifications = userProps.notifications;
  }
}

export class TruncatedUserModel {
  incognito: boolean;
  email: string;
  group: string;
  imageURL: string;
  displayName: string;

  constructor(userProps: UserType) {
    this.incognito = userProps.incognito;
    this.email = userProps.email;
    this.group = userProps.group;
    this.imageURL = userProps.imageURL;
    this.displayName = userProps.displayName;
  }
}

export class UserModelCollection {
  users: { [key: string]: TruncatedUserModel };

  constructor({ users }: { users: { [key: string]: TruncatedUserModel } }) {
    this.users = users;
  }
}
