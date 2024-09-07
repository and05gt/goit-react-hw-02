import "./Feedback.css";

const Feedback = ({ data, total, positive }) => {
  return (
    <div className="feedback-wrapper">
      <ul>
        <li className="feedback-good">Good: {data.good}</li>
        <li>Neutral: {data.neutral}</li>
        <li className="feedback-bad">Bad: {data.bad}</li>
        <li>Total: {total}</li>
        {positive > 75 ? (
          <li className="feedback-good">Positive: {positive}%</li>
        ) : <li>Positive: {positive}%</li> && positive < 25 ? (
          <li className="feedback-bad">Positive: {positive}%</li>
        ) : (
          <li>Positive: {positive}%</li>
        )}
      </ul>
    </div>
  );
};

export default Feedback;
