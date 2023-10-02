import "./App.css";
import Header from "./components/Header";
import PlantList from "./components/PlantList";

import { plantsArr } from "./data/plantData";

function App() {
  return (
    <div className="App">
      <Header amountOfPlants={plantsArr.length} />
      <main>
        <PlantList plants={plantsArr} />
      </main>
    </div>
  );
}

export default App;
