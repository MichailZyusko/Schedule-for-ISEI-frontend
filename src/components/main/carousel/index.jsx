/* eslint-disable */

import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Bubble from '../bubble/index';

import './index.css';

const carousel = ({ timeTable }) => (
  <Carousel
    indicators={false}
    stopAutoPlayOnHover
    autoPlay={false}
    animation="slide"
    className="carousel"
  >
    {
            timeTable.map((item, i) => <Item key={i} item={item} />)
        }
  </Carousel>
);

const Item = ({ item }) => (
  <div className="item">
    <div className="date">
      <div className="day-of-week">{item?.dayOfWeek}</div>
      <div className="day-of-month">{item?.dayOfMonth}</div>
    </div>
    <div className="schedule">
      {
                item?.schedule.map((item, i) => <Bubble key={i} item={item} />)
            }
    </div>
  </div>
);

export default carousel;
