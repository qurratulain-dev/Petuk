export const isRequired = (value) => String(value ?? '').trim().length > 0

// Accepts 03XX-XXXXXXX, 03XXXXXXXXX, +92 3XX XXXXXXX, 923XXXXXXXXX
export const isPakistaniPhone = (value) => {
  const digits = String(value ?? '').replace(/[^\d]/g, '')
  return /^03\d{9}$/.test(digits) || /^923\d{9}$/.test(digits)
}

export const isEmail = (value) => /^\S+@\S+\.\S+$/.test(String(value ?? '').trim())
