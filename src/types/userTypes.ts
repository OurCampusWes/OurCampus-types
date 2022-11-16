import { DocumentReference } from '@firebase/firestore-types';
import { Override } from './utilTypes';

export type User = {
  token: string;
  incognito: boolean;
  email: string;
  os: 'IOS' | 'ANDROID';
  group: string;
  directory: string;
  imageURL: string;
  blocked: boolean;
  blockedUsers: string[];
  displayName: string;
  menuSubscriptions: string[];
  orgSubscriptions: { id: string, type: 'c' | 's' }[];
  uid: string
};

export type UserDeserialized = Override<User, {
  directory: DocumentReference;
}>;

export type TruncatedUser = {
  incognito: boolean;
  email: string;
  group: string;
  imageURL: string;
  displayName: string;
};