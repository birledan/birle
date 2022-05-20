import "./App.css";

function App() {
  setTimeout(() => {
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
      alert("unavailable");
    }
  }, 5000);

  return (
    <div className="App">
      <p>This is iFrame cobiro test!</p>
      <iframe
        name="bloom"
        title="bloom"
        src="https://smokingcanary.app.letsbloom.com/partners/cobiro/apply"
        width="800"
        height="930"
      ></iframe>
    </div>
  );
}

export default App;
