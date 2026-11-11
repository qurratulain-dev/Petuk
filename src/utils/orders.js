const ORDERS_KEY = 'petuk-orders'

export const ORDER_STEPS = ['received', 'preparing', 'delivering', 'delivered']

export const ORDER_STATUS_LABEL = {
  received: 'Order received',
  preparing: 'Preparing',
  delivering: 'Out for delivery',
  delivered: 'Delivered',
}

export const PAYMENT_LABEL = {
  cod: 'Cash on Delivery',
  easypaisa: 'Easypaisa',
  jazzcash: 'JazzCash',
}

export const generateOrderId = () => {
  const num = Math.floor(100000 + Math.random() * 900000)
  return `PTK-${num}`
}

export const getOrders = () => {
  try {
    const raw = localStorage.getItem(ORDERS_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export const getOrderById = (id) =>
  getOrders().find((order) => order.id === id) || null

export const saveOrder = (order) => {
  const next = [order, ...getOrders()]
  try {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(next))
  } catch {
    /* storage unavailable, ignore */
  }
  return order
}

export const formatOrderDate = (iso) => {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleString('en-PK', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}
