import "./App.css";

function App() {
  let counter = 5;

  function updateP() {
    counter++;
    console.log(counter);
  }

  return (
    <div className="App">
      <p>{counter}</p>

      <button onClick={updateP}>Increase</button>
    </div>
  );
}

export default App;
