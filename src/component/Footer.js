import React from "react";
import { useTranslation } from "react-i18next";
var d = new Date();
var currYear = d.getFullYear();

function Footer() {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <React.StrictMode>
      <div
        className="copyright-details"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)",
        }}
      >
        <div className="about-social-icon text-center">
          <ul className="about-social">
            {/* <li className="wow fadeIn" data-wow-delay=".8s">
              <a
              href="https://twitter.com/sanajitjana01"
               target="newtab"
              >
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li> */}
            <li className="wow fadeIn" data-wow-delay=".6s">
              <a
                href="https://www.linkedin.com/in/code-space-501a83271"
                target="newtab"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li className="wow fadeIn" data-wow-delay=".2s">
              <a
                href="https://www.facebook.com/CodeSpaceYem/?mibextid=ZbWKwL"
                target="newtab"
              >
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li className="wow fadeIn" data-wow-delay=".4s">
              <a
                href="https://instagram.com/codespaceyem?igshid=ZDdkNTZiNTM="
                target="newtab"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            {/* <li className="wow fadeIn" data-wow-delay="1s">
              <a
              href="https://sanajitjana.medium.com/"
              target="newtab"
              >
                <i className="fa fa-medium" aria-hidden="true"></i>
              </a>
            </li> */}
            {/* <li className="wow fadeIn" data-wow-delay="1.2s">
              <a
              href="https://github.com/sanajitjana"
              target="newtab"
              >
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li> */}
          </ul>
        </div>
        <div className="copyright">
          <h3 style={{ color: "white" }}>
            {t("Copyright")} &copy;{" "}
            <a style={{ color: "white" }}>{t("CodeSpace")}</a>
          </h3>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Footer;
