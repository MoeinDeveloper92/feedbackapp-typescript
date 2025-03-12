import { createContext, useState } from 'react';
import { CreateFeedbackDto, Feedback, GlobalState } from '../types';
import { v4 as uuidv4 } from 'uuid';
//this is the state that we want to consume in other compnetns
const FeedbackContext = createContext<GlobalState | null>(null);

export const FeedbackProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([
    { id: 1, text: 'Come from Context', rating: 10 },
  ]);

  //Delete Feedback
  const deleteFeedback = (id: number) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedbacks(feedbacks.filter((item) => item.id !== id));
    }
  };

  //Add Feedbackl
  const addFeedback = (feedback: CreateFeedbackDto) => {
    setFeedbacks([{ ...feedback, id: +uuidv4() }, ...feedbacks]);
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        deleteFeedback,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
