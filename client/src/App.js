import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import JobList from './components/JobList';


function App() {
  return (

    <div className="App">
      
      {/* <header className="App-header">
        <h1> Hello from the client side</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

<Header />
      <Routes>
        <Route path="/" element={<JobList />} />
      </Routes>
    </div>
  );
}

export default App;
