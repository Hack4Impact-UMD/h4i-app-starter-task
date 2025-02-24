'use client';
import { useState } from "react";

export default function Home() {
const [counter, setCounter] = useState(0)

  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-white">
    <div className="flex flex-row items-center justify-around w-64 h-96 bg-amber-400">
      <button onClick={() => setCounter(x => x - 1)} className="w-5 h-7 bg-red-600"/>
      <div className="relative flex flex-col items-center justify-center w-40 h-28 bg-white rounded-md">
        <h1 className="text-sm absolute top-0 text-red-600 font-bold justify-self-start">Counter</h1>
        <span className="text-sm text-black font-bold">{counter}</span>
      </div>
      <button onClick={() => setCounter(x => x + 1)} className="w-5 h-7 bg-green-400"/>
    </div>
  </div>
  )
}
