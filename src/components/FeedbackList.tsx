import { Feedback } from '../types';
import FeedbackItem from './FeedbackItem';

type Props = {
  feedbacks: Feedback[];
};

const FeedbackList = ({ feedbacks }: Props) => {
  if (!feedbacks || feedbacks.length === 0) {
    return <h1>Therer is no feedback yet!</h1>;
  }
  return (
    <div>
      {feedbacks.map((feedback) => (
        <FeedbackItem key={feedback.id} feedback={feedback} />
      ))}
    </div>
  );
};

export default FeedbackList;
