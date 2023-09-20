import React from 'react';
import "./module.standard.scss";

function Standard() {
  return (
    <>
    <div class="standard">
        <h1 className="title">Why Choose Us</h1>
        <p className='tagline'>Here are reasons you should plan trip with us</p>
        <div className="standard__wrappe">
            <div className="standard__item">
                    <img className="standard__img" src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png" alt="Hotel" />
                    <h4>Handpicked Hotels</h4>
                    <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
            </div>
            
             <div className="standard__item">
                
                    <img className="standard__img" src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png" alt="Hotel" />
                    <h4>World Class Service</h4>
                    <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                
            </div>

             <div className="standard__item">
                    <img className="standard__img" src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png" alt="Hotel" />
                    <h4>Best Price Guarantee</h4>
                    <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
            </div>
        </div>
    </div>
    <div style={{ 
        height: "60vh", 
        backgroundImage: "url(https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24377.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginBottom: "30px"
    }}/>
    </>
  )
}

export default Standard