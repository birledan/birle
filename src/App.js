import "./App.css";

function App() {
  return (
    <div className="App">
      <p>This is iFrame cobiro test in production!!!</p>
      <iframe
        name="bloom"
        title="bloom"
        src="https://app.letsbloom.com/partners/cobiro/apply"
        height="930"
        style={{
          margin: 0,
          padding: 0,
          width: "100%",
          border: "none",
        }}
      />
    </div>
  );
}

export default App;
