import React from 'react';

import "./module.articles.scss";
import { HiChevronRight } from "react-icons/hi2";

function Articles() {
    return (
        <div id="articles" className="articles">
            <h1 className="title">Articles & Tips</h1>
            <p className='tagline'>Explore some of the best tips from around the world</p>
            <div className="articles__wrapper animated">
                <div className="articles__card ">
                    <img className="articles__img" src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg" alt="" />
                    <div className="articles__content">
                        <div className="articles__date">DECEMBER 10, 2016</div>
                        <h3>Memorial Day to Someone Told Me to Travel</h3>
                        <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</p>
                        <button className="btn__articles">Read more <div className="articles__iconnext"><HiChevronRight /></div> </button>
                    </div>
                </div>

                <div className="articles__card">
                    <img className="articles__img" src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg" alt="" />
                    <div className="articles__content">
                        <div className="articles__date">DECEMBER 10, 2016</div>
                        <h3>7 Tips For Nomads On A Budget Trips</h3>
                        <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</p>
                        <button className="btn__articles">Read more <div className="articles__iconnext"><HiChevronRight /></div> </button>
                    </div>
                </div>

                <div className="articles__card">
                    <img className="articles__img" src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg" alt="" />
                    <div className="articles__content">
                        <div className="articles__date">DECEMBER 10, 2016</div>
                        <h3>Taking A Travel Blog Victory Lap</h3>
                        <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache....</p>
                        <button className="btn__articles">Read more <div className="articles__iconnext"><HiChevronRight /></div> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles