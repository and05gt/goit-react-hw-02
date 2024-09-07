import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import "./App.css";

const App = () => {
  const [feedbackData, setfeedbackData] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("feedback-data"));
    if (savedData !== null) {
      return savedData;
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("feedback-data", JSON.stringify(feedbackData));
  }, [feedbackData]);

  const updateFeedback = (feedbackType) => {
    setfeedbackData((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const totalFeedback =
    feedbackData.good + feedbackData.neutral + feedbackData.bad;

  const positiveFeedback = Math.round(
    (feedbackData.good / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        setData={setfeedbackData}
        updateData={updateFeedback}
        total={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          data={feedbackData}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
