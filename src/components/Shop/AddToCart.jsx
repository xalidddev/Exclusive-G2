import { useState } from "react"
import { useCart } from "./CartContext.jsx"

const AddToCart = ({ id }) => {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const add = () => {
    addToCart(id)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <button onClick={add} className="absolute bottom-0 flex h-[41px] w-full cursor-pointer items-center justify-center bg-black text-[16px] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      {added ? "Added" : "Add To Cart"}
    </button>
  )
}

export default AddToCart
