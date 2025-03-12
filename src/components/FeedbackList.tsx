import { use } from 'react';
import FeedbackItem from './FeedbackItem';
import { AnimatePresence, motion } from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';
type Props = {
  handleDelete: (id: number) => void;
};

const FeedbackList = ({ handleDelete }: Props) => {
  const state = use(FeedbackContext);

  if (!state?.feedbacks || state.feedbacks.length === 0) {
    return <h1>Therer is no feedback yet!</h1>;
  }
  return (
    <div>
      <AnimatePresence>
        {state.feedbacks.map((feedback) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem feedback={feedback} handleDelete={handleDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
