import type { AppProps } from "next/app";
import initMockAPI from "./mocks";
import BrowserLayout from "../component/Layout/BrowserLayout";
import { store, wrapper } from "./store";
import { Provider, useSelector } from "react-redux";
import { ReducerType } from "./store/modules/RootReducer";
import { ColorMode } from "./store/modules/ColorMode";
import { darkTheme, GlobalStyle, lightTheme } from "styles/theme";
import { ThemeProvider } from "styled-components";

function App({ Component, pageProps }: AppProps) {
  initMockAPI();
  const Color = useSelector<ReducerType, ColorMode>((state) => state.ColorMode);
  const theme = Color.mode ? darkTheme : lightTheme;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserLayout>{<Component {...pageProps} />}</BrowserLayout>;
      </ThemeProvider>
    </Provider>
  );
}

export default wrapper.withRedux(App);
