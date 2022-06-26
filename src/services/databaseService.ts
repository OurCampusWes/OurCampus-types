import { CollectionReference, Firestore, collection } from 'firebase/firestore';

export class DatabaseService {
  userCollection: CollectionReference;
  eventCollection: CollectionReference;
  orgEventCollection: CollectionReference;
  directoryCollection: CollectionReference;
  departmentCollection: CollectionReference;
  configCollection: CollectionReference;
  organizationCollection: CollectionReference;
  professorCollection: CollectionReference;
  restaurantCollection: CollectionReference;
  dishCollection: CollectionReference;
  courseCollection: CollectionReference;

  constructor(database: Firestore) {
    this.userCollection = collection(database, 'users');
    this.eventCollection = collection(database, 'events');
    this.orgEventCollection = collection(database, 'org-events');
    this.directoryCollection = collection(database, 'directory');
    this.departmentCollection = collection(database, 'departments');
    this.configCollection = collection(database, 'config');
    this.organizationCollection = collection(database, 'organizations');
    this.professorCollection = collection(database, 'professors');
    this.restaurantCollection = collection(database, 'menus');
    this.dishCollection = collection(database, 'dishes');
    this.courseCollection = collection(database, 'courses');
  }
}
