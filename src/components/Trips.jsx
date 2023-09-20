import React from 'react';
import "./module.trip.scss";
import { HiOutlineClock } from "react-icons/hi2";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function Trips() {
  return (
    <div className='trip'>
      <h1 className="title">Best Value Trips</h1>
      <p className='tagline'>Best offers trips from us</p>
      <div className="trip__wrapper animated">
        <div className="trip__card">
          <div className="trip__card--item">
            <img className='trip__img'
              src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg"
              alt="img1"
            />
            <div class="tour_price">$5,000</div>

            <div className="trip__content">
              <h4 className="trip__title">
                French Autumn
              </h4>
              <p className="trip__description">
                City Tours, Urban
              </p>
            </div>

            <div className="tour__attribute">
              <div className="tour__start">
                <div className="tour--rating">
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.5}
                    precision={0.1}
                    readOnly
                    size="large"
                    sx={{
                      fontSize: "15px",
                      color: '#1ec6b6'
                    }} />
                </div>
                <p>4 reviews</p>
              </div>

              <div className="tour__datetime">
                <div className="tour__iconclock">
                  <HiOutlineClock />
                </div>
                <p>6 days</p>
              </div>
            </div>
          </div>
        </div>

        <div className="trip__card">
          <div className="trip__card--item">

            <img className='trip__img'
              src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg"
              alt="img1"
            />

            <div class="tour_price">$6,000</div>


            <div className="trip__content">
              <h4 className="trip__title">
                French Autumn
              </h4>
              <p className="trip__description">
                City Tours, Urban
              </p>
            </div>

            <div className="tour__attribute">
              <div className="tour__start">
                <div className="tour--rating">
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.5}
                    precision={0.1}
                    readOnly
                    size="large"
                    sx={{
                      fontSize: "15px",
                      color: '#1ec6b6'
                    }} />
                </div>
                <p>4 reviews</p>
              </div>
              <div className="tour__datetime">
                <div className="tour__iconclock">
                  <HiOutlineClock />
                </div>
                <p>6 days</p>
              </div>
            </div>
          </div>
        </div>

        <div className="trip__card">
          <div className="trip__card--item">

            <div class="tour_label">Sale</div>
            <img className='trip__img'
              src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg"
              alt="img1"
            />

            <div class="tour_price has_discount">
              <span class="normal_price">
                $3,000
              </span>
              $2,50
            </div>

            <div className="trip__content">
              <h4 className="trip__title">
                French Autumn
              </h4>
              <p className="trip__description">
                City Tours, Urban
              </p>
            </div>

            <div className="tour__attribute">
              <div className="tour__start">
                <div className="tour--rating">
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.5}
                    precision={0.1}
                    readOnly
                    size="large"
                    sx={{
                      fontSize: "15px",
                      color: '#1ec6b6'
                    }} />
                </div>
                <p>4 reviews</p>
              </div>
              <div className="tour__datetime">
                <div className="tour__iconclock">
                  <HiOutlineClock />
                </div>
                <p>6 days</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Trips