import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <FooterWrap>
        <Copyright>&copy; 2020 created by riunge maina</Copyright>
      </FooterWrap>
    </>
  );
}
const FooterWrap = styled.footer`
  background-color: #000;
`;

const Copyright = styled.p`
  padding: 20px;
  color: #fff;
`;
