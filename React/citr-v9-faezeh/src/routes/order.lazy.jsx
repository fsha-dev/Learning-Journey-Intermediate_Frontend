import Pizza from "../Pizza";
import { useState, useEffect, useContext, Component } from "react";
import Cart from "../Cart";
import { CartContext } from "../contexts";
import { LazyRoute, createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/order")({ component: { Order } });

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
function Order() {
  const [pizzasTypes, setPizzasTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useContext(CartContext);

  let price, selectedPizza;

  if (!loading) {
    selectedPizza = pizzasTypes.find((pizza) => pizzaType === pizza.id);
    price = intl.format(
      selectedPizza.sizes ? selectedPizza.sizes[pizzaSize] : "",
    );
  }

  async function fetchPizzasType() {
    const fetchRes = await fetch("api/pizzas");
    const pizzasJson = await fetchRes.json();
    setPizzasTypes(pizzasJson);
    setLoading(false);
  }

  useEffect(() => {
    fetchPizzasType();
  }, []);

  async function checkout() {
    setLoading(true);
    await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
    });
    setCart([]);
    setLoading(false);
  }

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCart([...cart, { pizza: selectedPizza, size: pizzaSize }]);
          console.log(pizzaSize, selectedPizza);
        }}
      >
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              name="pizza-type"
              value={pizzaType}
              onChange={(e) => setPizzaType(e.target.value)}
            >
              {pizzasTypes.map((pizza) => (
                <option key={pizza.id} value={pizza.id}>
                  {pizza.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input
                  type="radio"
                  checked={pizzaSize === "S"}
                  value="S"
                  name="pizza-size"
                  id="pizza-s"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  type="radio"
                  checked={pizzaSize === "M"}
                  value="M"
                  name="pizza-size"
                  id="pizza-m"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  type="radio"
                  checked={pizzaSize === "L"}
                  value="L"
                  name="pizza-size"
                  id="pizza-l"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
        </div>
        <div className="order-pizza">
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <Pizza
              name={selectedPizza.name}
              description={selectedPizza.description}
              pic={selectedPizza.image}
            />
          )}
          <p>{price}</p>
        </div>
      </form>
      {loading ? <h2>Loading...</h2> : <Cart cart={cart} checkout={checkout} />}
    </div>
  );
}
