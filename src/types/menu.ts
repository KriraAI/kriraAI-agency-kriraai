export type Menu = {
  id: number | string;
  title: string;
  path?: string;
  icon?: string;
  newTab: boolean;
  submenu?: Menu[];
};

export type menuService = {
  id: number | string;
  title: string;
  link?: string;
  work?: string;
  items: string[];
  image: string;
};
