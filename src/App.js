import React from 'react'
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import MainRoute from "./Routing/MainRoute"
import UseState from "./Hooks/UseState/UseState"
const App = () => {
  return (
    <>
      <div className='centerAlign'>
        {/* <MainRoute /> */}
        <UseState />

      </div>
    </>
  )
}

export default App
