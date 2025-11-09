import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";
const IconHeadlineCopyCard = ({ headline, color1, color2, copy, icon }) => {
  let csscolor = null;
  if (color1 && color2) {
    csscolor = `background-image: linear-gradient(to right, ${color1}, ${color2});`;
  } else {
    csscolor = `background-image: linear-gradient(to right, ${Colors.green}, ${Colors.greenDark});`;
  }
  const IconHeadlineCopyCardHeadline = styled.h3`
    font-weight: 600;
    font-size: 28px;
    line-height: 114%;
    letter-spacing: 0.007em;

    text-align: left;

    color: transparent;
    ${csscolor};
    -webkit-background-clip: text;
    background-clip: text;

    margin-top: 12px;
    margin-bottom: 4px;

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
  `;
  const IconHeadlineCopyCard = styled.div`
    text-align: left;

    border-radius: 0.38rem;

    margin-bottom: 12px;
    width: 100%;

    float: left;
    background-color: ${Colors.back};

    ${Devices.tabletS} {
      width: 352px;
      height: 324px;
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
      width: 372px;
      height: 338.594px;
    }
    ${Devices.laptopM} {
      width: 372px;
      height: 338.594px;
    }
  `;

  const CardContent = styled.div`
    text-align: left;
    padding: 30px 30px 72px 30px;

    ${Devices.tabletS} {
      padding: 30px 30px 72px 30px;
    }
    ${Devices.tabletM} {
      padding: 30px 20px 72px 20px;
    }
    ${Devices.laptopS} {
      padding: 30px 20px 72px 20px;
    }
    ${Devices.laptopM} {
      padding: 30px 30px 71px 30px;
    }
  `;

  const IconHeadlineCopyCardCopy = styled.p`
    font-weight: 400;
    font-size: 17px;
    line-height: 123%;
    letter-spacing: 0.05em;

    text-align: left;
    color: ${Colors.primaryText.highEmphasis};

    margin-top: 13.6px;
    margin-bottom: 0px;

    ${Devices.tabletS} {
      font-size: 17px;
      line-height: 123%;
    }
    ${Devices.tabletM} {
      font-size: 17px;
      line-height: 123%;
    }
    ${Devices.laptopS} {
      font-size: 17px;
      line-height: 123%;
    }
  `;

  return (
    <IconHeadlineCopyCard>
      <CardContent>
        {icon && icon}
        {headline && (
          <IconHeadlineCopyCardHeadline>
            {headline}
          </IconHeadlineCopyCardHeadline>
        )}
        {copy && <IconHeadlineCopyCardCopy>{copy}</IconHeadlineCopyCardCopy>}
      </CardContent>
    </IconHeadlineCopyCard>
  );
};

export default IconHeadlineCopyCard;
