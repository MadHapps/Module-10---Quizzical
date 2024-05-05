import "./Quiz.css";
import { Link } from "react-router-dom";
import Question from "../components/Question";
import { useEffect, useState } from "react";

export default function Quiz() {
  const sessionId = sessionStorage.key("sessionId")
    ? sessionStorage.getItem("sessionId")
    : fetch("https://opentdb.com/api_token.php?command=request")
        .then((res) => res.json())
        .then((data) => {
          sessionStorage.setItem("sessionId", data.token);
          return data.token;
        });

  const [questions, setQuestions] = useState(null)
      
  !questions &&
  fetch(`https://opentdb.com/api.php?amount=5&encode=url3986&token=${sessionId}`)
    .then((res) => res.json())
    .then((data) => setQuestions(data.results));



  return (
    <main className="page-wrapper">
      {questions && questions.map((question, index) => (
        <Question key={index} data={question} />
      ))}
      <Link to="/review" className="router-link-button">
        Check answers
      </Link>
    </main>
  );
}
