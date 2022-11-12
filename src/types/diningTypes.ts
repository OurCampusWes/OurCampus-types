import { Override } from './utilTypes';
import { Timestamp } from '@firebase/firestore-types';

export type Menu = {
  displayName: string;
  fixedMenu: FixedDish[];
  snippet: string;
  shortDisplayName: string;
  imageURL: string;
  menu: MenuDish[];
  fallbackURL: string;
  hours: Hours;
  dateTimeEdited: string;
};

export type MenuDeserialized = Override<Menu, {
  dateTimeEdited: Timestamp;
}>;

export type FixedDish = {
  imageURLS: string[];
  snippet: string;
  title: string;
};

export type MenuDish = {
  subscribers: string[];
  isVegetarian: boolean;
  isGlutenFree: boolean;
  isVegan: boolean;
  uid: number;
  title: string;
  description: string;
  station:string,
  timeOfDay: string,
  weekDay: string,
  lastSeen: string ;
};

export type MenuDishDeserialized = Override<MenuDish, {
  lastSeen: Timestamp;
}>;

export type Dish = {
  subscribers: string[];
  isVegetarian: boolean;
  isGlutenFree: boolean;
  isVegan: boolean;
  uid: number;
  title: string;
  description: string;
  lastSeen: string ;
};

export type DishDeserialized = Override<Dish, {
  lastSeen: Timestamp;
}>;

export type Hours = {
  isBreak: boolean;
  monday?: HourData;
  tuesday?: HourData;
  wednesday?: HourData;
  thursday?: HourData;
  friday?: HourData;
  saturday?: HourData;
  sunday?: HourData;
  weekday: HourData;
  weekend: HourData;
};

export type HourData = {
  allDay?: OpenClose;
  breakfast?: OpenClose;
  brunch?: OpenClose;
  lunch?: OpenClose;
  dinner?: OpenClose;
};

export type OpenClose = {
  open: string ;
  close: string ;
};