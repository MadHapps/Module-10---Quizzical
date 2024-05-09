/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./Front.css";
import { Link } from "react-router-dom";

export default function Front({ generateNewQuestions }) {
  useEffect(() => {
    generateNewQuestions()
  }, []);

  return (
    <main className="page-wrapper">
      <h1 className="front-title">Quizzical</h1>
      <h2 className="front-description">
        Can you correctly answer 5 random questions?
      </h2>
      <Link to="/quiz" className="router-link-button">
        Start quiz
      </Link>
    </main>
  );
}
