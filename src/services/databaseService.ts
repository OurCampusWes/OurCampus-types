import { CollectionReference, Firestore, collection } from 'firebase/firestore';

export class DatabaseService {
  static userCollection = (database: Firestore): CollectionReference =>
    collection(database, 'users');

  static eventCollection = (database: Firestore): CollectionReference =>
    collection(database, 'events');

  static orgEventCollection = (database: Firestore): CollectionReference =>
    collection(database, 'org-events');

  static directoryCollection = (database: Firestore): CollectionReference =>
    collection(database, 'directory');

  static departmentCollection = (database: Firestore): CollectionReference =>
    collection(database, 'departments');

  static configCollection = (database: Firestore): CollectionReference =>
    collection(database, 'config');

  static organizationCollection = (database: Firestore): CollectionReference =>
    collection(database, 'organizations');

  static professorCollection = (database: Firestore): CollectionReference =>
    collection(database, 'professors');

  static restaurantCollection = (database: Firestore): CollectionReference =>
    collection(database, 'menus');

  static dishCollection = (database: Firestore): CollectionReference =>
    collection(database, 'dishes');

  static courseCollection = (database: Firestore): CollectionReference =>
    collection(database, 'courses');
}
