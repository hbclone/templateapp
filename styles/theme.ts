import { injectGlobal } from "@emotion/css";
import styled from "@emotion/styled";
import emotionNormalize from "emotion-normalize";
import { FontStyle } from "../interface/global";

injectGlobal`
  ${emotionNormalize};
  @font-face {
    font-family: 'Apple SD Gothic Neo';
    src: url('/fonts/AppleSDGothicNeoL.ttf');
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: 'Apple SD Gothic Neo';
    src: url('/fonts/AppleSDGothicNeoR.ttf');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Apple SD Gothic Neo';
    src: url('/fonts/AppleSDGothicNeoM.ttf');
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: 'Apple SD Gothic Neo';
    src: url('/fonts/AppleSDGothicNeoEB.ttf');
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }
  @font-face {
    font-family: 'Apple SD Gothic Neo';
    src: url('/fonts/AppleSDGothicNeoB.ttf');
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }

  html {
    font-family: 'Apple SD Gothic Neo', san-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 9px;
    font-weight: 400;

    caret-color: #fd7e35;
  }
  * {
    box-sizing: border-box;
    --ios-top: env(safe-area-inset-top, 0);
    --ios-right: env(safe-area-inset-right, 0);
    --ios-bottom: env(safe-area-inset-bottom, 0);
    --ios-left: env(safe-area-inset-left, 0);
  }
  `;
//flex 형태의 DIV
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Row = styled.div`
  display: flex;
`;

//프로그램 내에 사용되는 폰트 정리
export const typography: { [key: string]: FontStyle } = {
  H1: {
    fontSize: "2.6rem",
    lineHeight: "3.4rem",
    fontWeight: 700,
  },
  H2: {
    fontSize: "2.4rem",
    fontWeight: 700,
    lineHeight: "3.2rem",
  },
  H2_Regular: {
    fontSize: "2.4rem",
    fontWeight: 400,
    lineHeight: "3.2rem",
  },
  Subtitle1: {
    fontSize: "2.0rem",
    fontWeight: 700,
    lineHeight: "2.8rem",
  },
  Subtitle2: {
    fontSize: "1.8rem",
    fontWeight: 700,
    lineHeight: "2.6rem",
  },
  Subtitle3: {
    fontSize: "1.6rem",
    fontWeight: 700,
    lineHeight: "2.2rem",
  },
  Subtitle4: {
    fontSize: "1.4rem",
    fontWeight: 700,
    lineHeight: "2.0rem",
  },
  Subtitle5: {
    fontSize: "1.2rem",
    fontWeight: 700,
    lineHeight: "1.4rem",
  },
  Subtitle6: {
    fontSize: "1rem",
    fontWeight: 700,
    lineHeight: "1.2rem",
  },
  //바디 1
  Body1: {
    fontSize: "1.8rem",
    fontWeight: 400,
    lineHeight: "2.4rem",
  },
  //바디 2
  Body2: {
    fontSize: "1.6rem",
    fontWeight: 400,
    lineHeight: "2.2rem",
  },
  //바다 3
  Body3: {
    fontSize: "1.4rem",
    fontWeight: 400,
    lineHeight: "2.0rem",
  },
  Body_md1: {
    fontSize: "1.8rem",
    fontWeight: 500,
    lineHeight: "2.4rem",
  },
  Body_md2: {
    fontSize: "1.6rem",
    fontWeight: 500,
    lineHeight: "2.0rem",
  },
  Body_md3: {
    fontSize: "1.4rem",
    fontWeight: 500,
    lineHeight: "1.8rem",
  },
  Body_md4: {
    fontSize: "1.2rem",
    fontWeight: 500,
    lineHeight: "1.8rem",
  },
  Body_md5: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: "1.2rem",
  },
  //캡션
  Caption1: {
    fontSize: "1.4rem",
    fontWeight: 500,
    lineHeight: "2.0rem",
  },
  //캡션
  Caption2: {
    fontSize: "1.0rem",
    fontWeight: 500,
    lineHeight: "1.8rem",
  },
};
