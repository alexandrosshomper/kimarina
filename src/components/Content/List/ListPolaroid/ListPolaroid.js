import React from "react";
import styled from "@emotion/styled";

import { Devices } from "../../../DesignSystem";

import Eyebrow from "./ListPolaroidEyebrow";
import Image from "./ListPolaroidImage";
import Copy from "./ListPolaroidCopy";

const ListPolaroid = ({
  eyebrow,
  eyebrowColor1,
  eyebrowColor2,
  copy,
  imgURL,
}) => {
  const ListPolaroid = styled.div`
    text-align: left;

    margin-bottom: 60px;
    &:last-child {
      margin-bottom: 0px;
    }

    width: 272px;
    float: left;
    ${Devices.tabletS} {
      width: 564px;
    }
    ${Devices.tabletM} {
      width: 348px;
    }
    ${Devices.laptopS} {
      width: 420px;
    }
    ${Devices.laptopM} {
      width: 372px;
    }
  `;

  const PanelContent = styled.div`
    text-align: left;
    padding: 0px 0px 0px 0px;
  `;

  return (
    <ListPolaroid>
      <PanelContent>
        {imgURL && <Image imgURL={imgURL} />}
        {eyebrow && (
          <Eyebrow
            text={eyebrow}
            color1={eyebrowColor1}
            color2={eyebrowColor2}
          />
        )}
        {copy && <Copy text={copy} />}
      </PanelContent>
    </ListPolaroid>
  );
};

export default ListPolaroid;
