import Header from './components/Header';
import { useState } from 'react';
import { Feedback } from './types';
import { feedbacks as feedbackData } from '../src/data';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

const App = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>(feedbackData);
  const deleteFeedback = (id: number) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedbacks(feedbacks.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList handleDelete={deleteFeedback} feedbacks={feedbacks} />
      </div>
    </>
  );
};

export default App;
