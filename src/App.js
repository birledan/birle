import "./App.css";

function App() {
  return (
    <div className="App">
      <p>This is iFrame cobiro test in smokingcanary!!</p>
      <iframe
        id="bloomID"
        name="bloom"
        title="bloom"
        src="https://smokingcanary.app.letsbloom.com/partners/cobiro/apply"
        width="800"
        height="930"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}

export default App;
