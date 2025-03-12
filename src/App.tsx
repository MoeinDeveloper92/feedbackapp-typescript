import Header from './components/Header';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CreateFeedbackDto, Feedback } from './types';
import { feedbacks as feedbackData } from '../src/data';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import { FeedbackProvider } from './context/FeedbackContext';
const App = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>(feedbackData);
  const deleteFeedback = (id: number) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedbacks(feedbacks.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (feedback: CreateFeedbackDto) => {
    setFeedbacks([{ ...feedback, id: +uuidv4() }, ...feedbacks]);
  };
  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm addFeedback={addFeedback} />
                <FeedbackStats feedbacks={feedbacks} />
                <FeedbackList
                  handleDelete={deleteFeedback}
                  feedbacks={feedbacks}
                />
                <Link to={'/about'} className="btn btn-sm">
                  About
                </Link>
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </FeedbackProvider>
  );
};

export default App;
