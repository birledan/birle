import "./App.css";

function App() {
  return (
    <div className="App">
      <p>This is iFrame cobiro test!</p>
      <iframe
        id="bloomID"
        name="bloom"
        title="bloom"
        src="https://edce-93-122-250-49.eu.ngrok.io/partners/cobiro/apply"
        width="800"
        height="930"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}

export default App;
