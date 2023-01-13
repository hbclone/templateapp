export interface IMenu {
  status: string;
  item?: {
    id: number;
    tabName: string;
    subTab: {
      subId: string;
      subTabName: string;
    };
  }[];
}
