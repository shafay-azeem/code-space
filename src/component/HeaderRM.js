import React from "react";
import i18next from "i18next";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import yemen from "../flag-ye-svgrepo-com.svg";
import england from "../flag-gb-svgrepo-com.svg";

const HeaderRM = () => {
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
                    data-target="#bs-example-navbar-collapse-2"
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
                    id="bs-example-navbar-collapse-2"
                  >
                    <ul className="nav navbar-nav">
                      <li>
                        <a href="/#home" className="active">
                          {t("Home")}
                        </a>
                      </li>

                      <li style={{ marginTop: "8px", textAlign: "center" }}>
                        {localStorage.getItem("i18nextLng") === "arb" ? (
                          <img
                            src={england}
                            style={{
                              width: "30px",
                              height: "30px",
                              paddingLeft: "10px",
                              cursor: "pointer",
                            }}
                            onClick={(e) => handleClick("en")}
                          />
                        ) : (
                          <img
                            src={yemen}
                            style={{
                              width: "30px",
                              height: "30px",
                              paddingLeft: "10px",
                              cursor: "pointer",
                            }}
                            onClick={(e) => handleClick("arb")}
                          />
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
};

export default HeaderRM;
