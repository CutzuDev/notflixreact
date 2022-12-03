import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Results from "./pages/Results";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="app__body">
          <Routes>
            <Route path="/" element={<Results />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
