export interface IMenu {
  status: string;
  item: IMenuItem[];
}

export interface IMenuItem {
  id: number;
  tabName: string;
  subTab: SubTab[];
}
export interface SubTab {
  subId: string;
  subTabName: string;
}
