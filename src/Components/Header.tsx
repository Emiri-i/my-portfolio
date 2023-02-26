import homeIcon from "../img/homepage_icon.svg"
import "./scss/Header.scss"
// import styles from "../CssGlobal/_global.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import PDF from "../media/CV__Emiri-Ishikawa.pdf"
function Header() {
  const goToLinkedin = () => {
    window.open("https://www.linkedin.com/in/emiri-ishikawa-5579341b0/")
  }
  const goToGitHub = () => {
    window.open("https://github.com/Emiri-i")
  }
  return (
    <header className="header-wrapper">
      <div className="header-left-wrapper">
        <img src={homeIcon}></img>
        <button className="header-prop">Tech Skills / Tools</button>
        <button className="header-prop">Projects</button>
        <button className="header-prop">Languages</button>
        <a
          className="header-prop"
          href={PDF}
          target="_blank"
          rel="noopener noreferrer">
          CV
        </a>
      </div>
      <div className="header-right-wrapper">
        <FontAwesomeIcon icon={faLinkedin} onClick={goToLinkedin} />
        <FontAwesomeIcon icon={faGithub} onClick={goToGitHub} />
      </div>
    </header>
  )
}

export default Header
