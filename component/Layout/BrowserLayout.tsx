import Image from "next/image";
import React, { ReactElement, useEffect } from "react";
import Cube from "styles/Asset/cube.png";
import { BaseMode, Column, Row } from "styles/theme";
import { changeMode } from "pages/store/modules/ColorMode";
import styled from "styled-components";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { fetchMenu } from "pages/store/modules/Menu";
import { useAppDispatch, useAppSelector } from "pages/store";
import Button from "@mui/material/Button";
import { MenuItem } from "pages/components/Common/Menu";
import { IMenu, IMenuItem } from "pages/api/interface/menu";
interface Menu {
  children: ReactElement;
}

const BrowserLayout = ({ children }: Menu) => {
  const dispatch = useAppDispatch();
  const Color = useAppSelector((state) => state.ColorMode);
  const item = useAppSelector((state) => state.Menu?.item[0]?.item);

  const changeItem = () => {
    dispatch(changeMode());
  };

  useEffect(() => {
    //msw가 서비스 워커에 등록되기 전에 redux에서 동작하는 현상 방지를 위해 딜레이를 줌
    setTimeout(() => dispatch(fetchMenu()), 1000);
  }, [dispatch]);

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
        <TableWrapper>
          {item?.map((e: IMenuItem) => {
            console.log("e :>> ", e);
            return <MenuItem id={e.id} tabName={e.tabName} subTab={e.subTab} />;
          })}
        </TableWrapper>
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
  transition: background-color ease 1s;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 100%;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  ${BaseMode}
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  height: 5rem;
  cursor: pointer;
  margin-bottom: 3rem;
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;
