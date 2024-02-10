    import React from 'react'
    import "./Navbar.css";
    import { Link } from 'react-router-dom';
    import{motion}from "framer-motion"

    export default function Navbar() {
        return <>
        <motion.nav
        initial={{scale:0.8}}
        transition={{
            duration:0.5,
            type:"tween",


        }}
        whileInView={{
            scale:1
        }}
        className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <img className="navbar-brand " src={require("../../Images/avatar-1001894426041.jpg")}/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className=" navbar-toggler-icon"style={{color:"white"}}></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="Stethoscope">Stethoscope</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="thermometer">Thermometer</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="Otoscope">Otoscope</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="scrup">scrup</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="contact">contact</Link>
                    </li>
                    
                </ul>
                </div>
    </div>
    </motion.nav>
    </>
}
