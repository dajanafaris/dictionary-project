import "./App.css";
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <h1> Dictonary App</h1>
      <header className="App-header"></header>
      <main>
        <Dictionary defaultKeyword="sun" />
      </main>
      <footer className="App-footer">
        <small>Coded by Dajana Faris</small>
      </footer>
    </div>
  );
}

export default App;
