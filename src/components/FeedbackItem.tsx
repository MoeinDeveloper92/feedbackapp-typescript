import { useContext } from 'react';
import { Feedback } from '../types';
import Card from './shared/Card';
import { FaTimes, FaEdit } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';
import Tooltip from './Tooltip';
//Data Encapsulation
//Each compoentn has it's own behavior
type Props = {
  feedback: Feedback;
};
const FeedbackItem = ({ feedback }: Props) => {
  const state = useContext(FeedbackContext);

  const handleClick = (id: string) => {
    state?.deleteFeedback(id);
  };
  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button
        onClick={() => handleClick(feedback.id as string)}
        className="close relative group"
      >
        <FaTimes color="purple" />
        <Tooltip text={'delete feedback '} />
      </button>
      <button
        onClick={() => state?.editFeedback(feedback)}
        className="edit relative group"
      >
        <FaEdit color="purple" />
        <Tooltip text={'edit feedback '} />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
};

export default FeedbackItem;
