import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import { Header } from './modules/components/Header';
import { Blog } from './modules/pages/Blog/Blog';
import { Routes } from './modules/routes/Routes';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes />
      </HashRouter>
    </div>
  );
}

export default App;
