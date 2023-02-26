import "./scss/Languages.scss"
import { VscTriangleRight } from "react-icons/vsc"

function Languages() {
  return (
    <>
      <div className="languages-section-wrapper">
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
