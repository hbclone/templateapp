import styled from "@emotion/styled";
import { H1, Subtitle4 } from "component/display/font";
import Image from "next/image";
import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cube from "styles/Asset/cube.png";
import { Column } from "styles/theme";
import { ReducerType } from "pages/store/modules/RootReducer";
interface Menu {
  children: ReactElement;
}

const BrowserLayout = ({ children }: Menu) => {
  return (
    <Layout>
      <Menu>
        <ImageWrapper>
          <Image src={Cube} alt="mainImage" width={40} height={40} />
          <H1 color={"red"}>{}</H1>
        </ImageWrapper>
      </Menu>
      <H1 color={"red"}>{""}</H1>
      <Column>{children}</Column>
    </Layout>
  );
};

export default BrowserLayout;

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: white;
`;

const Menu = styled.div`
  display: flex;
  width: 5rem;
  height: 100%;
  color: black;
  border: 1px solid #252945;
  background-color: white;
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
