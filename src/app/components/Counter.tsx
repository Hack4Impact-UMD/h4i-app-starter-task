"use client";

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

  return (
    <div className="counter-buttons">
      <button onClick={decrement} className="counter-button decrement" aria-label="Decrease count" />
      
      <div className="counter-card">
        <h1 className="counter-title">Counter</h1>
        <p className="text-3xl">{count}</p>
      </div>

      <button onClick={increment} className="counter-button increment" aria-label="Increase count" />
    </div>
  );
}
