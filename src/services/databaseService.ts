import {
  CollectionReference,
  DocumentReference,
  Firestore,
  Query,
  collection,
} from "firebase/firestore";

export default class DatabaseService {
  db: Firestore | null = null;

  static set db(database: Firestore) {
    this.db = database;
  }

  static userCollection: CollectionReference = collection(this.db, "users");
  static eventCollection: CollectionReference = collection(this.db, "events");
  static orgEventCollection: CollectionReference = collection(
    this.db,
    "org-events"
  );
  static directoryCollection: CollectionReference = collection(
    this.db,
    "directory"
  );
  static departmentCollection: CollectionReference = collection(
    this.db,
    "departments"
  );
  static configCollection: CollectionReference = collection(this.db, "config");
  static organizationCollection: CollectionReference = collection(
    this.db,
    "organizations"
  );
  static professorCollection: CollectionReference = collection(
    this.db,
    "professors"
  );
  static restaurantCollection: CollectionReference = collection(
    this.db,
    "menus"
  );
  static dishCollection: CollectionReference = collection(this.db, "dishes");
}
