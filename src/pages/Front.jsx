import "./Front.css";
import { Link } from "react-router-dom";

export default function Front() {
  return (
    <main className="page-wrapper">
      <h1 className="front-title">Quizzical</h1>
      <h2 className="front-description">
        Can you correctly answer 5 random questions?
      </h2>
      <Link to="/quiz" className="router-link-button">
        <button>Start quiz</button>
      </Link>
    </main>
  );
}
