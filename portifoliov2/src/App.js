import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h1 className="text-3xl font-bold border-2">Hello world!</h1>
      </header>
    </div>
  );
}

export default App;
