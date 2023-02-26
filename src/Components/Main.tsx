import AboutMe from "./AboutMe"
import TechSkills from "./TechSkills"
import Projects from "./Projects"
import Languages from "./Languages"
import Footer from "./Footer"
import "./scss/Main.scss"
function Main() {
  return (
    <main className="main-wrapper">
      <AboutMe />
      <TechSkills />
      <Projects />
      <Languages />
      <Footer />
    </main>
  )
}
export default Main
