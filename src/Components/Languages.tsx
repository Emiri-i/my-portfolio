import "./scss/Languages.scss"
import { VscTriangleRight } from "react-icons/vsc"
import { useRef } from "react"
import useIntersectionObserver from "../hooks/useIntersectionObserver"

function Languages() {
  const languageSectionElem = useRef<HTMLInputElement | null>(null)
  useIntersectionObserver(languageSectionElem)
  return (
    <>
      <div className="circle-language-wrapper">
        <div className="circle-language-1"></div>
        <div className="circle-language-2"></div>
        <div className="circle-language-3"></div>
        <div className="circle-language-4"></div>
        <div className="circle-language-5"></div>
      </div>
      <div className="languages-section-wrapper" ref={languageSectionElem}>
        <div className="section-title">Languages</div>
        <div className="langugages-content">
          <div className="each-language">
            <VscTriangleRight className="icon-languages-section" />
            <div className="language-name">Japanese (native)</div>
          </div>
          <div className="each-language">
            <VscTriangleRight className="icon-languages-section" />
            <div className="language-name">English (fluent)</div>
          </div>
          <div className="each-language">
            <VscTriangleRight className="icon-languages-section" />
            <div className="language-name">French (intermidiate)</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Languages
