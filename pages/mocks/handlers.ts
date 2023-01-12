import { rest } from "msw";
import { menu } from "pages/api/data/menu";

export const handlers = [
  //메뉴 아이템 가져오기
  rest.get("/menus", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(menu));
  }),
];
