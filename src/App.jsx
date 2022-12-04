import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Results from "./pages/Results";
import "./App.css";
import MoviePage from "./components/MoviePage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="app__body">
          <Routes>
            <Route path="/" element={<Results />} />
            <Route path="/results/:id" element={<MoviePage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
