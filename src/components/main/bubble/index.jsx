/* eslint-disable */

import React, { useState } from 'react';
import './index.css';

const Bubble = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div onClick={() => setIsOpen(!isOpen)}>
        <div className="bubble" aria-expanded={isOpen}>
          <div className="time">
            <div>{item?.time?.beginsAt}</div>
            <div>{item?.time?.endsAt}</div>
          </div>
          <div className="vl" />
          <div className="lesson">
            {item?.discipline}
          </div>
          <div className="vl" />
          <div className="place">
            <div>{item?.place?.build}</div>
            <div>{item?.place?.room}</div>
          </div>
        </div>
      </div>
      { item.teacher
        ? (
          <div className="accordion-content" aria-expanded={!isOpen}>
            <div className="teacher">
              <div>{item.teacher}</div>
            </div>
          </div>
        ) : null}
    </div>
  );
};

export default Bubble;
