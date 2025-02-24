"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex flex-row justify-center items-center bg-[#FABC3C]" style={{height: '337px', width: '247px'}}>
        <div className="flex mr-3 bg-[#FF0505]" style={{height: '24px', width: '19px'}}>
          <button className="w-full" onClick={() => setCount(count => count - 1)}/>
        </div>
        
        <div className="flex flex-col justify-start items-center bg-white" style={{height: '110px', width: '160px', borderRadius: '5px'}}>
          <span className="text-[#F55536] text-s mt-1">Counter</span>
          <div className="mb-5 flex flex-grow items-center justify-center w-full">
            <span className="text-black text-s">{count}</span>
          </div>
        </div>

        <div className="flex ml-3 bg-[#0AFF05]" style={{height: '24px', width: '19px'}}>
          <button className="w-full" onClick={() => setCount(count => count + 1)}/>
        </div>
      </div>
    </main>
  );
}
