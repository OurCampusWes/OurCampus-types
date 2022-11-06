import { DocumentReference } from '@firebase/firestore-types';

export type User = {
  token: string;
  incognito: boolean;
  email: string;
  os: 'IOS' | 'ANDROID';
  group: string;
  directory: string | DocumentReference;
  imageURL: string;
  blocked: boolean;
  displayName: string;
  menuSubscriptions: string[];
  orgSubscriptions: { id: string, type: 'c' | 's' }[];
  uid: string
};

export type TruncatedUser = {
  incognito: boolean;
  email: string;
  group: string;
  imageURL: string;
  displayName: string;
};

export type Notifications = {
  data: NotificationData;
  viewed: boolean;
  sender: string;
  string: string;
  type: number;
};

export type NotificationData = {
  body: string;
  restaurantId: string;
  title: string;
};