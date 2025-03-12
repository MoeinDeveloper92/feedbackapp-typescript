import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import { FeedbackProvider } from './context/FeedbackContext';
const App = () => {
  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
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
