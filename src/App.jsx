import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Slider from './Components/Slider/Slider'
import Cards from './Components/Cards/Cards'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import {Helmet} from "react-helmet"
import "./App.css"


export default function App() {
useEffect(() => {
window.addEventListener("scroll",()=>{
if(window.scrollY > 300){
  setShowBtn(true)
}else{
  setShowBtn(false)
}
})

}, [])
const [showBtn, setShowBtn] = useState(true)

  return <>
  <div id="up"></div>

  
    <Helmet>
  <meta charSet="utf-8" />
  <title>AddStore</title>
    </Helmet>
    {showBtn && (<div

    className="container up">
      <a href="#up">^</a>
    </div> )}
  <Navbar />
  <Outlet />
  <Footer />
  </>
}

