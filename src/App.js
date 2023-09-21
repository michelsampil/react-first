import { Card } from "./components/Card";
import ClassCard from "./components/ClassCard";
import { Title } from "./components/Title";
import LittleSection from "./components/LittleSection";

import "./App.css";

const BlackCard = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        margin: "20px",

        padding: "10px",
        color: "white",
      }}
    >
      <h1>Black card 🐈‍⬛</h1>
      <p>Ist nos ada lla maar na list laa nat</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Title />
      <Card />
      <ClassCard />
      {BlackCard}
      <LittleSection />
    </div>
  );
}

export default App;
