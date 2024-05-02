import "./Quiz.css";
import { Link } from "react-router-dom";

export default function Quiz() {
  return (
    <main className="page-wrapper">
      <h1>This is the quiz page~!</h1>
      <Link to="/review" className="router-link-button">
        <button>Check answers</button>
      </Link>
    </main>
  );
}
