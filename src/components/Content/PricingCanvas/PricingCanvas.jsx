import React from "react";
import ReactGA from "react-ga4";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";
import { Check, Calculator, X } from "lucide-react";

import Button from "../../Button/Button";
const PricingCanvas = ({ roiCalcAction }) => {
  const PricingCanvas = styled.div`
    border-radius: 0.38rem;
    margin-bottom: 12px;
    background-color: ${Colors.back};

    grid-template-columns: 1.75fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    margin-bottom: calc(1 * var(--gap));
    margin-right: 12px;
    margin-left: 12px;

    ${Devices.tabletS} {
      width: 90%;
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
      grid-template-rows: auto;
      grid-template-columns: 0.75fr 1.25fr 1fr;
      grid-auto-columns: 1fr;
      display: grid;
    }
    ${Devices.laptopM} {
      width: 90%;
    }
  `;

  const PricingCanvasHeader = styled.div`
    display: flex;
    flex-direction: column;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2rem;
    border-right: none;

    ${Devices.laptopS} {
      border-right: 1px solid ${Colors.text.lowEmphasis};
    }
  `;
  const PricingCanvasBody = styled.div`
    display: flex;
    flex-direction: column;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2rem;
    border-right: none;

    ${Devices.laptopS} {
      border-right: 1px solid ${Colors.text.lowEmphasis};
    }
  `;
  const PricingCanvasPricetable = styled.div`
    display: flex;
    flex-direction: column;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2rem;
  `;

  const PricingCanvasCopy = styled.div`
    position: static;

    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    color: ${Colors.primaryText.highEmphasis};

    /* Inside Auto Layout */

    font-size: 18px;
    line-height: 140%;

    margin-top: 0px;
    margin-bottom: 0px;

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopM} {
      font-size: 24px;
      line-height: 133%;
      flex: 1;
    }
  `;

  const PricingCanvasHeadline2 = styled.h2`
    position: static;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;
    font-weight: bold;

    color: rgba(0, 169, 157, 1);

    flex: none;
    order: 0;
    flex-grow: 0;
    font-size: 32px;
    line-height: 100%;

    margin-top: 0px;
    margin-bottom: 20px;

    color: transparent;
    background-image: linear-gradient(
      to right,
      ${Colors.blue},
      ${Colors.blueLight}
    );
    -webkit-background-clip: text;
    background-clip: text;

    ${Devices.tabletS} {
      font-size: 38px;
      line-height: 110%;
    }
    ${Devices.tabletM} {
      font-size: 42px;
      line-height: 110%;
    }
    ${Devices.laptopS} {
    }
  `;
  const PricingCanvasHeadline3 = styled.h3`
    position: static;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;
    font-weight: bold;

    color: ${Colors.primaryText.highEmphasis};

    flex: none;
    order: 0;
    flex-grow: 0;
    font-size: 18px;
    line-height: 115%;

    margin-top: 3px;
    margin-bottom: 20px;

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
      font-size: 20px;
      line-height: 115%;
    }
    ${Devices.laptopS} {
    }
  `;
  const PricingCard = styled.div`
    margin-bottom: 2rem;

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
    ${Devices.laptopM} {
    }
  `;
  const PricingCardHeadline = styled.h4`
    font-weight: 600;
    font-size: 21px;
    line-height: 120%;

    text-align: left;

    color: grey;

    margin-top: 0px;
    margin-bottom: 0px;

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
    ${Devices.laptopM} {
      font-weight: 700;
      font-size: 24px;
      line-height: 120%;
    }
  `;
  const PricingCardPrice = styled.div`
    font-weight: 200;
    font-size: 52px;
    line-height: 120%;

    text-align: left;

    color: black;

    margin-top: 0px;
    margin-bottom: 28px;

    padding-bottom: 12px;

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopM} {
      font-weight: 200;
      font-size: 62px;
    }
  `;
  const PricingCardCopy = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;

    text-align: left;
    color: ${Colors.primaryText.lowEmphasis};

    margin-bottom: 0px;

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopM} {
      font-size: 14px;
      line-height: 130%;
    }
  `;
  const PanelList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-grow: 1;
    margin-bottom: 32px;
    width: 100%;
    background-color: ${Colors.back};
    border-radius: 16px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.06);
  `;

  const PanelListItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 12px;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);

    &:last-of-type {
      border-bottom: none;
    }
  `;

  const PriceBullet = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 20px;
    min-width: 20px;
    text-align: center;

    color: white;

    margin: 1px 0 0 0;

    background-color: blue;
    border-radius: 17px;
  `;
  const PanelHeadline = styled.h4`
    position: static;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;
    font-weight: bold;

    color: ${Colors.primaryText.highEmphasis};

    flex: none;
    order: 0;
    flex-grow: 0;
    font-size: 18px;
    line-height: 115%;

    margin-top: 0px;
    margin-bottom: 8px;

    ${Devices.tabletS} {
      font-size: 20px;
      line-height: 115%;
    }
    ${Devices.tabletM} {
      font-size: 20px;
      line-height: 115%;
    }
    ${Devices.laptopS} {
    }
  `;
  const PanelCopy = styled.p`
    font-weight: 400;
    font-size: 17px;
    line-height: 130%;

    text-align: left;
    color: ${Colors.primaryText.highEmphasis};

    margin-top: 0px;
    margin-bottom: 0px;

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
  `;

  const PanelComment = styled.p`
    font-weight: 400;
    font-size: 17px;
    line-height: 130%;

    text-align: left;
    color: ${Colors.primaryText.mediumEmphasis};

    margin-top: 0px;
    margin-bottom: 0px;

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
  `;
  //VIDEO
  const PricingVideo = styled.video`
    width: 100%;
    height: auto;
    display: block;
    margin: 0;
    padding: 0;
    border-radius: 12px;
    border: 1px solid ${Colors.textWhite.highEmphasis};
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
    aspect-ratio: 16 / 9;
    background-color: #000;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
  `;

  const PricingVideoWrapper = styled.div`
    position: relative;
    width: 100%;
    display: block;
    cursor: pointer;
  `;

  const PlayOverlayButton = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 56px;
    height: 56px;
    border-radius: 50%;
    backdrop-filter: blur(2px);
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: auto;
    z-index: 1;
    transition: background-color 120ms ease, box-shadow 120ms ease;
    will-change: backdrop-filter;
    animation: blurPulse 2.4s ease-in-out infinite;
    &:hover {
      background: rgba(255, 255, 255, 0.95);
    }

    @keyframes blurPulse {
      0% {
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
        background: rgba(255, 255, 255, 0.8);
      }
      50% {
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(4px);
        background: rgba(255, 255, 255, 0.6);
      }
      100% {
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
        background: rgba(255, 255, 255, 0.8);
      }
    }
  `;

  const LightboxOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.48);
    backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 24px;
  `;

  const LightboxContent = styled.div`
    position: relative;
    width: 100%;
    max-width: 1080px;
    aspect-ratio: 16 / 9;
    background: #000;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.35);
  `;

  const CloseLightboxButton = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    width: 44px;
    height: 44px;
    top: 16px;
    right: 16px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: none;
    background: #000000;
    color: #ffffff;
    background: #000000;
    color: #ffffff;
    cursor: pointer;
    display: inline-flex;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    z-index: 2;
    transition: transform 120ms ease, background-color 120ms ease;

    &:hover {
      background: #101010;
      transform: scale(1.03);
    }

    &:active {
      transform: scale(0.97);
    }

    &:focus-visible {
      outline: 2px solid #ffffff;
      outline-offset: 2px;
    }

    & svg {
      width: 20px;
      height: 20px;
    }
    padding: 0;
    z-index: 2;
    transition: transform 120ms ease, background-color 120ms ease;

    &:hover {
      background: #101010;
      transform: scale(1.03);
    }

    &:active {
      transform: scale(0.97);
    }

    &:focus-visible {
      outline: 2px solid #ffffff;
      outline-offset: 2px;
    }

    & svg {
      width: 20px;
      height: 20px;
    }
  `;

  const LOOM_VIDEO_URL =
    "https://www.loom.com/embed/94ad4dc7e038465a81e930c05aa4c21a";

  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);
  const hanldeWatchDemo = () => {
    ReactGA.event({
      category: "User",
      action: "watch_demo_clicked",
      label: "Watch Demo",
      value: 10,
      nonInteraction: false,
    });

    setTimeout(() => {
      setIsLightboxOpen(true);
    }, 150);
    console.log("Clicked Watch Demo");
  };

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <PricingCanvas>
      <PricingCanvasHeader>
        <PricingCanvasHeadline2>
          Onboarding Development Sprint
        </PricingCanvasHeadline2>
        <PricingCanvasCopy>
          A deep dive analysis of your product’s onboarding journey. <br /> I'll
          help you <b>get more new users</b> and make them{" "}
          <b>stick with your product</b>.
        </PricingCanvasCopy>
        <PricingVideoWrapper onClick={() => hanldeWatchDemo()}>
          <PricingVideo autoPlay loop muted playsInline>
            <source
              src="/img/SalesPitch/OnboardingDevelopmentSprint-SalesPitch-Cover.mp4"
              type="video/mp4"
            />
          </PricingVideo>
          <PlayOverlayButton aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56 56"
              width="60"
              height="60"
              style={{ color: Colors.primaryText.highEmphasis }}
            >
              <path
                fill="currentColor"
                d="m23.7555 36.6237c.4478 0 .8598-.1343 1.4241-.4568l10.9178-6.3322c.8598-.5016 1.3614-1.021 1.3614-1.8361 0-.8061-.5016-1.3255-1.3614-1.8271l-10.9178-6.3322c-.5643-.3314-.9762-.4657-1.4241-.4657-.9315 0-1.7555.7165-1.7555 1.9435v13.3629c0 1.227.824 1.9435 1.7555 1.9435z"
              />
            </svg>
          </PlayOverlayButton>
        </PricingVideoWrapper>
        {isLightboxOpen && (
          <LightboxOverlay onClick={() => setIsLightboxOpen(false)}>
            <LightboxContent onClick={(e) => e.stopPropagation()}>
              <CloseLightboxButton
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Close video"
              >
                <X aria-hidden="true" strokeWidth={2.5} />
                <X aria-hidden="true" strokeWidth={2.5} />
              </CloseLightboxButton>
              <iframe
                src={LOOM_VIDEO_URL}
                title="Loom video"
                allow="autoplay; fullscreen; clipboard-write"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  width: "100%",
                  height: "100%",
                  border: 0,
                  display: "block",
                }}
              />
            </LightboxContent>
          </LightboxOverlay>
        )}
      </PricingCanvasHeader>
      <PricingCanvasBody>
        <PricingCanvasHeadline3>What you'll get</PricingCanvasHeadline3>
        <PricingCanvasCopy>
          <PanelList>
            <PanelListItem>
              <PriceBullet>
                <Check size={16} strokeWidth={2.5} />
              </PriceBullet>
              <PanelCopy>
                <PanelHeadline>
                  Onboarding & Activation Journey Map
                </PanelHeadline>
                I'm reviewing your user onboarding journey, assessing{" "}
                <b>persona based</b> sign-up flow, activation, metrics, and user
                feedback
              </PanelCopy>
            </PanelListItem>
            <PanelListItem>
              <PriceBullet>
                <Check size={16} strokeWidth={2.5} />
              </PriceBullet>
              <PanelCopy>
                <PanelHeadline>Wireframes + Copy</PanelHeadline>
                Wireframes of the new, improved onboarding journey incl. copy,
                empty, states etc. that'll help you get more new users, make
                them stick, and convert
              </PanelCopy>
            </PanelListItem>
            <PanelListItem>
              <PriceBullet>
                <Check size={16} strokeWidth={2.5} />
              </PriceBullet>
              <PanelCopy>
                <PanelHeadline>Positioning Canvas</PanelHeadline>A canvas with a
                refined positioning and a set of messaging for your landingpage
                and communication your product effectively to your ICP.
              </PanelCopy>
            </PanelListItem>
            <PanelListItem>
              <PriceBullet>
                <Check size={16} strokeWidth={2.5} />
              </PriceBullet>
              <PanelCopy>
                <PanelHeadline>Prioritized To Do List</PanelHeadline>A list of
                improvements and experiments for your new user onboarding
                journey, prioritized and ready to go
              </PanelCopy>
            </PanelListItem>
          </PanelList>
          <PanelComment>
            If you’re not satisfied with the audit deliverables, I’ll revise
            once for free in 7 days.
          </PanelComment>
        </PricingCanvasCopy>
      </PricingCanvasBody>
      <PricingCanvasPricetable>
        <PricingCanvasHeadline3>
          Pricing tiers based on your size:
        </PricingCanvasHeadline3>
        <PricingCanvasCopy>
          <PricingCard>
            <PricingCardCopy>
              <PricingCardPrice>
                {" "}
                <PricingCardHeadline>
                  Early Stage
                  <span style={{ color: "grey", fontWeight: "400" }}>
                    , <span style={{ lineHeight: "" }}>&lt;</span> 1M ARR
                  </span>
                </PricingCardHeadline>
                € 5.000
              </PricingCardPrice>
            </PricingCardCopy>
          </PricingCard>
          <PricingCard>
            <PricingCardCopy>
              <PricingCardPrice>
                {" "}
                <PricingCardHeadline>
                  Growth Stage
                  <span style={{ color: "grey", fontWeight: "400" }}>
                    , 1M – 5M ARR
                  </span>
                </PricingCardHeadline>
                € 10.000
              </PricingCardPrice>
            </PricingCardCopy>
          </PricingCard>
          <PricingCard>
            <PricingCardCopy>
              <PricingCardPrice>
                {" "}
                <PricingCardHeadline>
                  Scale Up
                  <span style={{ color: "grey", fontWeight: "400" }}>
                    , 5M – 15M ARR
                  </span>
                </PricingCardHeadline>
                € 15.000
              </PricingCardPrice>
            </PricingCardCopy>
          </PricingCard>
          <PricingCard>
            <PricingCardCopy>
              <PricingCardPrice>
                {" "}
                <PricingCardHeadline>
                  Mature
                  <span style={{ color: "grey", fontWeight: "400" }}>
                    , +15M ARR
                  </span>
                </PricingCardHeadline>
                € 25.000
              </PricingCardPrice>
            </PricingCardCopy>
            <Button
              size="medium"
              variant="text"
              text="Calculate Onboarding ROI"
              onClick={roiCalcAction}
              icon={<Calculator size="18px" />}
              color={Colors.blue}
            />
          </PricingCard>
        </PricingCanvasCopy>
      </PricingCanvasPricetable>
    </PricingCanvas>
  );
};

export default PricingCanvas;
