export const formatPrice = (n) => `Rs. ${Number(n).toLocaleString('en-PK')}`
export const DELIVERY_FEE = 150
export const FREE_DELIVERY_THRESHOLD = 3000

export const getDeliveryFee = (subtotal) =>
  subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE
