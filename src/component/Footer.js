import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {useLocation} from "react-router-dom";

function Footer() {
  const location = useLocation();
  if(location.pathname === '/') return null;

  return (
    <footer>
      <span className={"logo"}>Gitppo</span>

      <span>Copyright &copy; 2021 designed by Gitppo</span>

      <a className={"footer-title"}
         href="https://github.com/HYUNAHSHIM/gitppo"
         target="_blank"
         title="git page"
         rel="noreferrer noopener">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </footer>
  );
}

export default Footer;