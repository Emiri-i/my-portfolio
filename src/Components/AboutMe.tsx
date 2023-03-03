import { useRef } from "react"
import useIntersectionObserver from "../hooks/useIntersectionObserver"
import "./scss/AboutMe.scss"

function AboutMe() {
  const aboutMeElement = useRef<HTMLInputElement | null>(null)
  useIntersectionObserver(aboutMeElement)

  return (
    <>
      <div className="about-me-circle-wrapper">
        <div className="circle-1"></div>
        <div className="circle-2-no-fill"></div>
        <div className="circle-3"></div>
      </div>
      <div className="about-me-wrapper" ref={aboutMeElement}>
        <div className="welcome">Welcome!</div>
        <div className="my-name">Hi, I am Emiri.</div>
        <div className="job-title">Frontend Developer</div>
        <div className="about-me-description">
          Occasionally design UI and I enjoy having responsibilities for both
          creating UI that I envision and giving them shape by coding. I am
          passionate for both personal growth and software development and have
          the proven ability to work cross-functionally. Besides that, I also
          have experience working internationally, so I can easily adjust myself
          to new environments and love new challenges.
        </div>
      </div>
    </>
  )
}
export default AboutMe
