import { Link } from "react-router-dom";

import "./style/footerStyle.css";

const socialMediaLink = [
  {
    platform: "instagram",
    link: "https://www.instagram.com/badatgameshq?igsi=MXNvaG12a2JmZWc0ZQ==",
  },
  {
    platform: "facebook",
    link: "https://www.facebook.com/share/r/183Eg21Nso/ ",
  },
  {
    platform: "discord",
    link: "https://discord.gg/8QFn72B7Am",
  },
  {
    platform: "youtube",
    link: "https://www.youtube.com/channel/UCcmOec951iDGZZKyNk_7hIA",
  },
];

const Footer = () => {
  const mailto = "mailto:badatgamesstudio@gmail.com";

  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="footer-dec">
          <h1 className="big-text">GOT A GAME WORTH FIGHTING FOR?</h1>
          <div className="footer-cnt">
            <a className="contact-btn" href={mailto}>
              START A PROJECT <span>↗</span>
            </a>
          </div>
        </div>
        <div className="footer-social">
          <div className="social-wrapper">
            {socialMediaLink.map((each, index) => (
              <Link
                to={each.link}
                key={`footer-social-${index}`}
                className="social-text"
                target="_blank"
              >
                {each.platform}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer-full-text">
          <h1>BAD AT GAMES</h1>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-bottom-text">
          © 2026 badatgames LTD. All rights reserved.
        </p>

        <div className="footer-bottom-right">
          <Link to={"/tc"} className="footer-bottom-text">
            Terms and Conditions{" "}
          </Link>
          <p className="footer-bottom-text">|</p>
          <Link to={"/pp"} className="footer-bottom-text">
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
