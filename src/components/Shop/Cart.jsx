import { Link } from "react-router-dom"
import { Minus, Plus, X } from "lucide-react"
import { getProduct } from "./products.js"
import { useCart } from "./CartContext.jsx"

const heads = ["Product", "Price", "Quantity", "Subtotal"]

const Cart = () => {
  const { items, setQty, removeItem } = useCart()
  const rows = items.map((row) => ({ ...getProduct(row.id), qty: row.qty }))
  const subtotal = rows.reduce((sum, row) => sum + row.price * row.qty, 0)

  return (
    <section className="flex w-[100%] justify-center">

      <section className="flex w-[calc(100%-300px)] flex-col gap-[40px]">

        <section className="flex h-[100px] items-end gap-[10px] text-[14px]">
          <Link to={"/"} className="text-gray-400">Home</Link>
          <p className="text-gray-400">/</p>
          <p className="font-[500]">Cart</p>
        </section>

        <section className="flex h-[72px] w-full items-center justify-center rounded-[4px] shadow-[0px_1px_13px_rgba(0,0,0,0.1)]">
          <section className="flex w-[94%] items-center">
            {heads.map((text, index) => (
              <p key={index} className="flex-1 text-[16px]">{text}</p>
            ))}
          </section>
        </section>

        {rows.length === 0 && (
          <section className="flex h-[200px] w-full items-center justify-center">
            <p className="text-[20px] text-[rgba(0,0,0,0.5)]">Your cart is empty</p>
          </section>
        )}

        {rows.map((row) => (
          <section key={row.id} className="flex h-[102px] w-full items-center justify-center rounded-[4px] shadow-[0px_1px_13px_rgba(0,0,0,0.1)]">

            <section className="flex w-[94%] items-center">

              <section className="flex flex-1 items-center gap-[20px]">
                <section className="relative flex h-[54px] w-[54px] items-center justify-center">
                  <img src={row.img} className="h-[54px] w-[54px] object-contain" alt={row.name} />
                  <button onClick={() => removeItem(row.id)} className="absolute left-[-8px] top-[-8px] flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-[50%] bg-[#DB4444] text-white">
                    <X size={12} />
                  </button>
                </section>
                <Link to={"/product/" + row.id} className="text-[16px]">{row.name}</Link>
              </section>

              <p className="flex-1 text-[16px]">${row.price}</p>

              <section className="flex flex-1">
                <section className="flex h-[44px] items-center rounded-[4px] border-[1px] border-[rgba(0,0,0,0.4)]">
                  <button onClick={() => setQty(row.id, row.qty - 1)} className="flex h-full w-[36px] cursor-pointer items-center justify-center">
                    <Minus size={16} />
                  </button>
                  <p className="flex h-full w-[50px] items-center justify-center text-[16px]">{row.qty}</p>
                  <button onClick={() => setQty(row.id, row.qty + 1)} className="flex h-full w-[36px] cursor-pointer items-center justify-center">
                    <Plus size={16} />
                  </button>
                </section>
              </section>

              <p className="flex-1 text-[16px]">${row.price * row.qty}</p>

            </section>

          </section>
        ))}

        <section className="flex w-full justify-between">
          <Link to={"/"} className="flex h-[56px] w-[218px] items-center justify-center rounded-[4px] border-[1px] border-[rgba(0,0,0,0.5)] text-[16px] font-[500]">Return To Shop</Link>
        </section>

        <section className="flex w-full justify-end">
          <section className="flex w-[470px] flex-col gap-[16px] rounded-[4px] border-[1.5px] border-black">

            <h1 className="flex h-[60px] items-center justify-center text-[20px] font-[500]">Cart Total</h1>

            <section className="flex w-full justify-center">
              <section className="flex w-[85%] flex-col gap-[16px]">

                <section className="flex h-[40px] items-start justify-between border-b-[1px] border-[rgba(0,0,0,0.4)] text-[16px]">
                  <p>Subtotal:</p>
                  <p>${subtotal}</p>
                </section>

                <section className="flex h-[40px] items-start justify-between border-b-[1px] border-[rgba(0,0,0,0.4)] text-[16px]">
                  <p>Shipping:</p>
                  <p>Free</p>
                </section>

                <section className="flex justify-between text-[16px]">
                  <p>Total:</p>
                  <p>${subtotal}</p>
                </section>

                <section className="flex w-full justify-center">
                  <button className="h-[56px] w-[260px] cursor-pointer rounded-[4px] bg-[#DB4444] text-[16px] text-white">Proceed to checkout</button>
                </section>

              </section>
            </section>

            <section className="h-[16px] w-full"></section>

          </section>
        </section>

        <section className="h-[60px] w-full"></section>

      </section>

    </section>
  )
}

export default Cart
