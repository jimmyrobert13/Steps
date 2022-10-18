import "./App.css";
import Wizard from "./page/Wizard";
import { useGlobalState } from "./components/State/index";
import Information from "./page/Information/Information";

function App() {
  const Verification = useGlobalState("information");

  return (
    <div className="App">
      {Verification[0] == false ? <Wizard /> : <Information />}
    </div>
  );
}

export default App;
