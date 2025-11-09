import React from "react";
import styled from "@emotion/styled";

const Wortmarke = (props) => {
  const Wortmarke = styled.img`
    width: 140px;
    height: 32px;
  `;
  const Wrapper = styled.a`
    width: 60.98px;
    height: 32px;
  `;

  return (
    <Wrapper href="/">
      <Wortmarke
        className="Wortmarke"
        src="/img/Identity/Wortmarke/wortmarke.svg"
        alt="Alexandros Shomper Wortmarke"
        href="/"
      ></Wortmarke>
    </Wrapper>
  );
};

export default Wortmarke;
