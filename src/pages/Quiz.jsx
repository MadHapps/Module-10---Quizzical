/* eslint-disable react/prop-types */
import "./Quiz.css";
import { Link } from "react-router-dom";
import Question from "../components/Question";
import { useEffect, useState } from "react";

export default function Quiz({
  questions,
  setQuestions,
  generateNewQuestions,
}) {

  const [areQuestionsAnswered, setAreQuestionsAnswered] = useState(false)

  
  !questions && generateNewQuestions();
  
  function handleSelection(id, selection, answer) {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) => {
        if (question.id === id) {
          const isCorrect = selection === answer;
          return {
            ...question,
            selected: selection,
            isSelected: true,
            isCorrect: isCorrect,
          };
        }
        return question;
      });
    });
  }
  
  useEffect(() => {
    sessionStorage.setItem("questions", JSON.stringify(questions));
    setAreQuestionsAnswered(questions.length === questions.filter(question => question.isSelected).length)
  }, [questions]);

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
            isSelected={question.isSelected}
            isCorrect={question.isCorrect || null}
          />
        ))}
      <Link
        to={areQuestionsAnswered ? "/review" : "#"}
        className={`review-button ${!areQuestionsAnswered && "greyed-out"}`}
      >
        Check answers
      </Link>
    </main>
  );
}
