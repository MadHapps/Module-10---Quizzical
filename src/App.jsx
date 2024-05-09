import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Front from "./pages/Front";
import Quiz from "./pages/Quiz";
import Review from "./pages/Review";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [questions, setQuestions] = useState(
    JSON.parse(sessionStorage.getItem("questions")) || null
  );
  const [areQuestionsAnswered, setAreQuestionsAnswered] = useState(false);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function generateNewQuestions() {
    fetch(`https://opentdb.com/api.php?amount=5&difficulty=easy&encode=url3986`)
      .then((res) => res.json())
      .then((data) =>
        setQuestions(() => {
          return data.results.map((question) => {
            const incorrectAnswers = question.incorrect_answers.map((answer) =>
              decodeURIComponent(answer)
            );
            const correctAnswer = decodeURIComponent(question.correct_answer);
            let allAnswers = [correctAnswer, ...incorrectAnswers];
            allAnswers.length === 2
              ? (allAnswers = ["True", "False"])
              : (allAnswers = shuffleArray(allAnswers));

            return {
              ...question,
              category: decodeURIComponent(question.category),
              correct_answer: correctAnswer,
              incorrect_answers: incorrectAnswers,
              allAnswers: allAnswers,
              question: decodeURIComponent(question.question),
              id: nanoid(),
              isSelected: false,
            };
          });
        })
      );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Front
              setQuestions={setQuestions}
              generateNewQuestions={generateNewQuestions}
            />
          }
        />
        <Route
          path="/quiz"
          element={
            <Quiz
              questions={questions}
              setQuestions={setQuestions}
              generateNewQuestions={generateNewQuestions}
              areQuestionsAnswered={areQuestionsAnswered}
              setAreQuestionsAnswered={setAreQuestionsAnswered}
            />
          }
        />
        <Route
          path="/review"
          element={
            <Review
              questions={questions}
              areQuestionsAnswered={areQuestionsAnswered}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
