import "./App.css";

function App() {
  const iframe = document.getElementsByTagName("iframe");
  const iWindow = iframe.contentWindow;
  const iDocument = iWindow.document;
  console.log("aaa= ", { iframe, iWindow, iDocument });

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
