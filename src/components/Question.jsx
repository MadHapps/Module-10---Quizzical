/* eslint-disable react/prop-types */
import "./Question.css";

export default function Question({ data }) {
  const { correct_answer, incorrect_answers, question } = data;
  const answerList = [correct_answer, ...incorrect_answers];

  const decodedAnswerList = answerList.map(answer => decodeURIComponent(answer))
  const decodedQuestion = decodeURIComponent(question)

  console.log(correct_answer);

  return (
    <section className="question-wrapper">
      <h1>{decodedQuestion}</h1>
      <ul className="question-list">
        {decodedAnswerList ? (
          decodedAnswerList.map((answer, index) => (
            <li key={index} className="question-list-item">
              {answer}
            </li>
          ))
        ) : (
          <p>Weird... its not working!</p>
        )}
      </ul>
    </section>
  );
}
