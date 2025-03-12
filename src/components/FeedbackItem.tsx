import { useState } from 'react';
import { Feedback } from '../types';
import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa';
//Data Encapsulation
//Each compoentn has it's own behavior
type Props = {
  feedback: Feedback;
  handleDelete: (id: number) => void;
};
const FeedbackItem = ({ feedback, handleDelete }: Props) => {
  const [rating, setRating] = useState<number>(feedback.rating);
  const [text, setText] = useState<string>(feedback.text);

  const handleClick = (id: number) => {
    handleDelete(id);
  };
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button onClick={() => handleClick(feedback.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

export default FeedbackItem;
