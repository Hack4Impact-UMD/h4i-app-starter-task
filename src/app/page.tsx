'use client';
import { useState } from 'react';
export default function Home() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1); //function to increment the counter
  const decrement = () => setCount((prev) => prev - 1); //function to decrement the counter

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex justify-center items-center bg-yellow-500" style={{ height: '400px', width: '280px' }}>
        <div className="flex items-center mx-5 my-20">
          <button
            className="w-5 h-7 bg-red-500 mr-[4px]"
            onClick={decrement}
          />
        
          <div className="relative bg-white px-16 py-9 flex flex-col justify-center items-center rounded-lg mx-2 my-12 w-48 h-32">
            <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-orange-600 text-md font-semibold mb-2 self-start">Counter</span>
            <span className="font-bold text-gray-800">{count}</span>
          </div>
          <button
            className="w-5 h-7 bg-green-400 ml-[4px]"
            onClick={increment}
          />
        </div>
      </div>
    </main>
  );
}
