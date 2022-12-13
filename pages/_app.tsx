import "../styles/globals.css";
import type { AppProps } from "next/app";
import initMockAPI from "./mocks";

export default function App({ Component, pageProps }: AppProps) {
  initMockAPI();

  return <Component {...pageProps} />;
}
