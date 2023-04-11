import React from "react";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";

const BrandingReadMore = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <React.StrictMode>
      <div className="container main-page-content">
        <div id="about" style={{ marginTop: "50px" }}>
          <div className="about-content">
            <div className="love-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>{t("service1Heading")}</h3>
                      {/* <h4
                        style={{
                          fontSize: "16px",
                          letterSpacing: "1px",
                          color: "#efd236",
                          position: "relative",
                        }}
                      >
                        {t("HoldOnHeading")}
                      </h4> */}
                      {/* <p>{t("HoldOnDescription")}</p> */}
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>{t("BrandingDescriptionRM")}</p>
                      {/* <p>{t("WhoWeAreDescriptionSub")}</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="about-back"></div> */}
            <div className="me-grid">
              <div className="container">
                <div className="row">
                  <div
                    className="col-md-4 col-sm-6 col-xs-12 about-col"
                    dir="rtl"
                  >
                    <div className="about-image">
                      <img
                        src={require("../../src/Pages/Branding 1.jpg")}
                        alt="sanajit-jana"
                        className="about-img wow fadeIn"
                      />
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-6 col-xs-12 about-col">
                    <div className="about-details wow fadeIn">
                      <div className="main-title left-title text-left wow fadeIn">
                        <h3>{t("benefits")}</h3>
                        <h4
                          style={{
                            fontSize: "16px",
                            letterSpacing: "1px",
                            color: "#073093",
                            position: "relative",
                          }}
                        >
                          {t("BrandingReadMoreHeading1")}
                        </h4>
                        <div className="underline1 no-margin"></div>
                        <div className="underline2 no-margin"></div>
                      </div>
                      <p className="wow fadeIn">
                        {/* {t("HomeDescription")} */}

                        <ul style={{ marginTop: "15px" }}>
                          <li> {t("BrandingReadMorePoint1")}</li>
                          <li> {t("BrandingReadMorePoint2")}</li>
                          <li> {t("BrandingReadMorePoint3")}</li>
                          <li> {t("BrandingReadMorePoint4")}</li>
                          <li> {t("BrandingReadMorePoint5")}</li>
                          <li> {t("BrandingReadMorePoint6")}</li>
                          <li> {t("BrandingReadMorePoint7")}</li>
                          <li> {t("BrandingReadMorePoint8")}</li>
                          <li> {t("BrandingReadMorePoint9")}</li>
                          <li> {t("BrandingReadMorePoint10")}</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="me-grid">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-sm-6 col-xs-12 about-col">
                    <div className="about-details wow fadeIn">
                      <div className="main-title left-title text-left wow fadeIn">
                        <h3>{t("HomeTitle")}</h3>
                        <h4
                          style={{
                            fontSize: "16px",
                            letterSpacing: "1px",
                            color: "#073093",
                            position: "relative",
                          }}
                        >
                          {t("BrandingReadMore2Heading2")}
                        </h4>
                        <div className="underline1 no-margin"></div>
                        <div className="underline2 no-margin"></div>
                      </div>
                      <p className="wow fadeIn">
                        {/* {t("HomeDescription")} */}

                        <ul style={{ marginTop: "15px" }}>
                          <li> {t("BrandingReadMore2Point1")}</li>
                          <li> {t("BrandingReadMore2Point2")}</li>
                          <li> {t("BrandingReadMore2Point3")}</li>
                          <li> {t("BrandingReadMore2Point4")}</li>
                          <li> {t("BrandingReadMore2Point5")}</li>
                          <li> {t("BrandingReadMore2Point6")}</li>
                          <li> {t("BrandingReadMore2Point7")}</li>
                          <li> {t("BrandingReadMore2Point8")}</li>
                        </ul>
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-md-4 col-sm-6 col-xs-12 about-col"
                    dir="rtl"
                  >
                    <div className="about-image">
                      <img
                        src={require("../../src/Pages/Branding 2.jpg")}
                        alt="sanajit-jana"
                        className="about-img wow fadeIn"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="channels">
          <div className="contact-content">
            <div className="text-grid">
              <div className="text-grid-main">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="main-title text-center wow fadeIn">
                        <h3>{t("Keepintouch")}</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>{t("KeepintouchDescription")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-grid">
              <div className="contact-form-details wow fadeIn">
                <div className="container">
                  <div className="row contact-info-row text-center wow fadeIn">
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".2s">
                        <i
                          className="fa fa-map-marker contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>{t("AddressHeading")}</h3>
                        <p>{t("Address")}</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".4s">
                        <i
                          className="fa fa-envelope contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>{t("EmailHeading")}</h3>
                        <a
                          href="mailto:contact.sanajitjana@gmail.com"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                          codespaceyem@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".6s">
                        <i
                          className="fa fa-mobile contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3> {t("PhoneHeading")}</h3>
                        <a
                          // href="tel:8372876775"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                          dir="ltr"
                        >
                          +923422123483
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".6s">
                        <i
                          className="fa fa-television contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>{t("WebsiteLinkHeading")}</h3>
                        <p dir="ltr">http://localhost:3000/</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default BrandingReadMore;
