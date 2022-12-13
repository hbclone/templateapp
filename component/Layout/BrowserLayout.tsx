import styled from "@emotion/styled";
import Image from "next/image";
import React, { ReactElement } from "react";
import Cube from "../../styles/Asset/cube.png";
import { H1 } from "../display/font";

interface Menu {
  children: ReactElement;
}

const BrowserLayout = ({ children }: Menu) => {
  return (
    <Layout>
      <Menu>
        <ImageWrapper>
          <Image src={Cube} alt="mainImage" width={40} height={40} />
          <H1>Cube</H1>
        </ImageWrapper>
      </Menu>
      {children}
    </Layout>
  );
};

export default BrowserLayout;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: black;
`;

const Menu = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  color: black;
  align-items: center;
  background-color: white;
  padding: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
