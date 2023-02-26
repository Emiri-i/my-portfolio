import AboutMe from "./AboutMe"
import TechSkills from "./TechSkills"
import Projects from "./Projects"
import Languages from "./Languages"
import "./scss/Main.scss"
function Main() {
  return (
    <main className="main-wrapper">
      <AboutMe />
      <TechSkills />
      <Projects />
      <Languages />
    </main>
  )
}
export default Main
