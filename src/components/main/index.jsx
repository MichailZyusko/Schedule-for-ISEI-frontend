import React from 'react';
import Skeleton from './skeleton/index';
import Carousel from './carousel';

import './index.css';

const myMain = ({ timeTable }) => (
  <div className="container">
    {timeTable.length ? <Carousel timeTable={timeTable} /> : <Skeleton />}
  </div>
);

export default myMain;
