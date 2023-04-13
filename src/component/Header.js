import i18next from "i18next";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageOption from "./language-dropdown";
import ReactFlagsSelect from "react-flags-select";
import yemen from "../flag-ye-svgrepo-com.svg";
import england from "../flag-gb-svgrepo-com.svg";

function Header() {
  const [selected, setSelected] = useState();
  const { t, i18n } = useTranslation();

  let helper = selected;
  useEffect(() => {
    if (selected === "GB") {
      i18next.changeLanguage("en");
      helper = "GB";
      localStorage.setItem("helper", helper);
    } else if (selected === "YE") {
      i18next.changeLanguage("arb");
      helper = "YE";
      localStorage.setItem("helper", helper);
    } else {
      // i18next.changeLanguage("en");
      // helper = "GB";
      localStorage.getItem("helper");
      setSelected(localStorage.getItem("helper"));
    }
  }, [selected]);

  const handleClick = (e) => {
    i18next.changeLanguage(e);
  };

  document.body.dir = i18n.dir();
  return (
    <React.StrictMode>
      <div className="menubar">
        <div className="menubar-content">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2 col-sm-2 logo-column">
                  <div className="site-title">
                    <a href="/#home" style={{ textDecoration: "none" }}>
                      <img src={require("../../src/Pages/logo-2.png")} />
                    </a>
                  </div>
                </div>
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="col-md-10 col-sm-10 navbar-style">
                  <div
                    className="collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1"
                  >
                    <ul
                      className="nav navbar-nav"
                      data-toggle="collapse"
                      data-target="#bs-example-navbar-collapse-1"
                      aria-expanded="false"
                    >
                      <li>
                        <a href="/#home" className="active">
                          {t("Home")}
                        </a>
                      </li>
                      <li>
                        <a href="/#about">{t("About")}</a>
                      </li>
                      <li>
                        <a href="/#career">{t("Career")}</a>
                      </li>
                      <li>
                        <a href="/#specialties">{t("Specialties")}</a>
                      </li>
                      <li>
                        <a href="/#service">{t("Service")}</a>
                      </li>
                      <li>
                        <a href="/#contactForm">{t("Contact")}</a>
                      </li>

                      <li style={{ textAlign: "center", marginTop: "8px" }}>
                        {localStorage.getItem("i18nextLng") === "arb" ? (
                          <div>
                            <img
                              src={england}
                              style={{
                                width: "30px",
                                height: "30px",
                                paddingLeft: "6px",
                                cursor: "pointer",
                              }}
                              onClick={(e) => handleClick("en")}
                            />
                            <a
                              onClick={(e) => handleClick("en")}
                              style={{
                                color: "white",
                                cursor: "pointer",
                                paddingLeft: "6px",
                                textDecoration: "none",
                              }}
                            >
                              Eng
                            </a>
                          </div>
                        ) : (
                          <div>
                            <img
                              src={yemen}
                              style={{
                                width: "30px",
                                height: "30px",
                                paddingLeft: "6px",
                                cursor: "pointer",
                              }}
                              onClick={(e) => handleClick("arb")}
                            />
                            <a
                              style={{
                                color: "white",
                                paddingLeft: "6px",
                                cursor: "pointer",
                                textDecoration: "none",
                              }}
                              onClick={(e) => handleClick("arb")}
                            >
                              عربي
                            </a>
                          </div>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Header;
