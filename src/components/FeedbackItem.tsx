import { useContext, useState } from 'react';
import { Feedback } from '../types';
import Card from './shared/Card';
import { FaTimes, FaEdit } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';
import Tooltip from './Tooltip';
import Modal from './shared/Modal';
//Data Encapsulation
//Each compoentn has it's own behavior
type Props = {
  feedback: Feedback;
};
const FeedbackItem = ({ feedback }: Props) => {
  const [isOpen, setIsOpent] = useState<boolean>(false);
  const state = useContext(FeedbackContext);

  const handleClick = (id: string) => {
    state?.deleteFeedback(id);
  };

  return (
    <Card>
      <Modal isOpen={isOpen} onClose={setIsOpent}>
        <p>Are you sure you want to delete the Feedback?</p>
        <div className="flex  gap-8">
          <button
            className="border rounded-2xl border-black w-[100px] hover:bg-amber-100 cursor-pointer px-2 py-2"
            onClick={() => handleClick(feedback.id as string)}
          >
            Delete
          </button>
          <button
            className="border rounded-2xl border-black w-[100px] hover:bg-amber-100 cursor-pointer px-2 py-2"
            onClick={() => setIsOpent(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>
      <div className="num-display">{feedback.rating}</div>
      <button onClick={() => setIsOpent(true)} className="close relative group">
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
