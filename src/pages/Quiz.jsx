/* eslint-disable react/prop-types */
import "./Quiz.css";
import { Link } from "react-router-dom";
import Question from "../components/Question";
import { useEffect } from "react";

export default function Quiz({
  questions,
  setQuestions,
  generateNewQuestions,
}) {
  useEffect(() => {
    sessionStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);

  !questions && generateNewQuestions();

  function handleSelection(id, selection, answer) {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) => {
        if (question.id === id) {
          const isCorrect = selection === answer;
          return {
            ...question,
            selected: selection,
            isCorrect: isCorrect,
          };
        }
        return question;
      });
    });
  }

  return (
    <main className="page-wrapper">
      <button onClick={generateNewQuestions}>Generate New Questions</button>
      {questions &&
        questions.map((question) => (
          <Question
            key={question.id}
            id={question.id}
            data={question}
            allAnswers={question.allAnswers}
            onClick={handleSelection}
            selected={question.selected}
            isCorrect={question.isCorrect || null}
          />
        ))}
      <Link
        to={{ pathname: "/review", state: { questions } }}
        className="router-link-button"
      >
        Check answers
      </Link>
    </main>
  );
}
