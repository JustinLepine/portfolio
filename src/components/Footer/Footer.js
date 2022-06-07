import React from "react";
import Github from "../../assets/svg/github.svg"
import LinkedIn from "../../assets/svg/linkedIn.svg"
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
        <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/justin-lepine">
            <img className="footer__logo-2" src={ LinkedIn } alt='github-logo'/>
        </a>
        <a className="footer__email" href="mailto:lepine.justin@yahoo.com" >lepine.justin@yahoo.com</a>
        <a target="_blank" rel="noreferrer" href="https://github.com/JustinLepine">
            <img className="footer__logo" src={ Github } alt="github-logo" />
        </a>
    </footer>
  );
}

export default Footer;
