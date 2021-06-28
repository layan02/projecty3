import React from 'react';
import logo from './ebaylogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <p>تسوق حسب الاقسام</p>
        <input className="searchBar" />
      </header>
    </div>
  );
}
export default App;
