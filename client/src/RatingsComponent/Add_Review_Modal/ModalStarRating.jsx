/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useMemo } from 'react';
import ModalStarIcon from './ModalStarIcon.jsx';

const ModalStarRating = ({
  index, starRating, hoverStarRating, onMouseEnter, onMouseLeave, onSaveRating,
}) => {
  const fillStar = useMemo(() => {
    if (hoverStarRating >= index) {
      return '#fbd53fbd';
    } if (!hoverStarRating && starRating >= index) {
      return '#fbd53fbd';
    }
    return 'white';
  }, [starRating, hoverStarRating, index]);

  return (
    <div
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}
    >
      <ModalStarIcon fill={fillStar} />
    </div>
  );
};

export default ModalStarRating;
