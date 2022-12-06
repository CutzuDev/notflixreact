import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Results from "./pages/Results";
import MoviePage from "./components/MoviePage";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="app__body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results/:searchTerm" element={<Results />} />
            {/* <Route path="/results" element={<Results />} /> */}
            <Route path="/movie/:id" element={<MoviePage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
