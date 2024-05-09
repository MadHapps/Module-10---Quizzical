/* eslint-disable react/prop-types */
import "./Review.css";
import { Link } from "react-router-dom";
import ReviewedQuestion from "../components/ReviewedQuestion";

export default function Review({ questions }) {
  const correctAnswerCount = questions.filter(
    (question) => question.isCorrect === true
  ).length;

  return (
    <main className="page-wrapper">
      {questions &&
        questions.map((question) => (
          <ReviewedQuestion
            key={question.id}
            data={question}
            allAnswers={question.allAnswers}
          />
        ))}
      <section className="results-wrapper">
        <h2>
          You scored {correctAnswerCount}/{questions.length} correct answers!
        </h2>
        <Link to="/">Play again</Link>
      </section>
    </main>
  );
}
