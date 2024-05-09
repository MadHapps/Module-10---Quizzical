/* eslint-disable react/prop-types */
import "./Review.css";
import { Link } from "react-router-dom";
import ReviewedQuestion from "../components/ReviewedQuestion";

export default function Review({ questions, areQuestionsAnswered }) {
  const correctAnswerCount = questions.filter(
    (question) => question.isCorrect === true
  ).length;

  return (
    <main className="page-wrapper">
      {questions && areQuestionsAnswered ? (
        questions.map((question) => (
          <ReviewedQuestion
            key={question.id}
            data={question}
            allAnswers={question.allAnswers}
          />
        ))
      ) : (
        <h1>Tsk tsk, so sneaky! Go back and answer those questions!</h1>
      )}
      <section className="results-wrapper">
        <h2>
          You scored {correctAnswerCount}/{questions.length} correct answers!
        </h2>
        <Link to="/">Play again</Link>
      </section>
    </main>
  );
}
