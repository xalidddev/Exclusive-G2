

import React, { useState } from 'react'
import { Smartphone, Monitor, Watch, Camera, Headphones, Gamepad2 } from 'lucide-react'





const Categories = () => {
  
  const [element, setElement] = useState(0)

  const next = () => setElement((element + 1) % 6)
  const prev = () => setElement((element + 5) % 6)

  const base = "h-[195px] min-w-0 flex-1 rounded-[5px] cursor-pointer border flex flex-col items-center justify-center gap-[19px] transition"
  const on = "bg-brand text-white border-brand"
  const off = "text-black border-[rgba(0,0,0,0.3)] hover:bg-brand hover:text-white hover:border-brand"
 
  return (
    <main className='w-full h-screen overflow-hidden flex flex-col justify-evenly gap-10 items-center'>
      <div className="sec1 h-[1px] w-[calc(100%-300px)] bg-[rgba(0,0,0,0.13)]"></div>

      <div className="h-[57%] w-[calc(100%-300px)] flex flex-col gap-10 font-semibold text-5xl">
        <div className="category flex gap-4 w-fit items-center">
          <div className="rectangle bg-brand h-[54px] w-[27px] rounded-[7px]"></div>
          <h1 className="font-semibold text-[20px] text-brand">Categories</h1>
        </div>

        <div className="text h-[75px] w-full flex justify-between">
          <h1 className='font-medium text-5xl' >Browse By Category</h1>
          <div className="flex gap-x-[10px] text-[16px] font-normal">
            <button onClick={prev} className="flex justify-center items-center w-[50px] h-[50px] rounded-[50%] bg-[#F5F5F5] hover:bg-gray-700 hover:text-white cursor-pointer transition-all duration-300 hover:scale-[1.05]">
              <i className="fa-light fa-arrow-left"></i>
            </button>
            <button onClick={next} className="flex justify-center items-center w-[50px] h-[50px] rounded-[50%] bg-[#F5F5F5] hover:bg-gray-700 hover:text-white cursor-pointer transition-all duration-300 hover:scale-[1.05]">
              <i className="fa-light fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="cards h-[45%] w-full flex gap-[30px] items-center">
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
      <div className="sec2 h-[1px] w-[calc(100%-300px)] bg-[rgba(0,0,0,0.13)] "></div>
    </main>
  )
}

export default Categories

