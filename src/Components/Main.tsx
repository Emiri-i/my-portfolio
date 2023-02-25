import AboutMe from "./AboutMe"
import TechSkills from "./TechSkills"
import Projects from "./Projects"
import "./scss/Main.scss"
function Main() {
  return (
    <main className="main-wrapper">
      <AboutMe />
      <TechSkills />
      <Projects />
    </main>
  )
}
export default Main
