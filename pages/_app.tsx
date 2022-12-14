import type { AppProps } from "next/app";
import initMockAPI from "./mocks";
import BrowserLayout from "../component/Layout/BrowserLayout";

export default function App({ Component, pageProps }: AppProps) {
  initMockAPI();

  return <BrowserLayout>{<Component {...pageProps} />}</BrowserLayout>;
}
