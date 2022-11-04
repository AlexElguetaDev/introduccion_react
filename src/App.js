import logo from './logolarnu.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estoy aprendiendo <code>React</code> en larnU.
        </p>
        <a
          className="App-link"
          href="https://es.larnu.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          El mejor bootcamp
        </a>
      </header>
    </div>
  );
}

export default App;
