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

function TechSkills() {
  return (
    <div className="tech-skills-wrapper">
      <div className="tech-skills-title">Tech Skills / Tools</div>
      <div className="skill-wrapper">
        <div className="skill-title">- Tech Skills -</div>
        <div className="skill-icons-wrapper">
          <FaReact className="skill-icon" size="3.5em" title="React" />
          <SiRedux className="skill-icon" size="3.5em" title={"Redux"} />
          <SiTypescript
            className="skill-icon"
            size="3.5em"
            title={"TypeScript"}
          />
          <SiJavascript
            className="skill-icon"
            size="3.5em"
            title={"JavaScript"}
          />
          <FaVuejs className="skill-icon" size="3.5em" title={"Vue.js"} />
          <SiVuetify className="skill-icon" size="3.5em" title={"Vuetify"} />
          <DiHtml5 className="skill-icon" size="3.7em" title={"HTML"} />
          <DiCss3 className="skill-icon" size="3.7em" title={"CSS"} />
          <FaSass className="skill-icon" size="3.5em" title={"Sass"} />
        </div>
      </div>

      <div className="tool-wrapper">
        <div className="tool-title">- Tools -</div>
        <div className="tool-icons-wrapper">
          <FaGithub className="skill-icon" size="3.5em" title={"GitHub"} />
          <SiFirebase className="skill-icon" size="3.5em" title={"Firebase"} />
          <SiVisualstudio
            className="skill-icon"
            size="3.5em"
            title={"Visual Studio Code"}
          />
          <FaNpm className="skill-icon" size="3.5em" title={"npm"} />
        </div>
      </div>
    </div>
  )
}
export default TechSkills
