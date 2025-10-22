import { useState, useEffect } from "react";
import "./../App.css";

export default function ExOne() {
  const [count, setCount] = useState(0);
  const greeting = () => console.log("Welcome", 1);

  useEffect(() => {
    const greet = setInterval(greeting, 1000);
    // return () => clearInterval(greet);
    // setInterval(() => {
    //   console.log("hello welcome");
    // }, 1000);
  }, []);

  return (
    <>
      <div className="center">
        <h1>{count}</h1>
        <button type="button" onClick={() => setCount(count + 1)}>
          Click here
        </button>
      </div>
    </>
  );
}
