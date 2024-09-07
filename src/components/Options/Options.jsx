import "./Options.css";

const Options = ({ setData, updateData, total }) => {
  return (
    <div className="btn-wrapper">
      <button
        className="btn-good"
        type="button"
        onClick={() => updateData("good")}
      >
        Good
      </button>
      <button
        className="btn-neutral"
        type="button"
        onClick={() => updateData("neutral")}
      >
        Neutral
      </button>
      <button
        className="btn-bad"
        type="button"
        onClick={() => updateData("bad")}
      >
        Bad
      </button>
      {total > 0 && (
        <button
          type="button"
          onClick={() =>
            setData({
              good: 0,
              neutral: 0,
              bad: 0,
            })
          }
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
