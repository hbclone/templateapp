import type { AppProps } from "next/app";
import initMockAPI from "./mocks";
import BrowserLayout from "../component/Layout/BrowserLayout";
import { useAppSelector, wrapper } from "./store";
import { darkTheme, GlobalStyle, lightTheme } from "styles/theme";
import { ThemeProvider } from "styled-components";

function App({ Component, pageProps }: AppProps) {
  initMockAPI();
  const Color = useAppSelector((state) => state.ColorMode);
  const theme = Color.mode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={Color.mode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <BrowserLayout>{<Component {...pageProps} />}</BrowserLayout>;
    </ThemeProvider>
  );
}

export default wrapper.withRedux(App);
