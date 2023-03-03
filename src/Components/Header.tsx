import { useContext, useEffect, useState } from "react"
import homeIcon from "../img/homepage_icon.svg"
import "./scss/Header.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import PDF from "../media/CV__Emiri-Ishikawa.pdf"
import { browserSizeContext } from "../store/BrowserSizeContext"
function Header() {
  const browserSizeCtx = useContext(browserSizeContext)
  const [isActive, setIsActive] = useState(false)

  const goToLinkedin = () => {
    window.open("https://www.linkedin.com/in/emiri-ishikawa-5579341b0/")
  }
  const goToGitHub = () => {
    window.open("https://github.com/Emiri-i")
  }
  const reloadPage = () => {
    window.location.reload()
  }
  return (
    <>
      {browserSizeCtx.browserWidth > 600 && (
        <header className="header-wrapper">
          <div className="header-left-wrapper">
            <img src={homeIcon} onClick={reloadPage}></img>
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
      )}
      {browserSizeCtx.browserWidth <= 600 && (
        <div className="header-wrapper-mobile">
          <header className="header">
            <img src={homeIcon} onClick={reloadPage}></img>
            <button
              className={
                isActive ? "hamberger-wrapper active" : "hamberger-wrapper"
              }
              onClick={() => setIsActive(!isActive)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </header>
          <div className={isActive ? "mobile-menu active" : "mobile-menu"}>
            <ul className="mobile-menu__main">
              <li className="mobile-menu__item">Tech Skills / Tools</li>
              <li className="mobile-menu__item">Projects </li>
              <li className="mobile-menu__item">Languages</li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
