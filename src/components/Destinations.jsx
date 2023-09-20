import React from 'react'
import "./module.destination.scss";

function Destinations() {
    return (
        <div id="destination" className='destination'>
            <h1 className="title">Popular Destinations</h1>
            <p className='tagline'>World's best tourist destinations</p>
            <div className="destination__wrapper">
                <div className="destination__card">
                    <div className="destination--item">
                        <p className='destination__title'>Tokyo</p>
                        <img
                            className="destination__img"
                            src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy.jpg" alt="Image1" />
                    </div>
                </div>

                <div className="destination__card">
                    <div className="destination--item">
                        <p className='destination__title'>Seoul</p>
                        <img
                            className="destination__img"
                            src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488.jpg" alt="Image1" />
                    </div>
                </div>

                <div className="destination__card">
                    <div className="destination--item">
                        <p className='destination__title'>Paris</p>
                        <img
                            className="destination__img"
                            src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4.jpg" alt="Image1" />
                    </div>
                </div>

                <div className="destination__card">
                    <p className='destination__title'>London</p>
                    <img
                        className="destination__img"
                        src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1.jpg" alt="Image1" />
                </div>
            </div>

        </div>
    )
}

export default Destinations