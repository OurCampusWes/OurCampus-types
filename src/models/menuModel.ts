import { DishType, MenuType } from '../types';

export class MenuModel implements MenuType {
  displayName: string;
  fixedMenu: unknown[];
  snippet: string;
  shortDisplayName: string;
  imageURL: string;
  menu: DishType[];
  fallbackURL: string;
  hours: unknown;

  constructor(menuProps: MenuType) {
    this.displayName = menuProps.displayName;
    this.fixedMenu = menuProps.fixedMenu;
    this.snippet = menuProps.snippet;
    this.shortDisplayName = menuProps.shortDisplayName;
    this.imageURL = menuProps.imageURL;
    this.menu = menuProps.menu;
    this.fallbackURL = menuProps.fallbackURL;
    this.hours = menuProps.hours;
  }
}

export class MenuCollection {
  menus: { [key: string]: MenuModel };

  constructor({ menus }: { menus: { [key: string]: MenuModel } }) {
    this.menus = menus;
  }
}
