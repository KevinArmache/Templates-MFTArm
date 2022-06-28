import "./App.css";

import Main from "./components/main/Main";
import Home from "./components/Home/Home";
import Features from "./components/features/features";
import Analyze from "./components/analyze/analyze";

function App() {
  return (
    <div className="App">
      <Main />
      <Home />
      <Features />
      <Analyze />
    </div>
  );
}

export default App;
