import { useState } from "react";

function Header({ cartE }) {
  return (
    <nav>
      <h1 className="logo">Pedre Gino's Pizza</h1>
      <div className="nav-cart">
        🛒
        <span className="nav-cart-number">{cartE ? cartE.length : 0}</span>
      </div>
    </nav>
  );
}

export default Header;
