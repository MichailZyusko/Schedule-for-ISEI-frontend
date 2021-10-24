import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import './index.css';

const { width } = window.screen;

const PlaceStub = () => (
  <div className="place-skeleton">
    <Typography component="div" variant="caption">
      <Skeleton />
    </Typography>
    <Typography component="div" variant="caption">
      <Skeleton />
    </Typography>
  </div>
);

const BubbleStub = () => (
  <div className="bubble-skeleton">
    <PlaceStub />
    <div className="vl-skeleton" />
    <div className="lesson-skeleton">
      <Typography component="div" variant="h4">
        <Skeleton />
      </Typography>
    </div>
    <div className="vl-skeleton" />
    <PlaceStub />
  </div>
);

const carousel = () => (
  <div className="wrapper-skeleton">
    <div className="date-skeleton">
      <Typography component="div" width={width / (width < 500 ? 3 : 12)} variant="h3">
        <Skeleton />
      </Typography>
      <Typography component="div" width={width / (width < 500 ? 4.5 : 15)} variant="h4">
        <Skeleton />
      </Typography>
    </div>
    <div>
      <BubbleStub />
      <BubbleStub />
      <BubbleStub />
      <BubbleStub />
      <BubbleStub />
      <BubbleStub />
    </div>
  </div>
);

export default carousel;
