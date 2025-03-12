import React from 'react';
import { Feedback } from '../types';

type Props = {
  feedbacks: Feedback[];
};

const FeedbackStats = ({ feedbacks }: Props) => {
  //calculate ratings average
  let average =
    feedbacks.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedbacks.length;
  average = +average.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className="feedback-stats">
      <h4> {feedbacks.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

export default FeedbackStats;
