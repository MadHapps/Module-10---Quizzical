import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Front from "./pages/Front";
import Quiz from "./pages/Quiz";
import Review from "./pages/Review";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
