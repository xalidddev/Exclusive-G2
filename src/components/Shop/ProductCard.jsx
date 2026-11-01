import { Link } from "react-router-dom"
import { Eye } from "lucide-react"
import LikeButton from "./LikeButton.jsx"
import AddToCart from "./AddToCart.jsx"
import Stars from "./Stars.jsx"

const ProductCard = ({ item }) => {
  return (
    <section className="flex flex-col gap-[16px]">

      <section className="group relative flex h-[250px] w-[270px] items-center justify-center overflow-hidden rounded-[5px] bg-[#F5F5F5]">

        <Link to={"/product/" + item.id} className="absolute inset-0"></Link>

        <img src={item.img} className="h-[172px] w-[172px] object-contain" alt={item.name} />

        {item.sale && <p className="absolute left-[12px] top-[12px] flex h-[26px] w-[55px] items-center justify-center rounded-[4px] bg-[#DB4444] text-[12px] text-white">{item.sale}</p>}

        <section className="absolute right-[12px] top-[12px] flex flex-col gap-[8px]">
          <LikeButton />
          <Link to={"/product/" + item.id} className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-[50%] bg-white">
            <Eye size={18} />
          </Link>
        </section>

        <AddToCart id={item.id} />

      </section>

      <section className="flex flex-col gap-[8px]">
        <Link to={"/product/" + item.id} className="text-[16px] font-[500]">{item.name}</Link>

        <section className="flex items-center gap-[10px]">
          <p className="text-[16px] font-[500] text-[#DB4444]">${item.price}</p>
          {item.oldPrice && <p className="text-[16px] font-[500] text-[rgba(0,0,0,0.45)] line-through">${item.oldPrice}</p>}
          <Stars value={item.stars} />
          <p className="text-[14px] font-[500] text-[rgba(0,0,0,0.45)]">({item.reviews})</p>
        </section>
      </section>

    </section>
  )
}

export default ProductCard
