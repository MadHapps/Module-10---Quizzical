/* eslint-disable react/prop-types */
import "./Question.css";

export default function ReviewedQuestion({ data, allAnswers }) {
  const { correct_answer, question, selected, isCorrect, id } = data;

  return (
    <section className="question-wrapper">
      <h1>{question}</h1>
      <ul className="question-list">
        {allAnswers ? (
          allAnswers.map((answer, index) => (
            <li key={index}>
              <button
                id={id + index}
                className={`question-list-item 
                ${selected === answer && isCorrect && "correct"}
                ${selected === answer && !isCorrect && "incorrect"}
                ${answer === correct_answer && "correct"}
                `}
              >
                {answer}
              </button>
            </li>
          ))
        ) : (
          <p>Weird... its not working!</p>
        )}
      </ul>
    </section>
  );
}
