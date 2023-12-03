import { useState } from 'react';
import { Statistics } from './statistics/statistics';
import { FeedbackOptions } from './feedbackOptions/feedbackOptions';
import { Section } from './section/section';
import { Notification } from './notification/notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedBack = {
    good: good,
    neutral: neutral,
    bad: bad,
  };

  const plusFeedBackAll = option => {
    switch (option) {
      case 'good': {
        setGood(prevState => prevState + 1);

        return;
      }
      case 'neutral': {
        setNeutral(prevState => prevState + 1);

        return;
      }
      case 'bad': {
        setBad(prevState => prevState + 1);

        return;
      }
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={plusFeedBackAll}
          options={Object.keys(feedBack)}
        ></FeedbackOptions>
      </Section>

      {countTotalFeedback() === 0 && (
        <Notification message="There is no feedback"></Notification>
      )}

      {countTotalFeedback() >= 1 && (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      )}
    </>
  );
};

export default App;
