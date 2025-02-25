"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="w-screen h-screen bg-white text-black flex justify-center items-center">
      <div className="bg-orange-400 h-[500px] w-[300px] flex flex-row justify-around items-center">
        <div className="w-[30px] h-[30px] bg-red-600 cursor-pointer" onClick={decrement}></div>
        <div className="bg-white w-[50%] h-[150px] flex flex-col justify-center items-center rounded-[10px]">
          <div>Counter</div>
          <div>{count}</div>
        </div>
        <div className="w-[30px] h-[30px] bg-green-400 cursor-pointer" onClick={increment}></div>
      </div>
    </div>
  )
}