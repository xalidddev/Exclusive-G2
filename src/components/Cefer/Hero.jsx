import { ChevronRight } from "lucide-react"
import Crs from "./Crs"

const Hero = () => {
  return (
    <section className="hero w-[100%] h-[410px] flex">
      <div className="w-[26%] h-[100%] border-r-1 border-[gray] pl-[150px] pt-[40px] pr-[20px]">
        <ul className="flex flex-col gap-y-[18px] text-[17px]">
          <div className="flex relative items-center">
            <li className="hover:font-[600] cursor-pointer">Woman’s Fashion</li><ChevronRight className="absolute right-0 rounded-[50%] hover:bg-gray-400 cursor-pointer hover:scale-[1.1] transition-[.2s]" size={24} strokeWidth={2.5} />
          </div>
          <div className="flex relative items-center">
            <li className="hover:font-[600] cursor-pointer">Men’s Fashion</li><ChevronRight className="absolute right-0 rounded-[50%] hover:bg-gray-400 cursor-pointer hover:scale-[1.1] transition-[.2s]" size={24} strokeWidth={2.5} />
          </div>
          <li className="hover:font-[600] cursor-pointer">Electronics</li>
          <li className="hover:font-[600] cursor-pointer">Home & Lifestyle</li>
          <li className="hover:font-[600] cursor-pointer">Medicine</li>
          <li className="hover:font-[600] cursor-pointer">Sports & Outdoor</li>
          <li className="hover:font-[600] cursor-pointer">Baby’s & Toys</li>
          <li className="hover:font-[600] cursor-pointer">Groceries & Pets</li>
          <li className="hover:font-[600] cursor-pointer">Health & Beauty</li>
        </ul>
      </div>
      <div className="w-[74%] h-[100%] pl-[50px] pt-[50px] pr-[150px]">
        <Crs/>
      </div>
    </section>

  )
}

export default Hero
