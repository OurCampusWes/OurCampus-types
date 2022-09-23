export type Menu = {
  displayName: string;
  fixedMenu: FixedDish[];
  snippet: string;
  shortDisplayName: string;
  imageURL: string;
  menu: MenuDish[];
  fallbackURL: string;
  hours: Hours;
};

export type FixedDish = {
  imageUrls: string[];
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
  lastSeen: string;
  description: string;
  station:string,
  timeOfDay: string,
  weekDay: string,
  id: string
};

export type Dish = {
  subscribers: string[];
  isVegetarian: boolean;
  isGlutenFree: boolean;
  isVegan: boolean;
  uid: number;
  title: string;
  lastSeen: string;
  description: string;
  id: string;
};

export type Hours = {
  isBreak: boolean;
  monday?: HourData;
  tuesday?: HourData;
  wednesday?: HourData;
  thursday?: HourData;
  friday?: HourData;
  satutday?: HourData;
  sunday?: HourData;
  weekday: HourData;
  weekend: HourData;
};

export type HourData = {
  allDay: number | undefined | null;
  breakfast: number | undefined | null;
  brunch: number | undefined | null;
  lunch: number | undefined | null;
  dinner: number | undefined | null;
};