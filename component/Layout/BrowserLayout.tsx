import { H1, Subtitle4 } from "component/display/font";
import Image from "next/image";
import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cube from "styles/Asset/cube.png";
import { Column } from "styles/theme";
import { ReducerType } from "pages/store/modules/RootReducer";
import { changeMode, ColorMode } from "pages/store/modules/ColorMode";
import styled from "styled-components";
interface Menu {
  children: ReactElement;
}

const BrowserLayout = ({ children }: Menu) => {
  const dispatch = useDispatch();
  const Color = useSelector<ReducerType, ColorMode>((state) => state.ColorMode);

  const changeItem = () => {
    dispatch(changeMode());
  };
  return (
    <Layout>
      <Menu>
        <ImageWrapper>
          <Image
            onClick={changeItem}
            src={Cube}
            alt="mainImage"
            width={40}
            height={40}
          />
        </ImageWrapper>
      </Menu>
      <Column>
        {children}
        <H1 color={"red"}>{Color.mode ? "dark" : "white"}</H1>
      </Column>
    </Layout>
  );
};

export default BrowserLayout;

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.bg.primary};
  transition: all ease 1s 0s;
`;

const Menu = styled.div`
  display: flex;
  width: 10rem;
  height: 100%;
  background: ${({ theme }) => theme.text.primary};
  border-right: ${({ theme }) => `1px solid ${theme.border.primary}`};
  background: ${({ theme }) => theme.bg.side};
  transition: all ease 1s 0s;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  cursor: pointer;
`;
