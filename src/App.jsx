import { useEffect, useState } from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';
import './App.css';

function App() {
  const [options, setOptions] = useState(() => {
    const savedOptions = window.localStorage.getItem('options');
    if (savedOptions !== null) {
      return JSON.parse(savedOptions);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });



  useEffect(() => {
    window.localStorage.setItem('options', JSON.stringify(options));
  }, [options]);
  


  const resetFeedback = () => {
    setOptions({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };
    const totalFeedback = options.good + options.neutral + options.bad;
  const positiveFeedback = Math.round((options.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setOptions({ ...options, [feedbackType]: options[feedbackType] + 1 });
  };
  return (
    <div>
      <Description />
      <Options
        total={totalFeedback}
        update={updateFeedback}
        reset={resetFeedback}
      />
      {totalFeedback ? (
        <Feedback
          good={options.good}
          neutral={options.neutral}
          bad={options.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      
      ) : (
          <Notification/>
      )}
    </div>
  );
}

export default App;
