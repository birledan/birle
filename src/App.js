import "./App.css";

function App() {
  function lsTest() {
    var test = "test";
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  if (lsTest() === true) {
    alert("available");
  } else {
    // unavailable
    alert("unavailable");
  }

  return (
    <div className="App">
      <p>This is iFrame cobiro test!</p>
      <iframe
        id="bloomID"
        name="bloom"
        title="bloom"
        src="https://87bd-93-119-226-38.eu.ngrok.io/partners/cobiro/apply"
        width="800"
        height="930"
      ></iframe>
    </div>
  );
}

export default App;
