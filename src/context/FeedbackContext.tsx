import { createContext, useState } from 'react';
import { Feedback, GlobalState } from '../types';

const FeedbackContext = createContext<GlobalState | null>(null);

export const FeedbackProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([
    { id: 1, text: 'Come from Context', rating: 10 },
  ]);
  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        setFeedbacks,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
