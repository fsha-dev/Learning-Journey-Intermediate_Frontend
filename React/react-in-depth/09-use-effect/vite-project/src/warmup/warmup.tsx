import { useState, useEffect } from "react";
import "./../App.css";

export default function Warmup() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("component mounted");
  }, []);
  useEffect(() => {
    console.log("counter has changed");
  }, [count]);
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
