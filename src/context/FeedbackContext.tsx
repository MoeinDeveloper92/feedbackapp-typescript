import { createContext, useState } from 'react';
import {
  CreateFeedbackDto,
  EditableFeedback,
  Feedback,
  GlobalState,
} from '../types';
import { v4 as uuidv4 } from 'uuid';
//this is the state that we want to consume in other compnetns
const FeedbackContext = createContext<GlobalState | null>(null);

export const FeedbackProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([
    { id: '1', text: 'Come from Context', rating: 10 },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState<EditableFeedback>({
    edit: false,
  });

  //Delete Feedback
  const deleteFeedback = (id: string) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedbacks(feedbacks.filter((item) => Number(item.id) !== Number(id)));
    }
  };

  //Add Feedbackl
  const addFeedback = (feedback: CreateFeedbackDto) => {
    setFeedbacks([{ ...feedback, id: uuidv4() }, ...feedbacks]);
  };

  //Set item to be updated
  const editFeedback = (item: Feedback) => {
    console.log('ITEM RECEVIDE IN EDIT FUNCTION', item);
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  //Update feedback
  const updateFeedback = (id: string, updItem: CreateFeedbackDto) => {
    setFeedbacks(
      feedbacks.map((feedback) =>
        feedback.id === id
          ? { id, text: updItem.text, rating: updItem.rating }
          : feedback
      )
    );
    setFeedbackEdit({ edit: false });
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
