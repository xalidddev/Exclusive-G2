import Iphone from "../../assets/Cefer/iphone.png"
import { FaApple } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

function Iphonediv() {
  return (
    <div className='w-[100%] h-[360px] bg-black flex'>
        <div className="leftSide text-white w-[45%] h-[100%] pl-[65px] pt-[50px] flex flex-col gap-y-[10px]">
            <div className="flex items-center gap-x-[20px]">
                <FaApple className="text-[60px]"/>
                <p className="text-[18px]">iPhone 14 Series</p>
            </div>
            <p className="leading-[70px] w-[95%] text-[55px] font-[600]">Up to 10% off Voucher</p>
            <div className="flex items-center gap-x-[10px] pt-[10px]">
                <p className="cursor-pointer text-[20px] border-b-1 border-white hover:border-b-2 hover:font-[500]">Shop now</p>
                <ArrowRight className="mt-[5px] rounded-[50%] cursor-pointer hover:bg-white hover:text-black" size={24} strokeWidth={1.25} />
            </div>
        </div>
        <img className="pt-[20px]" src={Iphone}/>
    </div>
  )
}

export default Iphonediv