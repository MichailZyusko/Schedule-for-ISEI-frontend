import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import './index.css';

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
  <div>
    <div className="date-skeleton">
      <Typography component="div" width={150} variant="h3">
        <Skeleton />
      </Typography>
      <Typography component="div" width={100} variant="h4">
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
