import { createRoot } from "react-dom/client";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Header from "./Header";
import { StrictMode, useState } from "react";
import { CartContext } from "./contexts";

const App = () => {
  const cartHook = useState([]);
  return (
    <>
      <StrictMode>
        <CartContext value={cartHook}>
          <Header />
          <Order />
          <PizzaOfTheDay />
        </CartContext>
      </StrictMode>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />); //Hey , inside of root go and stamp app once -> you get instance of the class or component
