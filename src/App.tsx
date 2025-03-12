import Header from './components/Header';
import { useState } from 'react';
import { Feedback } from './types';
import { feedbacks as feedbackData } from '../src/data';
import FeedbackList from './components/FeedbackList';

const App = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>(feedbackData);

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedbacks={feedbacks} />
      </div>
    </>
  );
};

export default App;
