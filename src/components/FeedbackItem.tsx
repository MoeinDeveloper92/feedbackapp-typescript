import { useContext } from 'react';
import { Feedback } from '../types';
import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';
//Data Encapsulation
//Each compoentn has it's own behavior
type Props = {
  feedback: Feedback;
};
const FeedbackItem = ({ feedback }: Props) => {
  const state = useContext(FeedbackContext);

  const handleClick = (id: number) => {
    state?.deleteFeedback(id);
  };
  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button onClick={() => handleClick(feedback.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
};

export default FeedbackItem;
