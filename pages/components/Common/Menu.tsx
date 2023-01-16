import { Accordion } from "@mui/material";
import {
  Subtitle1,
  Subtitle2,
  Subtitle3,
  Subtitle4,
} from "component/display/font";
import { IMenu, IMenuItem } from "pages/api/interface/menu";
import React from "react";
import styled from "styled-components";
import { Column, Row, typography } from "styles/theme";

export const MenuItem = ({ id, subTab, tabName }: IMenuItem) => {
  return (
    <TabWrapper>
      <Subtitle2 style={{ cursor: "pointer" }}>{tabName}</Subtitle2>
      <Column>
        {subTab.map((e) => (
          <SubTabWrapper>
            <Subtitle3 style={{ cursor: "pointer" }}>{e.subTabName}</Subtitle3>
          </SubTabWrapper>
        ))}
      </Column>
    </TabWrapper>
  );
};

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  align-items: space-between;
  width: 100%;
  color: ${({ theme }) => theme.text.font};
`;

const SubTabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem;

  &:hover {
    color: ${({ theme }) => theme.text.primary};
  }
`;
