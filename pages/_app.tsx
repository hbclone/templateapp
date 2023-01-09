import type { AppProps } from "next/app";
import initMockAPI from "./mocks";
import BrowserLayout from "../component/Layout/BrowserLayout";
import { wrapper } from "./store";

function App({ Component, pageProps }: AppProps) {
  initMockAPI();

  return <BrowserLayout>{<Component {...pageProps} />}</BrowserLayout>;
}

export default wrapper.withRedux(App);
