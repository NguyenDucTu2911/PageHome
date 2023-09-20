import React from 'react'
import video from "../assets/video.mp4";
import "./module.banner.scss";
import Search from "./Search";
import Navbar from './Navbar';

function Banner() {
    return (
        <div className="Banner">
            <Navbar />
            <video id="background-video" autoPlay loop muted>
                <source src={video} type="video/mp4" />
                <source src={video} type="video/ogg" />
                {/* Provide fallback content here */}
            </video>
            <div className="Banner__wrapper">
                <h2 className="Banner__title" style={{ color: "#ffffff" }}>Where do you want to go?</h2>
                <div className="Banner__tagline" style={{ color: "#ffffff" }}>Trips, experiences, and places. All in one service.</div>
            </div>
            <Search />
        </div>
    )
}

export default Banner;