import { H1, Subtitle4 } from "component/display/font";
import Image from "next/image";
import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cube from "styles/Asset/cube.png";
import { Column, Row } from "styles/theme";
import { ReducerType } from "pages/store/modules/RootReducer";
import { changeMode, ColorMode } from "pages/store/modules/ColorMode";
import styled from "styled-components";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
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
          <Image src={Cube} alt="mainImage" width={40} height={40} />

          <Row style={{ gap: "1rem", alignItems: "center" }}>
            <NotificationsNoneOutlinedIcon
              style={{
                width: 25,
                height: 25,
                cursor: "pointer",
                color: "#262626",
              }}
            />

            {Color.mode ? (
              <DarkModeIcon
                onClick={changeItem}
                style={{
                  width: 20,
                  height: 20,
                  cursor: "pointer",
                  color: "#262626",
                }}
              />
            ) : (
              <LightModeIcon
                onClick={changeItem}
                style={{
                  width: 20,
                  height: 20,
                  cursor: "pointer",
                  color: "#262626",
                }}
              />
            )}
          </Row>
        </ImageWrapper>
      </Menu>
      <Column>{children}</Column>
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
  flex-direction: column;
  width: 30rem;
  height: 100%;
  background: ${({ theme }) => theme.text.primary};
  align-items: center;
  justify-content: space-between;
  border-right: ${({ theme }) => `1px solid ${theme.border.primary}`};
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background: ${({ theme }) => theme.bg.side};
  transition: all ease 1s 0s;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  height: 5rem;
  cursor: pointer;
`;

const ModeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  margin-bottom: 5rem;
`;
