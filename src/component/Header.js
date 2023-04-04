import i18next from "i18next";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageOption from "./language-dropdown";
import ReactFlagsSelect from "react-flags-select";

function Header() {
  const [selected, setSelected] = useState();
  const { t } = useTranslation();

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
    i18next.changeLanguage(e.target.value);
  };
  return (
    <React.StrictMode>
      <div className="menubar">
        <div className="menubar-content">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-3">
                  <div className="site-title">
                    <a href="/#home" style={{ textDecoration: "none" }}>
                      <h3>Shafay Azeem</h3>
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
                <div className="col-md-9 col-sm-9 navbar-style">
                  <div
                    className="collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1"
                  >
                    <ul className="nav navbar-nav">
                      <li>
                        <a href="/#home" className="active">
                          {t("Home")}
                        </a>
                      </li>
                      <li>
                        <a href="/#about">About</a>
                      </li>
                      <li>
                        <a href="/#skill">Skill</a>
                      </li>
                      <li>
                        <a href="/#resume">Education</a>
                      </li>
                      <li>
                        <a href="/#service">Service</a>
                      </li>
                      <li>
                        <a href="/#blog">Blog</a>
                      </li>
                      <li>
                        <a href="/#contact">Contact</a>
                      </li>
                      <li>
                        <div className="d-flex align-items-center me-2">
                          {/* <LanguageOption
                            onChange={(e) => handleClick(e)}
                          ></LanguageOption> */}
                          <ReactFlagsSelect
                            selected={selected ? selected : "GB"}
                            onSelect={setSelected}
                            placeholder="Select Language"
                            countries={["GB", "YE"]}
                            customLabels={{ GB: " ", YE: " " }}
                          />
                        </div>
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
