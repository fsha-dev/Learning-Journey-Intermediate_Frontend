import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./contexts";

function Header() {
  const [cart] = useContext(CartContext);
  return (
    <nav>
      <h1 className="logo">Pedre Gino's Pizza</h1>
      <div className="nav-cart">
        🛒
        <span className="nav-cart-number">{cart ? cart.length : 0}</span>
      </div>
    </nav>
  );
}

export default Header;
