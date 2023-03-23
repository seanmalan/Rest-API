import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import JobList from "./components/JobList";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<JobList />} />
      </Routes>
    </div>
  );
}

export default App;
