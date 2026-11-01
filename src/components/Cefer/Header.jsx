import { Link } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";

const Header = () => {
  return (
    <header>
      <section className="header-sec1 w-[100%] h-[50px] bg-black flex justify-center items-center gap-x-[11px] text-[15px] relative">
        <p className="text-[#FAFAFA]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <Link to={"/"} className="text-white border-b leading-none font-medium hover:border-b-[2px] hover:translate-y-[-1px]">ShopNow</Link>
        <select className="w-auto text-white absolute right-[150px] border-0 focus:outline-none cursor-pointer">
          <option className="bg-black border-black focus:bg-black">English</option>
          <option className="bg-black border-black focus:bg-black">Azerbaijan</option>
        </select>
      </section>
      <section className="header-sec2 h-[103px] border-b-[1px] border-gray-400 px-[150px] flex items-center">
        <div className="w-[100%] h-[40px] mt-[28px] flex justify-between">
          <div className="w-[57%] h-[100%] flex justify-between items-center">
            <h1 className="text-[27px] font-semibold cursor-pointer">Exclusive</h1>
            <ul className="flex gap-x-[50px]">
              <li>
                <Link to={"/"} className="text-[17px]">Home</Link>
              </li>
              <li>
                <Link to={"/"} className="text-[17px]">Contact</Link>
              </li>
              <li>
                <Link to={"/about"} className="text-[17px]">About</Link>
              </li>
              <li>
                <Link to={"/signup"} className="text-[17px]">Sign up</Link>
              </li>
            </ul>
          </div>
          <div className="w-[30%] h-[100%] flex justify-between items-center relative">
            <input type="text" placeholder="What are you looking for?" className="bg-soft w-[70%] indent-[22px] text-[13px] rounded-[6px] h-[100%]"/>
            <CiSearch className="text-[28px] absolute left-[225px]"/>
            <IoHeartOutline className="text-[30px]"/>
            <PiShoppingCartLight className="text-[30px]"/>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
