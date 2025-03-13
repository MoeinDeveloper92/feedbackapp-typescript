import React, { FormEvent, use, useState, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';
import { CreateFeedbackDto } from '../types';

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
      const newFeedback: CreateFeedbackDto = {
        text,
        rating,
      };

      if (state?.feedbackEdit.edit === true) {
        state.updateFeedback(
          state.feedbackEdit.item?.id as string,
          newFeedback
        );
        setText('');
      } else {
        //Dispatch feedback merging
        state?.addFeedback(newFeedback);
        setText('');
      }
    }
  };

  //Handling Effects
  useEffect(() => {
    if (state?.feedbackEdit.edit === true) {
      setText(state.feedbackEdit.item?.text as string);
      setRating(state.feedbackEdit.item?.rating as number);
    }
  }, [state?.feedbackEdit]);
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating: number) => setRating(rating)} />
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
