import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";

//Components
import { Colors, Devices } from "../../DesignSystem";
import SectionHead from "../../Content/Section/SectionHead";

import CaseCard from "../../Content/CaseCard/CaseCard";
import CaseSectionSummary from "../../Content/Case/CaseSectionSummary";
import caseStudiesData from "../../../data/casestudies/casestudies.json";

const CASE_STUDY_TYPES = {
  ALL: "All Case Studies",
  ONBOARDING: "Onboarding Case Studies",
  GENERAL: "General Case Studies",
};

const CASE_STUDY_METADATA = {
  asana: {
    eyebrow: "Case Study",
    eyebrowColor1: "#FD594A",
    eyebrowColor2: "#FFEAED",
    headline:
      "Asana – How positioning for teams & enterprise impacts your segmentation, setup, and plan selection",
    copy: "",
    imgURL: "/img/case_studies/asana/Cover@2x.png",
    link: "/case-studies/asana",
    comingSoon: false,
  },
  wrike: {
    eyebrow: "Case Study",
    eyebrowColor1: "#07CE66",
    eyebrowColor2: "#6DFF6A",
    headline: "Wrike",
    copy: "",
    imgURL: "/img/case_studies/wrike/Cover@2x.png",
    comingSoon: true,
  },
  linear: {
    eyebrow: "Case Study",
    eyebrowColor1: "#5E6AD2",
    eyebrowColor2: "#8BACFF",
    headline: "Linear",
    copy: "",
    imgURL: "/img/case_studies/linear/Cover@2x.png",
    comingSoon: true,
  },
  trello: {
    eyebrow: "Case Study",
    eyebrowColor1: "#126AE5",
    eyebrowColor2: "#9FD5FF",
    headline: "Trello",
    copy: "",
    imgURL: "/img/case_studies/trello/Cover@2x.png",
    comingSoon: true,
  },
  "chatgpt-apps": {
    eyebrow: "Case Study",
    eyebrowColor1: "#111827",
    eyebrowColor2: "#9CA3AF",
    headline: "Booking vacation with ChatGPT Apps",
    copy: "",
    imgURL: "/img/case_studies/chatgpt-apps/Cover@2x.png",
    comingSoon: true,
  },
};

const mapCaseStudyType = (type) => {
  if (type === CASE_STUDY_TYPES.ONBOARDING) {
    return CASE_STUDY_TYPES.ONBOARDING;
  }

  if (type === CASE_STUDY_TYPES.GENERAL) {
    return CASE_STUDY_TYPES.GENERAL;
  }

  if (type === "General Case Study") {
    return CASE_STUDY_TYPES.GENERAL;
  }

  return type;
};

const CASE_STUDIES = caseStudiesData.map((caseStudy) => {
  const slugKey = caseStudy.slug.split("/").pop();
  const metadata = CASE_STUDY_METADATA[slugKey] || {};

  return {
    id: slugKey || caseStudy.id,
    type: mapCaseStudyType(caseStudy.type),
    eyebrow: metadata.eyebrow || "Case Study",
    eyebrowColor1: metadata.eyebrowColor1,
    eyebrowColor2: metadata.eyebrowColor2,
    headline: metadata.headline || caseStudy.name,
    copy: metadata.copy || caseStudy.desc,
    imgURL: metadata.imgURL || caseStudy.cover,
    link: metadata.link,
    comingSoon: metadata.comingSoon || false,
  };
});

const KNOWN_CASE_STUDY_TYPE_ORDER = [
  CASE_STUDY_TYPES.ONBOARDING,
  CASE_STUDY_TYPES.GENERAL,
];

const FILTER_OPTIONS = [
  CASE_STUDY_TYPES.ALL,
  ...Array.from(
    new Set(CASE_STUDIES.map(({ type }) => type).filter(Boolean))
  ).sort((typeA, typeB) => {
    const indexA = KNOWN_CASE_STUDY_TYPE_ORDER.indexOf(typeA);
    const indexB = KNOWN_CASE_STUDY_TYPE_ORDER.indexOf(typeB);

    if (indexA === -1 && indexB === -1) {
      return typeA.localeCompare(typeB);
    }

    if (indexA === -1) {
      return 1;
    }

    if (indexB === -1) {
      return -1;
    }

    return indexA - indexB;
  }),
];

const Content = (props) => {
  const [selectedType, setSelectedType] = useState(CASE_STUDY_TYPES.ALL);

  const filteredCaseStudies = useMemo(() => {
    if (selectedType === CASE_STUDY_TYPES.ALL) {
      return CASE_STUDIES;
    }

    return CASE_STUDIES.filter((caseStudy) => caseStudy.type === selectedType);
  }, [selectedType]);

  const Content = styled.div`
    text-align: left;
    margin-top: 72px;
  `;

  const Section = styled.section`
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    /* Inside Auto Layout */
    flex: none;
    order: 3;
    align-self: stretch;
    flex-grow: 0;
    margin-bottom: 200px;
  `;

  const CaseCardGrid = styled.section`
    margin: 0px 24px 0px 24px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    --gap: 24px;
    gap: var(--gap);
    ${Devices.tabletS} {
      width: 564px;
    }
    ${Devices.tabletM} {
      margin: 0px 0px 0px 0px;

      width: 708px;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    ${Devices.laptopS} {
      width: 864px;
    }
    ${Devices.laptopM} {
      width: 1140px;
      --gap: 12px;
    }
  `;
  const Panels = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: auto;
    justify-content: flex-start;
    align-content: center;
    align-items: flex-start;
    gap: 12px;

    margin: 0px;
    ${Devices.tabletS} {
      width: 576px;
    }
    ${Devices.tabletM} {
      width: 720px;
      flex-direction: row;
    }
    ${Devices.laptopS} {
      width: 864px;
    }
    ${Devices.laptopM} {
      width: 1152px;
    }
  `;

  const FilterBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin: 32px 24px 24px 24px;

    ${Devices.tabletS} {
      width: 564px;
    }

    ${Devices.tabletM} {
      margin: 32px 0 24px 0;
      width: 708px;
      justify-content: flex-start;
    }

    ${Devices.laptopS} {
      width: 864px;
    }

    ${Devices.laptopM} {
      width: 1140px;
    }
  `;

  const FilterButton = styled.button`
    border-radius: 999px;
    border: 1px solid
      ${(props) => (props.isActive ? Colors.blue : "rgba(0, 0, 0, 0.12)")};
    background-color: ${(props) =>
      props.isActive ? Colors.blue : Colors.background};
    color: ${(props) =>
      props.isActive ? Colors.textWhite.highEmphasis : Colors.text};
    cursor: pointer;
    font-size: 14px;
    font-weight: ${(props) => (props.isActive ? 600 : 500)};
    letter-spacing: 0.01em;
    padding: 10px 18px;
    transition: all 0.2s ease;

    &:hover,
    &:focus {
      border-color: ${Colors.blue};
      color: ${(props) =>
        props.isActive ? Colors.textWhite.highEmphasis : Colors.blue};
      outline: none;
    }
  `;

  const EmptyState = styled.p`
    color: ${Colors.primaryText.mediumEmphasis};
    font-size: 16px;
    line-height: 150%;
    margin: 48px 0;
    max-width: 420px;
    text-align: center;
  `;

  return (
    <Content>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Case Studies | Alexandros Shomper</title>
        <description>
          Digital Anthopologist. Experienced Product-, Service & Business
          Designer with demonstrated track record of successfully developing
          meaningful experiences that people love by using emerging technology,
          solid company purpose, and a strong brand to elevate human experiences
          and interactions.
        </description>
      </Helmet>
      <Section>
        <SectionHead
          headline="Case Studies"
          subline="Studies on user onboarding & activation from various products."
        />
        <Panels style={{ marginBottom: "48px" }}>
          <CaseSectionSummary
            copy="
Detailed use cases assessing the user onboarding & activation flows from different companies and products."
            //imgURL="./img/PanelTestImages/one.jpg"
          />
        </Panels>
        <FilterBar>
          {FILTER_OPTIONS.map((type) => (
            <FilterButton
              key={type}
              type="button"
              onClick={() => setSelectedType(type)}
              isActive={selectedType === type}
              aria-pressed={selectedType === type}
            >
              {type}
            </FilterButton>
          ))}
        </FilterBar>
        <CaseCardGrid>
          {filteredCaseStudies.length > 0 ? (
            filteredCaseStudies.map((caseStudy) => (
              <CaseCard
                key={caseStudy.id}
                eyebrow={caseStudy.eyebrow}
                eyebrowColor2={caseStudy.eyebrowColor2}
                eyebrowColor1={caseStudy.eyebrowColor1}
                headline={caseStudy.headline}
                copy={caseStudy.copy}
                imgURL={caseStudy.imgURL}
                link={caseStudy.link}
                comingSoon={caseStudy.comingSoon}
              />
            ))
          ) : (
            <EmptyState>
              No case studies are available for this type yet. Please check
              back soon.
            </EmptyState>
          )}
        </CaseCardGrid>
      </Section>
    </Content>
  );
};

export default Content;
