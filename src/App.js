import "./App.css";

function App() {
  const setCookie = () => {
    var date = new Date("Februari 10, 2013");
    var dateString = date.toGMTString();
    var cookieString = "pizdietz" + dateString;
    document.cookie = cookieString;
  };

  const getCookie = () => {
    alert(document.cookie);
  };
  setCookie();
  getCookie();

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
