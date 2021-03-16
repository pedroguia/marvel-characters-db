import { memo } from "react";
import GitHubIcon from "../../assets/img/github-icon.png";
import LinkedInIcon from "../../assets/img/linkedin-icon.png";
import "./_style.scss";

const Footer = () => (
  <div className="footer" data-testid="footer">
    <div className="text">Developed by Pedro Guia</div>
    <div className="icons">
      <a
        href="https://github.com/pedroguia"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
        aria-label="github link"
      >
        <img src={GitHubIcon} alt="github icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/pedroguia/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
        aria-label="linkedin link"
      >
        <img src={LinkedInIcon} alt="linkedin icon" />
      </a>
    </div>
  </div>
);

export default memo(Footer);
