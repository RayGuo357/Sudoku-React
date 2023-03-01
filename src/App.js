import './App.css';

import { Route, Routes } from 'react-router-dom';

import Board from './components/board';
import Navbar from './components/navbar';
import SubmitBoard from './components/submit';
import Api from './components/api';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <input id="menu-check" type='checkbox'></input>
      <label htmlFor="menu-check">
        <svg id="check" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 6l16 0"></path>
          <path d="M4 12l16 0"></path>
          <path d="M4 18l16 0"></path>
        </svg>
        <svg id="uncheck" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 6l16 0"></path>
          <path d="M4 12l16 0"></path>
          <path d="M4 18l16 0"></path>
        </svg>
      </label>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Board type={"DAILY"} />} />
        <Route path="/random" element={<Board type={"RANDOM"} />} />
        <Route path="/submit" element={<SubmitBoard />} />
        <Route path="/api" element={<Api />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
