import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-33893481-5');

function App() {

  const onClick = () => {
    ReactGA.event({
      category: 'Copy change test',
      action: 'Button clicked'
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          onClick={onClick}
          className="App-link"
          rel="noopener noreferrer"
          href="https://reactjs.org"
          target="_blank"
        >
          Click me
        </a>
      </header>
    </div>
  );
}

export default App;
