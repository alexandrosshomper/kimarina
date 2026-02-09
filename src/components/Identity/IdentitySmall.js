import React from "react";
import styled from "@emotion/styled";

import Wortmarke from "./Wortmarke";

const IdentitySmall = (props) => {
  const IdentitySmall = styled.div`
    width: 105px;
    height: 33px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: right;
  `;

  const Logo = styled.div`
    width: 33px;
    height: 31px;
    background-image: url("/img/Identity/Logo/alexandros shomper logo@2x.png");
    background-size: contain;
    box-shadow: 0px 1px 0.1em black, 0 2px 0.2em black;
  `;

  return (
    <IdentitySmall>
      <Logo />
      <div style={{ marginTop: "4px" }}>
        <Wortmarke />
      </div>
    </IdentitySmall>
  );
};

export default IdentitySmall;
