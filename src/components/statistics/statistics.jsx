export const Statistics = ({
  positivePercentage,
  good,
  neutral,
  bad,
  total,
}) => {
  return (
    <>
      <p>Good: {good} &#128512;</p>
      <p>Neutral: {neutral} &#128528;</p>
      <p>Bad: {bad} &#128545;</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </>
  );
};
