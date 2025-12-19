import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Nav/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h1 className="stroke-black-title text-9xl w-full">Hello world!</h1>
      </header>
    </div>
  );
}

export default App;
