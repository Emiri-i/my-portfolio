import "./scss/TechSkills.scss"
import { SiTypescript } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { SiRedux } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { FaVuejs } from "react-icons/fa"
import { SiVuetify } from "react-icons/si"
import { DiHtml5 } from "react-icons/di"
import { DiCss3 } from "react-icons/di"
import { FaSass } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { SiFirebase } from "react-icons/si"
import { SiVisualstudio } from "react-icons/si"
import { FaNpm } from "react-icons/fa"
import { VscTriangleRight } from "react-icons/vsc"
import { useRef } from "react"
import useIntersectionObserver from "../hooks/useIntersectionObserver"

function TechSkills() {
  const techSkillsElem = useRef<HTMLInputElement | null>(null)
  useIntersectionObserver(techSkillsElem)
  return (
    <>
      <div className="circles-wrapper">
        <div className="circle-tech-skill-1"></div>
      </div>
      <div className="tech-skills-wrapper" ref={techSkillsElem}>
        <div className="tech-skills-title">Tech Skills / Tools</div>
        <div className="skill-wrapper">
          <div className="skill-title">
            <VscTriangleRight className="icon-skills-section" />
            <div>Tech Skills</div>
          </div>
          <div className="skill-icons-wrapper">
            <FaReact className="skill-icon" size="2.5em" title="React" />
            <SiRedux className="skill-icon" size="2.5em" title={"Redux"} />
            <SiTypescript
              className="skill-icon"
              size="2.5em"
              title={"TypeScript"}
            />
            <SiJavascript
              className="skill-icon"
              size="2.5em"
              title={"JavaScript"}
            />
            <FaVuejs className="skill-icon" size="2.5em" title={"Vue.js"} />
            <SiVuetify className="skill-icon" size="2.5em" title={"Vuetify"} />
            <DiHtml5 className="skill-icon" size="2.5em" title={"HTML"} />
            <DiCss3 className="skill-icon" size="2.5em" title={"CSS"} />
            <FaSass className="skill-icon" size="2.5em" title={"Sass"} />
          </div>
        </div>

        <div className="tool-wrapper">
          <div className="tool-title">
            <VscTriangleRight className="icon-skills-section" />
            <div>Tools</div>
          </div>
          <div className="tool-icons-wrapper">
            <FaGithub className="skill-icon" size="2.5em" title={"GitHub"} />
            <SiFirebase
              className="skill-icon"
              size="2.5em"
              title={"Firebase"}
            />
            <SiVisualstudio
              className="skill-icon"
              size="2.5em"
              title={"Visual Studio Code"}
            />
            <FaNpm className="skill-icon" size="2.5em" title={"npm"} />
          </div>
        </div>
      </div>
    </>
  )
}
export default TechSkills
