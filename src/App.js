import "./App.css";

function App() {
  if (typeof localStorage !== "undefined") {
    try {
      localStorage.setItem("feature_test", "yes");
      if (localStorage.getItem("feature_test") === "yes") {
        localStorage.removeItem("feature_test");
        // localStorage is enabled
        console.log("localStorage is enabled");
      } else {
        // localStorage is disabled
        console.log("localStorage is disabled");
      }
    } catch (e) {
      // localStorage is disabled
      console.log("err localStorage is disabled");
    }
  } else {
    console.log("ultim localStorage is available");
    // localStorage is not available
  }

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
