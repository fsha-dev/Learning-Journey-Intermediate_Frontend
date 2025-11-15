import { createRoot } from "react-dom/client";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Header from "./Header";
import { StrictMode, useState } from "react";

const App = () => {
  const [cartE, setCartE] = useState([]);
  console.log("app", cartE);
  return (
    <>
      <StrictMode>
        <Header cartE={cartE} />
        <Order cartE={cartE} setCartE={setCartE} />
        <PizzaOfTheDay />
      </StrictMode>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />); //Hey , inside of root go and stamp app once -> you get instance of the class or component
