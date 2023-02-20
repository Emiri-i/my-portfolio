import homeIcon from "../img/homepage_icon.svg"
import "./Header.scss"
// import styles from "../CssGlobal/_global.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-left-wrapper">
        <img src={homeIcon}></img>
        <button className="header-prop">Tech Skills / Tools</button>
        <button className="header-prop">Projects</button>
        <button className="header-prop">Languages</button>
        <button className="header-prop">CV</button>
      </div>
      <div className="header-right-wrapper">
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faGithub} />
      </div>
    </div>
  )
}

export default Header
