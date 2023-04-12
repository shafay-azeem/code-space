import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import ParticlesBackground from "../component/ParticlesBackground";

const Home = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <React.StrictMode>
      <div className="container main-page-content">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
          </ol>
          <div class="carousel-inner">
            <div class="item active">
              <div className="wrapper ">
                <ParticlesBackground></ParticlesBackground>

                <div className="text">
                  <h1 style={{ fontWeight: "900" }}>{t("CodeSpaceHead")}</h1>
                </div>
              </div>
            </div>
            <div class="item">
              <img
                src={require("../Pages/img-20230407-wa0001_720.jpg")}
                alt="Los Angeles"
                className="img-fluid"
              />
            </div>
            <div class="item">
              <img
                src={require("../Pages/slide2 (1).jpg")}
                alt="Chicago"
                className="img-fluid"
              />
            </div>
            <div class="item">
              <img
                src={require("../Pages/website-hosting-concept-with-bright-light.jpg")}
                alt="New york"
                className="img-fluid"
              />
            </div>
          </div>
          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        {/* <div className="wrapper" style={{ top: "20px" }}>
          <ParticlesBackground></ParticlesBackground>
          <div className="text">
            <h1 style={{ fontWeight: "900" }}>{t("CodeSpaceHead")}</h1>
          </div>
        </div> */}

        <div className="work-counter text-center">
          <div className="counter">
            <div className="container">
              <div className="row wow fadeIn">
                <div className="col-md-3 col-sm-6">
                  <div className="work-statistics">
                    <i
                      className="fa fa-file-code-o stat-icon"
                      aria-hidden="true"
                    ></i>
                    <h3 className="Count">
                      +
                      <CountUp end={347} duration={10} />
                    </h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>{t("WebsiteCreatedHeading")}</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="work-statistics">
                    <i className="fa fa-crop stat-icon" aria-hidden="true"></i>
                    <h3 className="Count">
                      +
                      <CountUp end={200} duration={10} />
                    </h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>{t("LogosHeading")}</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="work-statistics">
                    <i
                      className="fa fa-check-circle stat-icon"
                      aria-hidden="true"
                    ></i>
                    <h3 className="Count">
                      +
                      <CountUp end={220} duration={10} />
                    </h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>{t("WebDesignCompletedHeading")}</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="work-statistics">
                    <i className="fa fa-users stat-icon" aria-hidden="true"></i>
                    <h3 className="Count">
                      +
                      <CountUp end={1000} duration={10} />
                    </h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>{t("OurClientsHeading")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ ABOUT =============================== --> */}

        <div id="about">
          <div className="about-content">
            <div className="love-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>{t("WhoWeAreHeading")}</h3>
                      <h4
                        style={{
                          fontSize: "16px",
                          letterSpacing: "1px",
                          color: "#073093",
                          position: "relative",
                        }}
                      >
                        {t("HoldOnHeading")}
                      </h4>
                      <p>{t("HoldOnDescription")}</p>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>{t("WhoWeAreDescription")}</p>
                      <p>{t("WhoWeAreDescriptionSub")}</p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-3 col-sm-6">
                    <div
                      className="love-details"
                      data-wow-delay=".1s"
                      style={{ minHeight: "265px" }}
                    >
                      <i
                        className="fa fa-pencil-square-o love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>{t("service3Heading")}</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>{t("ContentDescription")}</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div
                      className="love-details"
                      data-wow-delay=".3s"
                      style={{ minHeight: "265px" }}
                    >
                      <i
                        className="fa fa-file-image-o love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>{t("UI/UXHeading")}</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>{t("UI/UXDescription")}</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div
                      className="love-details"
                      data-wow-delay=".2s"
                      style={{ minHeight: "265px" }}
                    >
                      <i
                        className="fa fa-globe love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>{t("WebDesignHeading")}</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>{t("WebDesignDescription")}</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div
                      className="love-details"
                      data-wow-delay=".4s"
                      style={{ minHeight: "265px" }}
                    >
                      <i className="fa fa-cog love-icon" aria-hidden="true"></i>
                      <h3>{t("WebDevelopmentHeading")}</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>{t("WebDevelopmentDescription")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-back"></div>
            <div className="me-grid">
              <div className="container">
                <div className="row">
                  <div
                    className="col-md-4 col-sm-6 col-xs-12 about-col"
                    dir="rtl"
                  >
                    <div className="about-image">
                      <img
                        src="assets/img/about-image.jpg"
                        className="about-img wow fadeIn"
                      />
                    </div>
                  </div>
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
                          {t("HomeSubTitle")}
                        </h4>
                        <div className="underline1 no-margin"></div>
                        <div className="underline2 no-margin"></div>
                      </div>
                      <p className="wow fadeIn">
                        {t("HomeDescription")}

                        <ul style={{ marginTop: "15px" }}>
                          <li> {t("HomeDescriptionPoint1")}</li>
                          <li> {t("HomeDescriptionPoint2")}</li>
                          <li> {t("HomeDescriptionPoint3")}</li>
                          <li> {t("HomeDescriptionPoint4")}</li>
                          <li> {t("HomeDescriptionPoint5")}</li>
                          <li> {t("HomeDescriptionPoint6")}</li>
                          <li> {t("HomeDescriptionPoint7")}</li>
                          <li> {t("HomeDescriptionPoint8")}</li>
                          <li> {t("HomeDescriptionPoint9")}</li>
                          <li> {t("HomeDescriptionPoint10")}</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ RESUME =============================== --> */}

        <div id="specialties">
          <div className="resume-content">
            <div className="resume-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>{t("OurSpecilitiesHeading")}</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>{t("OurSpecilitiesDescription")}</p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-4 col-sm-4">
                    <div className="resume-details" data-wow-delay=".2s">
                      <div className="resume-hover"></div>
                      <div className="resume-main">
                        <i
                          className="fa fa-trophy resume-icon"
                          aria-hidden="true"
                        ></i>
                        <h3> {t("OurSpecilitiesDescription")}</h3>
                        {/* <h2>2010-2017</h2> */}
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>{t("OurSpecilitiesPoint1Description")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="resume-details" data-wow-delay=".3s">
                      <div className="resume-hover"></div>
                      <div className="resume-main">
                        <i
                          className="fa fa-thumbs-up resume-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>{t("OurSpecilitiesPoint2")}</h3>
                        {/* <h2>2017-2020</h2> */}
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>{t("OurSpecilitiesPoint2Description")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="resume-details" data-wow-delay=".4s">
                      <div className="resume-hover"></div>
                      <div className="resume-main">
                        <i
                          className="fa fa-indent resume-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>{t("OurSpecilitiesPoint3")}</h3>
                        {/* <h2>2022-2022</h2> */}
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>{t("OurSpecilitiesPoint3Description")}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="career"></div>
                <div className="row main-row wow fadeIn">
                  <div className="col-md-12">
                    <div className="main-title text-center">
                      <h3>{t("InteractWithUs")}</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>{t("InteractWithUsDescription")}</p>
                    </div>
                  </div>
                </div>
                <div className="row love-row">
                  <div className="col-md-6 col-sm-12">
                    <div className="exp-details" data-wow-delay=".2s">
                      <div className="exp-hover"></div>
                      <div className="exp-main">
                        <i
                          className="fa fa-building exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>{t("InteractWithUsPoint1Heading")}</h3>
                        {/* <h4>Repub Member</h4>
                        <h2>2019-2020</h2> */}
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>{t("InteractWithUsPoint1Description")}</p>
                      </div>
                    </div>
                  </div>

                  {localStorage.getItem("i18nextLng") === "arb" ? (
                    <div className="col-md-6 col-sm-12">
                      <div className="exp-details" data-wow-delay=".3s">
                        <div className="exp-hover"></div>
                        <div className="exp-main">
                          <i
                            className="fa fa-building exp-icon"
                            aria-hidden="true"
                          ></i>
                          <h3>{t("InteractWithUsPoint2Heading")}</h3>
                          {/* <h4>Web Developer</h4>
                        <h2>2020-2022</h2> */}
                          <div className="underline1"></div>
                          <div className="underline2"></div>
                          <p>{t("InteractWithUsPoint2Description")}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="col-md-6 col-sm-12">
                      <div
                        className="exp-details"
                        data-wow-delay=".3s"
                        style={{ minHeight: "292px" }}
                      >
                        <div className="exp-hover"></div>
                        <div className="exp-main">
                          <i
                            className="fa fa-building exp-icon"
                            aria-hidden="true"
                          ></i>
                          <h3>{t("InteractWithUsPoint2Heading")}</h3>
                          {/* <h4>Web Developer</h4>
                        <h2>2020-2022</h2> */}
                          <div className="underline1"></div>
                          <div className="underline2"></div>
                          <p>{t("InteractWithUsPoint2Description")}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ============================================== SERVICE ===================================================== --> */}

        <div id="service">
          <div className="service-content">
            <div className="service-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>{t("servicesHeading")}</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>{t("servicesDescription")}</p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-4 col-sm-6">
                    <div
                      className="service-details"
                      data-wow-delay=".1s"
                      style={{ minHeight: "560px" }}
                    >
                      <div className="service-head">
                        <img
                          src="assets/img/service/design-development.jpg"
                          alt="design-development"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-file-code-o service-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>{t("service2Heading")}</h3>

                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          {t("service2Point1")}
                          <br></br>
                          {t("service2Point2")}
                          <br></br>
                          {t("service2Point3")}
                          <br></br>
                          {t("service2Point4")}
                        </p>
                      </div>

                      <a
                        href="http://www.codespaceye.com/web-development"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-link-2"
                      >
                        {t("ReadMore")}
                      </a>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <div
                      className="service-details"
                      data-wow-delay=".1s"
                      style={{ minHeight: "560px" }}
                    >
                      <div className="service-head">
                        <img
                          src="assets/img/service/e-commarce.jpg"
                          alt="e-commarce"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-mobile exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>{t("service4Heading")}</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          {t("service4Point1")}
                          <br></br>
                          {t("service4Point2")}
                          <br></br>
                          {t("service4Point3")}
                        </p>
                      </div>
                      {localStorage.getItem("i18nextLng") === "arb" ? (
                        <a
                          href="http://www.codespaceye.com/mobile-application"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="about-link-2"
                          style={{ top: "26px" }}
                        >
                          {t("ReadMore")}
                        </a>
                      ) : (
                        <a
                          href="http://www.codespaceye.com/mobile-application"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="about-link-2"
                        >
                          {t("ReadMore")}
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <div
                      className="service-details"
                      data-wow-delay=".1s"
                      style={{ minHeight: "560px" }}
                    >
                      <div className="service-head">
                        <img
                          src="assets/img/service/analytics.jpg"
                          alt="website-audit"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-search exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>{t("service5Heading")}</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          {t("service5Point1")}
                          <br></br>
                          {t("service5Point2")}
                          <br></br>
                          {t("service5Point3")}
                        </p>
                      </div>

                      <a
                        href="http://www.codespaceye.com/digital-marketing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-link-2"
                        style={{ top: "26px" }}
                      >
                        {t("ReadMore")}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="row love-row wow fadeIn">
                  <div className="col-md-4 col-sm-6">
                    <div
                      className="service-details"
                      data-wow-delay=".1s"
                      style={{ minHeight: "560px" }}
                    >
                      <div className="service-head">
                        <img
                          src="assets/img/service/mobile-friendly.jpg"
                          alt="mobile-friendly"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-desktop exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>{t("service1Heading")}</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          {t("service1Point1")}
                          <br></br> {t("service1Point2")}
                          <br></br>
                          {t("service1Point3")}
                          <br></br>
                        </p>
                      </div>

                      <a
                        href="http://www.codespaceye.com/branding"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-link-2"
                      >
                        {t("ReadMore")}
                      </a>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <div
                      className="service-details"
                      data-wow-delay=".1s"
                      style={{ minHeight: "560px" }}
                    >
                      <div className="service-head">
                        <img
                          src="assets/img/service/website-audit.jpg"
                          alt="analytics"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-pencil-square-o service-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>{t("service3Heading")}</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          {t("service1Point1")}
                          <br></br> {t("service3Point1")}
                          <br></br>
                          {t("service3Point2")}
                          <br></br>
                        </p>
                      </div>

                      <a
                        href="http://www.codespaceye.com/content-writing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-link-2"
                      >
                        {t("ReadMore")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <div className="testimonial-grid">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="main-title text-center wow fadeIn">
                          <h3>{t("TestimonialsHeading")}</h3>
                          <div className="underline1"></div>
                          <div className="underline2"></div>
                          <p>{t("TestimonialsDescription")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-details">
                    <section id="carousel">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-8 col-md-offset-2">
                            <div className="quote">
                              <i className="fa fa-quote-left fa-4x"></i>
                            </div>
                            <div
                              className="carousel slide"
                              id="fade-quote-carousel"
                              data-ride="carousel"
                              data-interval="3000"
                            >
                              <ol className="carousel-indicators">
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="0"
                                  className="active"
                                ></li>
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="1"
                                ></li>
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="2"
                                ></li>
                              </ol>
                              <div className="carousel-inner">
                                <div className="active item">
                                  <blockquote>
                                    <p>
                                      “{t("TestimonialsDescription1")}”
                                      <br />
                                      <span>{t("ShafayAzeem")}</span>
                                    </p>
                                  </blockquote>
                                </div>
                                <div className="item">
                                  <blockquote>
                                    <p>
                                      “{t("TestimonialsDescription2")}”
                                      <br />
                                      <span>{t("JohnAlian")}</span>
                                    </p>
                                  </blockquote>
                                </div>
                                <div className="item">
                                  <blockquote>
                                    <p>
                                      “{t("TestimonialsDescription3")}”
                                      <br />
                                      <span>{t("MuhammadFaizan")}</span>
                                    </p>
                                  </blockquote>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ BLOG ========================== --> */}

        <div id="contactForm">
          <div className="blog-content">
            <div className="blog-grid">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>{t("ContactUs")}</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>{t("ContactUsDescription")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div class="col-lg-6">
              <img
                src={require("../Pages/Contact.jpg")}
                style={{ width: "100%", height: "auto", marginBottom: "10px" }}
              />
            </div>
            <div class="col-lg-6">
              <div class="contact-box ml-3">
                <form>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form-group mt-2">
                        <input
                          class="form-control"
                          type="text"
                          placeholder={t("name")}
                          name="user_name"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group mt-2">
                        <input
                          class="form-control"
                          type="email"
                          placeholder={t("emailAddress")}
                          name="user_email"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group mt-2">
                        <input
                          class="form-control"
                          type="text"
                          placeholder={t("phonenumber")}
                          name="user_phone"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group mt-2">
                        <textarea
                          class="form-control"
                          placeholder={t("message")}
                          name="message"
                          rows="11"
                          cols="40"
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div class="col-lg-12 text-center">
                      <a
                        className="btn btn-warning"
                        style={{
                          width: "50%",
                          fontSize: "16px",
                          backgroundColor: "#073093",
                          borderColor: "#073093",
                          color: "white",
                        }}
                      >
                        {t("sendBtn")}
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ CONTACT ========================== --> */}

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
                          // href=""
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
                        <p dir="ltr">http://www.codespaceye.com/</p>
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

export default Home;
