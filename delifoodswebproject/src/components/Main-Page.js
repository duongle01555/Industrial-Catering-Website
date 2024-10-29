import React from 'react'
import './Main-Page.css'
import Section2 from "./Section2.js";
import Section1 from "./Section1.js";
import Section3 from "./Section3.js";

function MainPage() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <br></br>
      <Section3 />
    </div>
  )
}

export default MainPage;