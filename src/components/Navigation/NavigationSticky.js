import React, { useState, useMemo } from "react";
import ReactGA from "react-ga4";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

import { Devices, Colors } from "../DesignSystem";
import Button from "../Button/Button";
import LandingpageMenu from "./LandingpageMenu";
import IdentitySticky from "../Identity/IdentitySticky";
import { X, Menu } from "lucide-react";

const NavigationWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 52px;
  width: 100%;
  border-bottom: 1px solid;
  border-color: ${Colors.primaryText.highEmphasis};
  background-color: ${Colors.background};
  z-index: 1000;
`;

const StickyBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 52px;
  border-bottom: 1px solid;
  border-color: ${Colors.primaryText.highEmphasis};
  background-color: ${Colors.background};
  z-index: 1000;
  margin-right: 24px;
  margin-left: 24px;
  ${Devices.tabletS} {
    margin: 0 auto;
    width: 564px;
  }
  ${Devices.tabletM} {
    width: 708px;
  }
  ${Devices.laptopS} {
    width: 852px;
  }
  ${Devices.laptopM} {
    width: 1140px;
  }
`;

const GlobalNavCurtain = styled.div`
  background: rgba(232, 232, 237, 0.4);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  visibility: hidden;
  position: fixed;
  opacity: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
  transition: opacity 0.32s cubic-bezier(0.4, 0, 0.6, 1) 80ms,
    visibility 0.32s step-end 80ms;
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
  background: rgba(255, 255, 255, 0.7);
  opacity: 1;
  visibility: visible;
  transition: opacity 0.32s cubic-bezier(0.4, 0, 0.6, 1) 80ms,
    visibility 0.32s step-start 80ms;
  backdrop-filter: blur(20px);
`;

const NavigationMenuMobile = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 52px;
  z-index: 9999;
  margin-right: 24px;
  margin-left: 24px;
  ${Devices.tabletS} {
    margin: 0 auto;
    width: 564px;
  }
  ${Devices.tabletM} {
    width: 708px;
  }
  ${Devices.laptopS} {
    width: 852px;
  }
  ${Devices.laptopM} {
    width: 1140px;
  }
`;

const CTA = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 15px;
  gap: 12px;
  z-index: 9999;
`;

const MenuList = styled.ul`
  position: fixed;
  top: 48px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 24px 0 24px;
  gap: 16px;
  z-index: 9999;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  line-height: 1.1428571429;
  font-weight: 600;
  letter-spacing: 0.007em;
  text-decoration: none;
`;

const MenuLink = styled(Link)`
  font-size: 28px;
  line-height: 1.1428571429;
  font-weight: 600;
  letter-spacing: 0.007em;
  text-decoration: none;
`;

const MenuButton = styled.div`
  visibility: visible;
  display: block;
  ${Devices.tabletS} {
    visibility: hidden;
    display: none;
    flex-direction: row;
    align-items: center;
  }
`;

const NavigationSticky = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonClick = (e) => {
    e.preventDefault();
    setMenuOpen(true);
  };
  const closeButtonClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
  };

  const handleBookAudit = (e, href, instance = "navigation-sticky") => {
    e.preventDefault();
    ReactGA.event({
      category: "User",
      action: "Clicked Book Audit",
      label: `Book Audit - ${instance}`,
      value: 10,
      nonInteraction: false,
    });
    setTimeout(() => {
      window.location.href = href;
    }, 150);
  };
  const navigationLinks = useMemo(
    () => [
      { label: "Case Studies", to: "/case-studies" },
      { label: "Reports", to: "/reports" },
      { label: "Flow Gallery", to: "/flows" },
    ],
    []
  );
  return (
    <NavigationWrapper>
      {menuOpen ? (
        <NavigationMenuMobile>
          <CTA onClick={closeButtonClick}>
            <MenuButton>
              {" "}
              <X size={24} strokeWidth={1} onClick={closeButtonClick} />
            </MenuButton>
          </CTA>
          <MenuList>
            {navigationLinks.map((link) => {
              const isActive = currentPath === link.to;
              return (
                <MenuItem key={link.to}>
                  <MenuLink
                    to={link.to}
                    style={{
                      color: isActive
                        ? Colors.primaryText.highEmphasis
                        : Colors.primaryText.mediumEmphasis,
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </MenuLink>
                </MenuItem>
              );
            })}
          </MenuList>
        </NavigationMenuMobile>
      ) : (
        <StickyBar>
          <IdentitySticky />
          <CTA>
            <LandingpageMenu style={{ marginTop: "4px;" }} />

            <Button
              size="small"
              variant="primary"
              onClick={(e) =>
                handleBookAudit(
                  e,
                  "https://calendar.notion.so/meet/alexandros/onboarding-discovery",
                  "hero-section"
                )
              }
              text={"Book intro call"}
              gradient={{ from: Colors.blue, to: Colors.blueDark }}
            />
            <MenuButton onClick={menuButtonClick}>
              <Menu size={24} strokeWidth={1} />
            </MenuButton>
          </CTA>
        </StickyBar>
      )}
      {menuOpen && <GlobalNavCurtain />}
    </NavigationWrapper>
  );
};

export default NavigationSticky;
