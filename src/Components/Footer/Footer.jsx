    import React from "react";
    import { Link } from "react-router-dom";
    import "./Footer.css";
    import {motion} from "framer-motion"

    export default function Footer() {
    return (
        <>
        <motion.div
        initial={{y:300}}
        transition={{
            duration:2,
            type:"tween",


        }}
        whileInView={{
            y:0

        }}
        
        className="footer pt-5 pb-5 mt-5 text-center ">
            <div className="container pt-3">
            <div className="row">
                <div className=" col-12 col-lg-4 col-md-6">
                <img
                    className="mb-5"
                    src={require("../../Images/avatar-1001894426041.jpg")}
                    alt=""
                />
                <p className="text-white-50 lh-lg mb-5">
                    Pellentesque in ipsum id orci porta dapibus. Vivamus magna
                    justo, lacinia eget consectetur sed, convallis at tellus.
                </p>
                </div>
                <div className="col-12 col-lg-4 col-md-6">
                <div className="links">
                    <h5 className="text-light">links</h5>
                    <ul className="list-unstyled text-white-50 lh-lg">
                    <li className="nav-item">
                        <Link className="nav-link" to="home">
                        Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="Stethoscope">
                        Stethoscope
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="thermometer">
                        Thermometer
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="Otoscope">
                        Otoscope
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="scrup">
                        scrup
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="contact">
                        contact
                        </Link>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6">
                <h5 className="text-light mb-3">Contact Us</h5>
                <p className="text-white-50 lh-lg mb-4">
                    Get in touch with us via mail phone.We are waiting for your call
                    or message
                </p>

                <div className="contact mt-5text-capitalize">
                    <ul className="d-flex gap-3  justify-content-center list-unstyled">
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100012194289790">
                        <i class="fa-brands fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/AhmedElRooby2?t=jw2IvMfAmNMl-Ri-bWzqtw&s=08">
                        <i class="fa-brands fa-twitter"></i>{" "}
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/ahmed-eid-8b66682a6">
                        <i class="fa-brands fa-linkedin"></i>{" "}
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ahmed-elrooby">
                        <i class="fa-brands fa-github"></i>{" "}
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="copy mt-3 mb-3 text-capitalize" style={{color:"white",fontSize:"20px"}}>
                Created By <span className="name fw-bold">ahmed </span>© 2024 -{" "}
                <span className="site fw-bold">AddStore</span>
                </div>
            </div>
            </div>
        </motion.div>
        </>
    );
    }
