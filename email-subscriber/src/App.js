import "./App.css";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="App">
      <header className="App-header bg-slate-400">
        <div className="">
          <p>The Email Subscriber</p>
        </div>
        <input type="checkbox" name="light/dark" id="switch" />
      </header>
      <div>
        <Subscribe />
      </div>
    </div>
  );
}

export default App;
