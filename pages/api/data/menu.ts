import { IMenu } from "../interface/menu";

export const menu: IMenu[] = [
  {
    status: "",
    item: [
      {
        id: 1,
        tabName: "Home",
        subTab: {
          subId: "1-1",
          subTabName: "DashBoard",
        },
      },
      {
        id: 2,
        tabName: "Tables",
        subTab: {
          subId: "2-1",
          subTabName: "Table",
        },
      },
    ],
  },
];
