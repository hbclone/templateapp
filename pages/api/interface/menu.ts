export interface IMenu {
  id: number;
  tabName: string;
  subTab: {
    subId: string;
    subTabName: string;
  };
}
