import React, { lazy, Suspense, useState, useEffect, useCallback } from "react";
import Spinner from "react-spinner-material";
//import React from "react";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Colors, Devices } from "../src/components/DesignSystem";
import ReactGA from "react-ga4";

//FUNCTIONS
import ScrollToTop from "./functions/ScrollToTop";
import NavigationSticky from "./components/Navigation/NavigationSticky.js";

//import Footer from "./components/Footer/Footer";
const Footer = lazy(() => import("./components/Footer/Footer"));
//import Home from "./components/Pages/Home/Home";
const Home = lazy(() => import("./components/Pages/Home/Home"));
const Contact = lazy(() => import("./components/Pages/Contact/Contact"));
const Portfolio = lazy(() => import("./components/Pages/Portfolio/Portfolio"));
const Writing = lazy(() => import("./components/Pages/Writing/Writing"));

//REPORTS
const Reports = lazy(() => import("./components/Pages/Reports/Reports.js"));
const OASaasGrowth = lazy(() =>
  import("./components/Pages/Reports/OASaasGrowth.js")
);
const FourIndustryShifts = lazy(() =>
  import("./components/Pages/Reports/FourIndustryShifts.js")
);

//CASE STUDIES
const CaseStudies = lazy(() =>
  import("./components/Pages/CaseStudies/CaseStudies")
);
const AsanaCaseStudy = lazy(() =>
  import("./components/Pages/CaseStudies/AsanaCaseStudy")
);

//FLOW GALLERY
const Flows = lazy(() => import("./components/Pages/Flows/Flows"));
const AsanaFlow = lazy(() => import("./components/Pages/Flows/AsanaFlow"));
const LinearFlow = lazy(() => import("./components/Pages/Flows/LinearFlow"));
const WrikeFlow = lazy(() => import("./components/Pages/Flows/WrikeFlow.js"));
const TrelloFlow = lazy(() => import("./components/Pages/Flows/TrelloFlow.js"));

//PORTFOLIO
const Occhio = lazy(() => import("./components/Pages/Portfolio/Occhio"));
const KnaufExplorations = lazy(() =>
  import("./components/Pages/Portfolio/KnaufExplorations")
);
const KnaufAccount = lazy(() =>
  import("./components/Pages/Portfolio/KnaufAccount")
);
const KnaufOrderOverview = lazy(() =>
  import("./components/Pages/Portfolio/KnaufOrderOverview")
);
const MyKnauf = lazy(() => import("./components/Pages/Portfolio/MyKnauf"));

const Heraklit = lazy(() => import("./components/Pages/Heraklit/Heraklit"));

//import Navigation from "./components/Navigation/Navigation";
const Navigation = lazy(() => import("./components/Navigation/Navigation"));
/*const MiniNavigation = lazy(() =>
  import("./components/Navigation/MiniNavigation/MiniNavigation")
);*/
const StyledApp = styled.div`
  text-align: center;
  margin: 0 auto;
  ${Devices.tabletS} {
    //width: 564px;
  }
  ${Devices.tabletM} {
    //width: 708px;
  }
  ${Devices.laptopS} {
    //width: 852px;
  }
  ${Devices.laptopM} {
    //width: 1140px;
  }
`;

const renderLoader = () => (
  <div
    style={{
      position: "absolute",
      left: "50%",
      top: "50%",
      translateY: "50%",
      translateX: "50%",
    }}
  >
    <Spinner radius={120} color={Colors.front} stroke={2} visible={true} />
  </div>
);

// Initialize Google Analytics
ReactGA.initialize("G-6BNG13DFW0"); // Replace with your Google Analytics tracking ID

function App() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = useCallback(() => {
    setIsSticky(window.pageYOffset > 152);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Router>
      <ScrollToTop />

      <StyledApp className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Alexandros Shomper</title>
          <meta
            name="description"
            content="Experienced in core and growth initiatives from acquisition to retention & engagement. Bridging business, design, and tech to create awesome solutions people love."
          />
        </Helmet>
        <Suspense fallback={renderLoader()}>
          <Navigation />
          {isSticky && <NavigationSticky />}

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/writing" component={Writing} />

            {/*REPORTS*/}
            <Route exact path="/reports" component={Reports} />
            <Route
              exact
              path="/reports/why-onboarding-and-activation-are-the-ultimate-levers-for-saas-growth"
              component={OASaasGrowth}
            />
            <Route
              exact
              path="/reports/four-indsutry-shifts-making-onboarding-and-activation-indispensible"
              component={FourIndustryShifts}
            />
            {/*CASE STUDIES*/}
            <Route exact path="/case-studies" component={CaseStudies} />
            <Route
              exact
              path="/case-studies/asana"
              component={AsanaCaseStudy}
            />
            {/*FLOWS*/}
            <Route exact path="/flows" component={Flows} />
            <Route exact path="/flows/asana" component={AsanaFlow} />
            <Route exact path="/flows/linear" component={LinearFlow} />
            <Route exact path="/flows/wrike" component={WrikeFlow} />
            <Route exact path="/flows/trello" component={TrelloFlow} />

            {/*PORTFOLIO*/}
            <Route exact path="/occhio" component={Occhio} />
            <Route
              exact
              path="/knauf-explorations"
              component={KnaufExplorations}
            />
            <Route exact path="/knauf-account" component={KnaufAccount} />
            <Route
              exact
              path="/knauf-orderoverview"
              component={KnaufOrderOverview}
            />
            <Route exact path="/myknauf" component={MyKnauf} />
            <Route exact path="/heraklit" component={Heraklit} />
          </Switch>
          <Footer />
        </Suspense>
      </StyledApp>
    </Router>
  );
}
export default App;
