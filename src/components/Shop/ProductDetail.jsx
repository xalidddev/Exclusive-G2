import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Heart, Minus, Plus } from "lucide-react"
import { products, getProduct } from "./products.js"
import { useCart } from "./CartContext.jsx"
import ProductCard from "./ProductCard.jsx"
import Stars from "./Stars.jsx"

const colours = ["bg-[#A0BCE0]", "bg-[#E07575]"]

const sizes = ["XS", "S", "M", "L", "XL"]

const delivery = [
  { icon: "fa-solid fa-truck", title: "Free Delivery", text: "Enter your postal code for Delivery Availability" },
  { icon: "fa-solid fa-rotate", title: "Return Delivery", text: "Free 30 Days Delivery Returns. Details" },
]

const ProductDetail = ({ id }) => {
  const item = getProduct(id)
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [main, setMain] = useState(0)
  const [colour, setColour] = useState(0)
  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)
  const [liked, setLiked] = useState(false)

  if (!item) {
    return (
      <section className="flex min-h-[400px] w-[100%] items-center justify-center">
        <h1 className="text-[30px] font-[500]">Product not found</h1>
      </section>
    )
  }

  const images = [item.img, item.img, item.img, item.img]
  const related = products.filter((product) => product.id !== item.id).slice(0, 4)

  const buy = () => {
    addToCart(item.id, qty)
    navigate("/cart")
  }

  return (
    <section className="flex w-[100%] justify-center">

      <section className="flex w-[calc(100%-300px)] flex-col gap-[60px]">

        <section className="flex h-[100px] items-end gap-[10px] text-[14px]">
          <p className="text-gray-400">Account</p>
          <p className="text-gray-400">/</p>
          <p className="text-gray-400">Gaming</p>
          <p className="text-gray-400">/</p>
          <p className="font-[500]">{item.name}</p>
        </section>

        <section className="flex w-full gap-[30px]">

          <section className="flex w-[170px] shrink-0 flex-col gap-[16px]">
            {images.map((img, index) => (
              <section key={index} onClick={() => setMain(index)} className={"flex h-[138px] w-full cursor-pointer items-center justify-center rounded-[4px] bg-[#F5F5F5] " + (main === index ? "border-[2px] border-[#DB4444]" : "border-[2px] border-transparent")}>
                <img src={img} className="h-[100px] w-[100px] object-contain" alt={item.name} />
              </section>
            ))}
          </section>

          <section className="flex h-[600px] w-[500px] shrink-0 items-center justify-center rounded-[4px] bg-[#F5F5F5]">
            <img src={images[main]} className="h-[400px] w-[400px] object-contain" alt={item.name} />
          </section>

          <section className="flex flex-1 flex-col gap-[24px]">

            <section className="flex flex-col gap-[16px]">
              <h1 className="text-[24px] font-[600]">{item.name}</h1>

              <section className="flex items-center gap-[16px] text-[14px]">
                <Stars value={item.stars} />
                <p className="text-[rgba(0,0,0,0.5)]">({item.reviews} Reviews)</p>
                <p className="text-[rgba(0,0,0,0.5)]">|</p>
                <p className="text-[#00FF66]">In Stock</p>
              </section>

              <p className="text-[24px]">${item.price}.00</p>

              <p className="text-[14px]">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
            </section>

            <section className="h-[1px] w-full bg-gray-400"></section>

            <section className="flex items-center gap-[24px]">
              <p className="text-[20px]">Colours:</p>
              <section className="flex gap-[10px]">
                {colours.map((bg, index) => (
                  <section key={index} onClick={() => setColour(index)} className={"flex h-[22px] w-[22px] cursor-pointer items-center justify-center rounded-[50%] " + (colour === index ? "border-[2px] border-black" : "border-[2px] border-transparent")}>
                    <section className={"h-[12px] w-[12px] rounded-[50%] " + bg}></section>
                  </section>
                ))}
              </section>
            </section>

            <section className="flex items-center gap-[24px]">
              <p className="text-[20px]">Size:</p>
              <section className="flex gap-[16px]">
                {sizes.map((text, index) => (
                  <section key={index} onClick={() => setSize(index)} className={"flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] border-[1px] text-[14px] " + (size === index ? "border-[#DB4444] bg-[#DB4444] text-white" : "border-[rgba(0,0,0,0.5)]")}>{text}</section>
                ))}
              </section>
            </section>

            <section className="flex items-center gap-[16px]">

              <section className="flex h-[44px] items-center rounded-[4px] border-[1px] border-[rgba(0,0,0,0.5)]">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="flex h-full w-[40px] cursor-pointer items-center justify-center">
                  <Minus size={18} />
                </button>
                <p className="flex h-full w-[80px] items-center justify-center border-x-[1px] border-[rgba(0,0,0,0.5)] text-[20px] font-[500]">{qty}</p>
                <button onClick={() => setQty(qty + 1)} className="flex h-full w-[40px] cursor-pointer items-center justify-center rounded-r-[3px] bg-[#DB4444] text-white">
                  <Plus size={18} />
                </button>
              </section>

              <button onClick={buy} className="h-[44px] w-[165px] cursor-pointer rounded-[4px] bg-[#DB4444] text-[16px] text-white">Buy Now</button>

              <button onClick={() => setLiked(!liked)} className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[4px] border-[1px] border-[rgba(0,0,0,0.5)]">
                <Heart size={20} className={liked ? "fill-[#DB4444] text-[#DB4444]" : "text-black"} />
              </button>

            </section>

            <section className="flex w-full flex-col rounded-[4px] border-[1px] border-[rgba(0,0,0,0.5)]">
              {delivery.map((row, index) => (
                <section key={index} className={"flex h-[90px] items-center gap-[16px] " + (index === 0 ? "border-b-[1px] border-[rgba(0,0,0,0.5)]" : "")}>
                  <i className={row.icon + " w-[70px] text-center text-[34px]"}></i>
                  <section className="flex flex-col gap-[8px]">
                    <h1 className="text-[16px] font-[500]">{row.title}</h1>
                    <p className="text-[12px] font-[500] underline">{row.text}</p>
                  </section>
                </section>
              ))}
            </section>

          </section>

        </section>

        <section className="flex w-full flex-col gap-[50px]">

          <section className="flex items-center gap-[16px]">
            <section className="h-[40px] w-[20px] rounded-[4px] bg-[#DB4444]"></section>
            <p className="text-[16px] font-[600] text-[#DB4444]">Related Item</p>
          </section>

          <section className="flex w-full justify-between gap-[30px]">
            {related.map((product) => (
              <ProductCard key={product.id} item={product} />
            ))}
          </section>

        </section>

        <section className="h-[60px] w-full"></section>

      </section>

    </section>
  )
}

export default ProductDetail
