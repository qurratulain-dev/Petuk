/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'petuk-cart'

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const { item, qty } = action
      const exists = state.find((i) => i.id === item.id)
      if (exists) {
        return state.map((i) => (i.id === item.id ? { ...i, qty: i.qty + qty } : i))
      }
      return [...state, { ...item, qty }]
    }
    case 'SET_QTY':
      return state
        .map((i) => (i.id === action.id ? { ...i, qty: action.qty } : i))
        .filter((i) => i.qty > 0)
    case 'REMOVE':
      return state.filter((i) => i.id !== action.id)
    case 'CLEAR':
      return []
    default:
      return state
  }
}

const loadInitial = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export const CartProvider = ({ children }) => {
  const [items, dispatch] = useReducer(reducer, [], loadInitial)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* storage unavailable, ignore */
    }
  }, [items])

  const value = useMemo(
    () => ({
      items,
      count: items.reduce((n, i) => n + i.qty, 0),
      subtotal: items.reduce((n, i) => n + i.qty * i.price, 0),
      addItem: (item, qty = 1) => dispatch({ type: 'ADD', item, qty }),
      setQty: (id, qty) => dispatch({ type: 'SET_QTY', id, qty }),
      removeItem: (id) => dispatch({ type: 'REMOVE', id }),
      clear: () => dispatch({ type: 'CLEAR' }),
    }),
    [items]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
