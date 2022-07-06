import React from "react";

import LogoTempSVG from "src/assets/svg/logo-temp.svg";
import { navbarMenu } from "src/constants";

import * as S from "./styled";

export interface NavbarProps {
  alignMenuCenter?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ alignMenuCenter = false }) => (
  <S.NavbarContainer alignMenuCenter={alignMenuCenter}>
    <S.LogoWrapper>
      <LogoTempSVG />
    </S.LogoWrapper>
    <S.NavbarMenuListContainer alignMenuCenter={alignMenuCenter}>
      <S.NavbarMenuList>
        {navbarMenu.map((v) => (
          <S.StyledLink key={v.to} to={v.to} end>
            {v.text}
          </S.StyledLink>
        ))}
      </S.NavbarMenuList>
      <S.NavLoginButton variant="contained">로그인</S.NavLoginButton>
    </S.NavbarMenuListContainer>
  </S.NavbarContainer>
);
