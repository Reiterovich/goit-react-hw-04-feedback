import css from './feedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const color = [css.btnG, css.btnN, css.btnB];
  return (
    <>
      {options.map((option, ind) => (
        <button
          key={option}
          className={color[ind]}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </>
  );
};
