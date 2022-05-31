import "./App.css";

function App() {
  return (
    <div className="App">
      <p>This is iFrame cobiro test in smokingcanary!!</p>
      <iframe
        name="bloom"
        title="bloom"
        src="https://smokingcanary.app.letsbloom.com/partners/cobiro/apply"
        width="800"
        height="930"
        style={{
          maxWidth: "900px",
          margin: "75px auto 40px",
          border: "1px solid #c4c4c4",
          borderRadius: "8px",
          padding: "40px",
        }}
      ></iframe>
    </div>
  );
}

export default App;
