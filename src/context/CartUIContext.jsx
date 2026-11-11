/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import FlyLayer from '../components/ui/FlyLayer'
import Toasts from '../components/ui/Toasts'

const CartUIContext = createContext(null)

// Controls the slide-in cart drawer, toast notifications and the
// "fly to cart" image animation from product cards.
export const CartUIProvider = ({ children }) => {
  const reduce = useReducedMotion()
  const [isOpen, setIsOpen] = useState(false)
  const [toasts, setToasts] = useState([])
  const [flies, setFlies] = useState([])
  const idRef = useRef(0)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((open) => !open), [])

  const notify = useCallback((message) => {
    const id = ++idRef.current
    setToasts((list) => [...list, { id, message }])
    setTimeout(() => {
      setToasts((list) => list.filter((toast) => toast.id !== id))
    }, 2800)
  }, [])

  const flyToCart = useCallback(
    (img, rect) => {
      if (reduce || !img || !rect) return
      const icons = document.querySelectorAll('[data-cart-icon]')
      let target = null
      icons.forEach((el) => {
        const box = el.getBoundingClientRect()
        if (!target && box.width > 0 && box.height > 0) target = box
      })
      if (!target) return

      const id = ++idRef.current
      setFlies((list) => [
        ...list,
        {
          id,
          img,
          from: { x: rect.left + rect.width / 2 - 24, y: rect.top + rect.height / 2 - 24 },
          to: { x: target.left + target.width / 2 - 24, y: target.top + target.height / 2 - 24 },
        },
      ])
      setTimeout(() => {
        setFlies((list) => list.filter((fly) => fly.id !== id))
      }, 950)
    },
    [reduce]
  )

  const value = useMemo(
    () => ({ isOpen, openCart, closeCart, toggleCart, notify, flyToCart }),
    [isOpen, openCart, closeCart, toggleCart, notify, flyToCart]
  )

  return (
    <CartUIContext.Provider value={value}>
      {children}
      <Toasts toasts={toasts} />
      <FlyLayer flies={flies} />
    </CartUIContext.Provider>
  )
}

export const useCartUI = () => {
  const ctx = useContext(CartUIContext)
  if (!ctx) throw new Error('useCartUI must be used inside CartUIProvider')
  return ctx
}
