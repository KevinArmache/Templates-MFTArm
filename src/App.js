import "./App.css";

import Main from "./components/main/Main";
import Home from "./components/Home/Home";
import Features from "./components/features/features";
import Analyze from "./components/analyze/analyze";
import Selectyourplan from "./components/selectyourplan/selectyourplan";
import Hearwhattheysay from "./components/hearwhattheysay/hearwhattheysay";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Main />
      <Home />
      <Features />
      <Analyze />
      <Selectyourplan />
      <Hearwhattheysay />
      <Footer />
    </div>
  );
}

export default App;
