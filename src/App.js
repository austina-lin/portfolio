import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Portfolio/>
    </div>
  );
}

export default App;
