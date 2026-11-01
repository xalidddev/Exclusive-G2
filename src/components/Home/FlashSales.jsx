import Joistic from "../../assets/Home/gamepad.png"
import Keyboard from "../../assets/Home/keyboard.png"
import Monitor from "../../assets/Home/monitor.png"
import Chair from "../../assets/Home/chair.png"
import { Eye } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import LikeButton from "../Shop/LikeButton.jsx"
import AddToCart from "../Shop/AddToCart.jsx"

const FlashSales = () => {
  const[second,setSecond] = useState(59)
  const[minute,setMinute] = useState(59)
  const[hour,setHour] = useState(23)
  const[day,setDay] = useState(3)
  setTimeout(() => {
    if(second==0 || second==60){
      setSecond(59)
      if(minute==0 || minute==60){
        setMinute(59)
        if(hour==0 || hour==24){
          setHour(23)
          if(day==0){
            setSecond(0)
            setMinute(0)
            setHour(0)
            setDay(0)
          }
          else{
            setDay(day-1)
          }
        }
        else{
          setHour(hour-1)
        }
      }
      else{
        setMinute(minute-1)
      }
    }
    else{
      setSecond(second-1)
    }
  }, 1000);
  console.log(`day:${day}, hour:${hour}, min:${minute}, sec:${second}`);
  return (
    <section className="px-[150px] flex flex-col">
      <div className="flex items-center gap-x-[20px]">
        <span className="w-[22px] h-[45px] bg-[#DB4444] rounded-[5px]"></span>
        <p className="text-[#DB4444] font-[600] text-[18px]">Today’s</p>
      </div>
      <div className="flex gap-x-[100px] relative">
        <h3 className="text-[40px] font-[500] self-end leading-none">Flash Sales</h3>
        <div className="flex gap-x-[15px]">
          <div className="leading-[40px]">
            <p className="text-[12px] font-[500]">Days</p>
            <p className="text-[40px] font-[600]">{"0"+day}</p>
          </div>
          <span className="font-[900] text-[30px] self-end text-[#DB4444]">:</span>
          <div className="leading-[40px]">
            <p className="text-[12px] font-[500]">Hours</p>
            <p className="text-[40px] font-[600]">{hour>9?hour:"0"+hour}</p>
          </div>
          <span className="font-[900] text-[30px] self-end text-[#DB4444]">:</span>
          <div className="leading-[40px]">
            <p className="text-[12px] font-[500]">Minutes</p>
            <p className="text-[40px] font-[600]">{minute>9? minute:"0"+minute}</p>
          </div>
          <span className="font-[900] text-[30px] self-end text-[#DB4444]">:</span>
          <div className="leading-[40px]">
            <p className="text-[12px] font-[500]">Seconds</p>
            <p className="text-[40px] font-[600]">{second>9? second:"0"+second}</p>
          </div>
        </div>
        <div className="flex gap-x-[10px] absolute right-0 bottom-0">
          <button className="flex justify-center items-center w-[50px] h-[50px] rounded-[50%] bg-[#F5F5F5] hover:bg-gray-700 hover:text-white cursor-pointer transition-all duration-300 hover:scale-[1.05]">
            <i className="fa-light fa-arrow-left"></i>
          </button>
          <button className="flex justify-center items-center w-[50px] h-[50px] rounded-[50%] bg-[#F5F5F5] hover:bg-gray-700 hover:text-white cursor-pointer transition-all duration-300 hover:scale-[1.05]">
            <i className="fa-light fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div className="mehsullar w-[100%] mt-[40px] flex justify-between">
        <div className="card1 w-[280px] flex flex-col gap-y-[10px]">
          <div className="forImg w-[280px] h-[280px] flex justify-center items-center bg-[#F5F5F5] rounded-[10px] overflow-hidden relative group">
            <Link to="/product/1" className="absolute inset-0"></Link>
            <img src={Joistic} className="w-[200px] h-[180px]"/>
            <span className="absolute bg-[#DB4444] left-[10px] top-[10px] text-[#FAFAFA] text-[12px] px-[15px] py-[5px] rounded-[5px] cursor-pointer">-40%</span>
            <div className="absolute top-[12px] right-[12px] flex flex-col gap-[8px]">
              <LikeButton />
              <Link to="/product/1" className="w-[34px] h-[34px] bg-white flex justify-center items-center rounded-[50%] cursor-pointer">
                <Eye size={18} />
              </Link>
            </div>
            <AddToCart id={1} />
          </div>
          <Link to="/product/1" className="text-[18px] font-[500]">HAVIT HV-G92 Gamepad</Link>
          <p className="text-[#E05D5D] text-[18px] font-[500]">$120 <del className="text-gray-400 pl-[10px]">$160</del></p>
          <div className="ulduzlar flex text-[#FFAD33] gap-x-[3px] items-center">
            <i className="fa-solid fa-star hover:translate-y-[-3px] cursor-pointer transition-all duration-200"></i>
            <i className="fa-solid fa-star hover:translate-y-[-3px] cursor-pointer transition-all duration-200"></i>
            <i className="fa-solid fa-star hover:translate-y-[-3px] cursor-pointer transition-all duration-200"></i>
            <i className="fa-solid fa-star hover:translate-y-[-3px] cursor-pointer transition-all duration-200"></i>
            <i className="fa-solid fa-star hover:translate-y-[-3px] cursor-pointer transition-all duration-200"></i>
            <p className="pl-[15px] text-gray-500 font-[600]">(88)</p>
          </div>
        </div>
        <div className="card2 w-[280px] flex flex-col gap-y-[10px]">
          <div className="forImg w-[280px] h-[280px] flex justify-center items-center bg-[#F5F5F5] rounded-[10px] overflow-hidden relative group">
            <Link to="/product/2" className="absolute inset-0"></Link>
            <img src={Keyboard} className="w-[200px] h-[200px]"/>
            <span className="absolute bg-[#DB4444] left-[10px] top-[10px] text-[#FAFAFA] text-[12px] px-[15px] py-[5px] rounded-[5px] cursor-pointer">-35%</span>
            <div className="absolute top-[12px] right-[12px] flex flex-col gap-[8px]">
              <LikeButton />
              <Link to="/product/2" className="w-[34px] h-[34px] bg-white flex justify-center items-center rounded-[50%] cursor-pointer">
                <Eye size={18} />
              </Link>
            </div>
            <AddToCart id={2} />
          </div>
          <Link to="/product/2" className="text-[18px] font-[500]">AK-900 Wired Keyboard</Link>
          <p className="text-[#E05D5D] text-[18px] font-[500]">$960 <del className="text-gray-400 pl-[10px]">$1160</del></p>
          <div className="ulduzlar flex text-[#FFAD33] gap-x-[3px] items-center">
            <i className="fa-solid fa-star hover:translate-y-[-3px] cursor-pointer transition-all duration-200"></i>
            <i className="fa-solid fa-star hover:translate-y-[-3px] cursor-pointer transition-all duration-200"></i>
            <i className="fa-solid fa-star hover:translate-y-[-3px] cursor-pointer transition-all duration-200"></i>
            <i className="fa-solid fa-star hover:translate-y-[-3px] cursor-pointer transition-all duration-200"></i>
            <i className="fa-solid fa-star text-gray-300 hover:translate-y-[-3px] cursor-pointer transition-all duration-200"></i>
            <p className="pl-[15px] text-gray-500 font-[600]">(75)</p>
          </div>
        </div>
        <div className="card3 w-[280px] flex flex-col gap-y-[10px]">
          <div className="forImg w-[280px] h-[280px] flex justify-center items-center bg-[#F5F5F5] rounded-[10px] overflow-hidden relative group">
            <Link to="/product/3" className="absolute inset-0"></Link>
            <img src={Monitor} className="w-[200px] h-[200px]"/>
            <span className="absolute bg-[#DB4444] left-[10px] top-[10px] text-[#FAFAFA] text-[12px] px-[15px] py-[5px] rounded-[5px] cursor-pointer">-30%</span>
            <div className="absolute top-[12px] right-[12px] flex flex-col gap-[8px]">
              <LikeButton />
              <Link to="/product/3" className="w-[34px] h-[34px] bg-white flex justify-center items-center rounded-[50%] cursor-pointer">
                <Eye size={18} />
              </Link>
            </div>
            <AddToCart id={3} />
          </div>
          <Link to="/product/3" className="text-[18px] font-[500]">IPS LCD Gaming Monitor</Link>
          <p className="text-[#E05D5D] text-[18px] font-[500]">$370 <del className="text-gray-400 pl-[10px]">$400</del></p>
          <div className="ulduzlar flex text-[#FFAD33] gap-x-[3px] items-center">
            <i className="fa-solid fa-star hover:translate-y-[-3px] cursor-pointer transition-all duration-200"></i>
            <i className="fa-solid fa-star hover:translate-y-[-3px] cursor-pointer transition-all duration-200"></i>
            <i className="fa-solid fa-star hover:translate-y-[-3px] cursor-pointer transition-all duration-200"></i>
            <i className="fa-solid fa-star hover:translate-y-[-3px] cursor-pointer transition-all duration-200"></i>
            <i className="fa-solid fa-star hover:translate-y-[-3px] cursor-pointer transition-all duration-200"></i>
            <p className="pl-[15px] text-gray-500 font-[600]">(90)</p>
          </div>
        </div>
        <div className="card4 w-[280px] flex flex-col gap-y-[10px]">
          <div className="forImg w-[280px] h-[280px] flex justify-center items-center bg-[#F5F5F5] rounded-[10px] overflow-hidden relative group">
            <Link to="/product/4" className="absolute inset-0"></Link>
            <img src={Chair} className="w-[200px] h-[200px]"/>
            <span className="absolute bg-[#DB4444] left-[10px] top-[10px] text-[#FAFAFA] text-[12px] px-[15px] py-[5px] rounded-[5px] cursor-pointer">-25%</span>
            <div className="absolute top-[12px] right-[12px] flex flex-col gap-[8px]">
              <LikeButton />
              <Link to="/product/4" className="w-[34px] h-[34px] bg-white flex justify-center items-center rounded-[50%] cursor-pointer">
                <Eye size={18} />
              </Link>
            </div>
            <AddToCart id={4} />
          </div>
          <Link to="/product/4" className="text-[18px] font-[500]">S-Series Comfort Chair </Link>
          <p className="text-[#E05D5D] text-[18px] font-[500]">$375 <del className="text-gray-400 pl-[10px]">$400</del></p>
          <div className="ulduzlar flex text-[#FFAD33] gap-x-[3px] items-center">
            <i className="fa-solid fa-star hover:translate-y-[-3px] cursor-pointer transition-all duration-200"></i>
            <i className="fa-solid fa-star hover:translate-y-[-3px] cursor-pointer transition-all duration-200"></i>
            <i className="fa-solid fa-star hover:translate-y-[-3px] cursor-pointer transition-all duration-200"></i>
            <i className="fa-solid fa-star hover:translate-y-[-3px] cursor-pointer transition-all duration-200"></i>
            <i className="fa-solid fa-star-half-alt hover:translate-y-[-3px] cursor-pointer transition-all duration-200"></i>
            <p className="pl-[15px] text-gray-500 font-[600]">(90)</p>
          </div>
        </div>
      </div>
      <button className="w-[260px] h-[60px] bg-[#DB4444] text-white self-center mt-[80px] rounded-[5px] text-[18px] transition-all duration-300 hover:bg-[darkred] hover:translate-y-[-5px] cursor-pointer hover:text-[19px] active:translate-y-[0]">View All Products</button>
    </section>
  )
}

export default FlashSales
