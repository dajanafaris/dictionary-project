import "./App.css";
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <h1> Dictonary App</h1>
      <header className="App-header"></header>
      <main>
        <Dictionary defaultKeyword="nebula" />
      </main>
      <footer className="App-footer">
        <small>
          <a
            href="https://github.com/dajanafaris/dictionary-project"
            target="_blank"
            rel="noreferrer"
            className="codeLink"
          >
            {" "}
            Open source code
          </a>
          by
          <a
            href="https://www.linkedin.com/in/dajana-742673171/"
            target="_blank"
            rel="noreferrer"
            className="codeLink"
          >
            {" "}
            Dajana Faris
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
