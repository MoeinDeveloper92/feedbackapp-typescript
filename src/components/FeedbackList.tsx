import { Feedback } from '../types';
import FeedbackItem from './FeedbackItem';

type Props = {
  feedbacks: Feedback[];
  handleDelete: (id: number) => void;
};

const FeedbackList = ({ feedbacks, handleDelete }: Props) => {
  if (!feedbacks || feedbacks.length === 0) {
    return <h1>Therer is no feedback yet!</h1>;
  }
  return (
    <div>
      {feedbacks.map((feedback) => (
        <FeedbackItem
          key={feedback.id}
          feedback={feedback}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default FeedbackList;
