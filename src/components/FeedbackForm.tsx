import React, { FormEvent, use, useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {
  const [text, setText] = useState<string>('');
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
  const [message, setMessage] = useState<string | null>(null);
  const [rating, setRating] = useState<number>(10);
  const state = use(FeedbackContext);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters!');
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      //Dispatch feedback merging
      state?.addFeedback(newFeedback);
      setText('');
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(id: number) => setRating(id)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button isDisabled={btnDisabled} type="submit">
            Submit
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
