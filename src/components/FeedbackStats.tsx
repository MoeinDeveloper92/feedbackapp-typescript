import { use } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {
  const state = use(FeedbackContext);

  //calculate ratings average
  let average =
    state?.feedbacks &&
    state.feedbacks.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / state.feedbacks.length;
  average = average && +average.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className="feedback-stats">
      <h4> {state?.feedbacks && state.feedbacks.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average as number) ? 0 : average}</h4>
    </div>
  );
};

export default FeedbackStats;
