import createEmotionServer from "@emotion/server/create-instance";
import { cache } from "@emotion/css";

export const renderStatic = async (html: string) => {
  if (html === undefined) {
    throw new Error("renderToString 함수에서 html을 반환해야함");
  }
  const { extractCritical } = createEmotionServer(cache);
  const { ids, css } = extractCritical(html);

  return { html, ids, css };
};
