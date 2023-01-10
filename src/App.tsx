import React from 'react';
import sean from './seanProfilePicture.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sean} className="App-logo" alt="logo" />
        <p>
          {`Hello Sean :)`}
        </p>
      </header>
    </div>
  );
}

export default App;
