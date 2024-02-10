import React from 'react'
import "./Slider.css";

export default function Slider() {
    return <>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
    <div className="carousel-item active">
        <img src={require("../../Images/slide3.jpg")} className="d-block w-100 img-fluid" alt="..."/>
        </div>
        <div className="carousel-item active">
        <img src={require("../../Images/slide4.jpg")} className="d-block w-100 img-fluid" alt="..."/>
        </div>
        <div className="carousel-item active">
        <img src={require("../../Images/slide5.avif")} className="d-block w-100 img-fluid" alt="..."/>
        </div>
        <div className="carousel-item">
        <img src={require("../../Images/2.webp")} className="d-block w-100 img-fluid" alt="..."/>
        </div>
        <div className="carousel-item">
        <img src={require("../../Images/3.webp")} className="d-block w-100  img-fluid" alt="..."/>
        </div>
        <div className="carousel-item">
        <img src={require("../../Images/4.jpg")} className="d-block w-100 img-fluid" alt="..."/>
        </div>
        <div className="carousel-item">
        <img src={require("../../Images/slide.jpg")} className="d-block w-100 img-fluid" alt="..."/>
        </div>
        <div className="carousel-item">
        <img src={require("../../Images/slide2.jpg")} className="d-block w-100 img-fluid" alt="..."/>
        </div>

    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>
    
    </>
}
