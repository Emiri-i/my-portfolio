import React, { useEffect, useState } from "react"
const browserSizeContext = React.createContext<{ browserWidth: number }>({
  browserWidth: 0,
})
export { browserSizeContext }
const BrowserSizeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [browserInnerWidth, setBrowserInnerWidth] = useState<number>(0)
  useEffect(() => {
    onResize()
    setBrowserInnerWidth(window.innerWidth)
    console.log("window.innerWidth", window.innerWidth)
  }, [])
  const onResize = () => {
    window.addEventListener("resize", function () {
      setBrowserInnerWidth(window.innerWidth)
      console.log("window.innerWidth", window.innerWidth)
    })
  }
  const contextValue = {
    browserWidth: browserInnerWidth,
  }
  return (
    <browserSizeContext.Provider value={contextValue}>
      {children}
    </browserSizeContext.Provider>
  )
}
export default BrowserSizeContextProvider
