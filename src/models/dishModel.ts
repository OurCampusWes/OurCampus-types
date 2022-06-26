import { Timestamp } from 'firebase/firestore';
import { DishType } from '../types';

export class DishModel implements DishType {
  subscribers: string[];
  isVegetarian: boolean;
  isGlutenFree: boolean;
  isVegan: boolean;
  uid: number;
  title: string;
  lastSeen: Timestamp;
  description: string;

  constructor(dishProps: DishType) {
    this.subscribers = dishProps.subscribers;
    this.description = dishProps.description;
    this.isGlutenFree = dishProps.isGlutenFree;
    this.isVegetarian = dishProps.isVegetarian;
    this.isVegan = dishProps.isVegan;
    this.uid = dishProps.uid;
    this.lastSeen = dishProps.lastSeen;
    this.title = dishProps.title;
  }
}

export class DishCollection {
  dishs: { [key: string]: DishModel };

  constructor({ dishs }: { dishs: { [key: string]: DishModel } }) {
    this.dishs = dishs;
  }
}
