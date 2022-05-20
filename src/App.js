import "./App.css";

function App() {
  return (
    <div className="App">
      <p>This is iFrame youtube test</p>
      <iframe src="https://www.youtube.com/embed/cWDJoK8zw58"></iframe>
      <p>This is iFrame cobiro test</p>
      <iframe
        name="bloom"
        title="bloom"
        referrerPolicy="none"
        src="https://app.letsbloom.com/partners/cobiro/apply"
        width="800"
        height="930"
      ></iframe>
      <p>This is iFrame clearco test</p>
      <iframe
        title="clearco"
        referrerPolicy="same-origin"
        loading="eager"
        src="https://my.clearbanc.com/partners/Cart-Com/signup-capital?logo_options=both"
        height="840"
        style={{
          margin: 0,
          padding: 0,
          width: "100%",
          border: "1px solid #f7f7f7",
        }}
      ></iframe>
    </div>
  );
}

export default App;
