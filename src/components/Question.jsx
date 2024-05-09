/* eslint-disable react/prop-types */
import "./Question.css";

export default function Question({ data, allAnswers, onClick }) {
  const { correct_answer, question, selected, id } = data;

  return (
    <section className="question-wrapper">
      <h1>{question}</h1>
      <ul className="question-list">
        {allAnswers ? (
          allAnswers.map((answer, index) => (
            <li key={index}>
              <button
                id={id + index}
                onClick={() => onClick(id, answer, correct_answer, allAnswers)}
                className={`question-list-item ${
                  answer === selected ? "selected" : ""
                }`}
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
