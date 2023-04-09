import React, { Suspense } from "react";
import "./App.css";

// import Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Component
import Header from "./component/Header";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";

// import Pages
import Home from "./Pages/Home";
import ReactHooks from "./Pages/ReactHooks";
import UiUx from "./Pages/UiUx";
import FormExample from "./Pages/FormExample";
import { useTranslation } from "react-i18next";
import ReadMorePage from "./Pages/ReadMorePage";
import MobAppReadMore from "./Pages/MobAppReadMore";
import DigitalMarketingReadMore from "./Pages/DigitalMarketingReadMore";
import ContentWritingReadMore from "./Pages/ContentWritingReadMore";
import BrandingReadMore from "./Pages/BrandingReadMore";

function App() {
  return (
    <Suspense>
      <React.StrictMode>
        <Router>
          <Header />
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/web-development" component={ReadMorePage} />
              <Route
                exact
                path="/mobile-application"
                component={MobAppReadMore}
              />
              <Route
                exact
                path="/digital-marketing"
                component={DigitalMarketingReadMore}
              />
              <Route
                exact
                path="/content-writing"
                component={ContentWritingReadMore}
              />
              <Route exact path="/branding" component={BrandingReadMore} />

              <Route exact path="/react-hooks" component={ReactHooks} />
              <Route exact path="/ui-ux" component={UiUx} />
              <Route exact path="/form-example" component={FormExample} />
            </Switch>
          </ScrollToTop>
          <Footer />
        </Router>
      </React.StrictMode>
    </Suspense>
  );
}

export default App;
