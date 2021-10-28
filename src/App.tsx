import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import { AdminPanel } from './modules/components/AdminPanel/AdminPanel';
import { Header } from './modules/components/Header';
import { Blog } from './modules/pages/Blog/Blog';
import { Routes } from './modules/routes/Routes';

function App() {
  const [adminPanel, setAdminPanel] = useState<boolean>(false);
  const password = 'irma2021';

  const onClickPasswordLogin = (inputPassword: string) => {
    if (password === inputPassword) {
      setAdminPanel(true);
      console.log('im Hier');
    } else {
      setAdminPanel(false);
    }
  };

  return (
    <div className="App">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      {adminPanel ? (
        <>
          <HashRouter>
            <Routes />
          </HashRouter>
        </>
      ) : (
        <AdminPanel password={password} onClickPasswordLogin={onClickPasswordLogin} />
      )}
    </div>
  );
}

export default App;
