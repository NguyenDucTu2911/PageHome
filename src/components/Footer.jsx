import React from 'react';
import "./module.footer.scss"
import { HiDevicePhoneMobile, HiClock, HiMapPin } from "react-icons/hi2";
import { AiFillInstagram, AiFillFacebook, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

function Footer() {
    return (
        <footer id='footer'>
            <ul className='footer_widget'>
                <li className="footer_widget--item">
                    <h2>Our Awards</h2>
                    <div className="">
                        <p>London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom.</p>
                        <br />
                        <img className='footer__widget--img' src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png" alt="" />
                    </div>
                </li>
                <li className="footer_widget--item">
                    <h2>Contact Info</h2>
                    <p><HiDevicePhoneMobile />1-567-124-44227</p>
                    <p><HiMapPin />184 Main Street East Perl Habour 8007</p>
                    <p><HiClock />Mon - Sat 8.00 - 18.00 Sunday CLOSED</p>
                    <ul className='footer_widget--social'>
                        <li><AiFillFacebook color="#2D5F9A" /></li>
                        <li><AiFillTwitterCircle color="#00C3F3" /></li>
                        <li><AiFillYoutube color="#cc181e" /></li>
                        <li><AiFillInstagram color="#405de6" /></li>
                    </ul>
                </li>
                <li className="footer_widget--item">
                    <h2>Recent Trips</h2>
                    <ul className='flicker'>
                        <li>
                            <a href="">
                                <img className='flicker__img' src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" alt="" />
                            </a>
                        </li>

                        <li>
                            <a href="">
                                <img className='flicker__img' src="https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg" alt="" />
                            </a>
                        </li>

                        <li>
                            <a href="">
                                <img className='flicker__img' src="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg" alt="" />
                            </a>
                        </li>

                        <li>
                            <a href="">
                                <img className='flicker__img' src="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg" alt="" />
                            </a>
                        </li>

                        <li>
                            <a href="">
                                <img className='flicker__img' src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg" alt="" />
                            </a>
                        </li>

                        <li>
                            <a href="">
                                <img className='flicker__img' src="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg" alt="" />
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="footer__bar">
                <div className='footer__bar--copyright'>© Copyright Grand Tour Theme Demo - Theme by ThemeGoods</div>
                <ul className='footer--item'>
                    <li>Home</li>
                    <li>Tours</li>
                    <li>Blog</li>
                    <li>Purchase Theme</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer