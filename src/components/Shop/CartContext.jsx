import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  const addToCart = (id, qty = 1) => {
    const found = items.find((item) => item.id === id)
    setItems(found ? items.map((item) => (item.id === id ? { ...item, qty: item.qty + qty } : item)) : [...items, { id, qty }])
  }

  const setQty = (id, qty) => {
    setItems(items.map((item) => (item.id === id ? { ...item, qty: Math.max(1, qty) } : item)))
  }

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const count = items.reduce((sum, item) => sum + item.qty, 0)

  return (
    <CartContext.Provider value={{ items, addToCart, setQty, removeItem, count }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
