import React from "react"
import "./App.scss"
import Header from "./Components/Header"
import Main from "./Components/Main"

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App
