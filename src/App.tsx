import React from "react"
import "./App.scss"
import Header from "./Components/Header"
import Main from "./Components/Main"
import BrowserSizeContextProvider from "./store/BrowserSizeContext"

function App() {
  return (
    <div className="App">
      <BrowserSizeContextProvider>
        <div className="wrapper">
          <Header />
          <Main />
        </div>
      </BrowserSizeContextProvider>
    </div>
  )
}

export default App
