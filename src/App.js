import "./App.css";

function App() {
  return (
    <div className="App">
      <p>This is iFrame cobiro test in smokingcanary!!</p>
      <iframe
        name="bloom"
        title="bloom"
        src="https://smokingcanary.app.letsbloom.com/partners/cobiro/apply"
        style={{
          maxWidth: "900px",
          height: "max-content",
          margin: "75px auto 40px",
          border: "1px solid #c4c4c4",
          borderRadius: "8px",
        }}
      ></iframe>
    </div>
  );
}

export default App;
