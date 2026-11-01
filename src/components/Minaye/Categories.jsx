

import React, { useState } from 'react'
import { Smartphone, Monitor, Watch, Camera, Headphones, Gamepad2 ,ArrowLeft, ArrowRight } from 'lucide-react'





const Categories = () => {
  
  const [element, setElement] = useState(0)

  const next = () => setElement((element + 1) % 6)
  const prev = () => setElement((element + 5) % 6)

  const base = "h-[195px] w-[225px] rounded-[5px] cursor-pointer border flex flex-col items-center justify-center gap-[19px] transition"
  const on = "bg-brand text-white border-brand"
  const off = "text-black border-[rgba(0,0,0,0.3)] hover:bg-brand hover:text-white hover:border-brand"
 
  return (
    <main className='w-full h-screen overflow-hidden flex flex-col justify-evenly gap-10 items-center'>
      <div className="sec1 h-[1px] w-[80%] bg-[rgba(0,0,0,0.13)]"></div>

      <div className="container h-[57%] w-[87%] flex flex-col gap-10 font-semibold text-5xl">
        <div className="category flex justify-between w-[10%] items-center">
          <div className="rectangle bg-brand h-[54px] w-[27px] rounded-[7px]"></div>
          <h1 className="font-semibold text-[20px] text-brand">Categories</h1>
        </div>

        <div className="text h-[75px] w-full flex justify-between">
          <h1 className='font-medium text-5xl' >Browse By Category</h1>
          <div className="round h-[80px] w-[125px] flex gap-2">
            <div onClick={prev} className=" ox1 hover:bg-[rgba(0,0,0,0.13)] h-[60px] w-[60px] rounded-full bg-[rgba(0,0,0,0.08)] flex justify-center items-center cursor-pointer">
              <ArrowLeft size={30} strokeWidth={0.9} />
            </div>
            <div onClick={next} className="ox2 hover:bg-[rgba(0,0,0,0.13)] h-[60px] w-[60px] rounded-full bg-[rgba(0,0,0,0.08)] flex justify-center items-center cursor-pointer">
              <ArrowRight size={30} strokeWidth={0.9} />
            </div>
          </div>
        </div>
        <div className="cards h-[45%] w-full flex justify-between items-center">
          <div onClick={() => setElement(0)} className={`${base} ${element === 0 ? on : off}`}>
            <Smartphone size={68} strokeWidth={0.9} />
            <p className="text-center text-xl font-extralight">Phones</p>
          </div>

          <div onClick={() => setElement(1)} className={`${base} ${element === 1 ? on : off}`}>
            <Monitor size={68} strokeWidth={0.9} />
            <p className="text-center text-xl font-extralight">Computers</p>
          </div>

          <div onClick={() => setElement(2)} className={`${base} ${element === 2 ? on : off}`}>
            <Watch size={68} strokeWidth={0.9} />
            <p className="text-center text-xl font-extralight">SmartWatch</p>
          </div>

          <div onClick={() => setElement(3)} className={`${base} ${element === 3 ? on : off}`}>
            <Camera size={68} strokeWidth={0.9} />
            <p className="text-center text-xl font-extralight">Camera</p>
          </div>

          <div onClick={() => setElement(4)} className={`${base} ${element === 4 ? on : off}`}>
            <Headphones size={68} strokeWidth={0.9} />
            <p className="text-center text-xl font-extralight">HeadPhones</p>
          </div>

          <div onClick={() => setElement(5)} className={`${base} ${element === 5 ? on : off}`}>
            <Gamepad2 size={68} strokeWidth={0.9} />
            <p className="text-center text-xl font-extralight">Gaming</p>
          </div>
        </div>
      </div>
      <div className="sec2 h-[1px] w-[80%] bg-[rgba(0,0,0,0.13)] "></div>
    </main>
  )
}

export default Categories

