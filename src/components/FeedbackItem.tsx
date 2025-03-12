import { useState } from 'react';
import { Feedback } from '../types';

//Data Encapsulation
//Each compoentn has it's own behavior
type Props = {
  feedback: Feedback;
};
const FeedbackItem = ({ feedback }: Props) => {
  const [rating, setRating] = useState<number>(feedback.rating);
  const [text, setText] = useState<string>(feedback.text);

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  );
};

export default FeedbackItem;
