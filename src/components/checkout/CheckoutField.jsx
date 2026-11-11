import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'

// Floating-label field used across the checkout form.
// Supports <input>, <textarea> and <select>, shows an animated error and
// shakes the field whenever the parent bumps `shakeSignal` on an invalid submit.
const CheckoutField = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  type = 'text',
  as = 'input',
  options = [],
  required = false,
  autoComplete,
  rows = 3,
  inputMode,
  placeholder = ' ',
  shakeSignal = 0,
  className = '',
}) => {
  const [focused, setFocused] = useState(false)
  const controls = useAnimationControls()
  const id = `field-${name}`
  const hasValue = String(value ?? '').length > 0
  const floating = as === 'input' ? focused || hasValue : true

  useEffect(() => {
    if (shakeSignal > 0 && error) {
      controls.start({ x: [0, -8, 8, -6, 6, 0], transition: { duration: 0.4 } })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shakeSignal])

  const shared = {
    id,
    name,
    value,
    onChange,
    onBlur: (event) => {
      setFocused(false)
      onBlur?.(event)
    },
    onFocus: () => setFocused(true),
    autoComplete,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? `${id}-error` : undefined,
    className: `peer w-full rounded-xl border bg-white px-4 text-sm text-zinc-800 outline-none transition-colors duration-200 ${
      as === 'textarea' ? 'pt-6 pb-3 resize-none' : 'pt-6 pb-2'
    } ${error ? 'border-red-400 focus:border-red-500' : 'border-zinc-300 focus:border-orange-500'}`,
  }

  return (
    <div className={className}>
      <motion.div animate={controls} className="relative">
        {as === 'textarea' ? (
          <textarea rows={rows} placeholder={placeholder} {...shared} />
        ) : as === 'select' ? (
          <select {...shared}>
            <option value="" disabled>
              Select {label.toLowerCase()}
            </option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input type={type} inputMode={inputMode} placeholder={placeholder} {...shared} />
        )}

        <label
          htmlFor={id}
          className={`pointer-events-none absolute left-4 transition-all duration-200 ${
            floating ? 'top-2 text-[11px]' : 'top-1/2 -translate-y-1/2 text-sm'
          } ${error ? 'text-red-500' : focused ? 'text-orange-500' : 'text-zinc-400'}`}
        >
          {label}
          {required ? ' *' : ''}
        </label>
      </motion.div>

      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            className="mt-1 text-xs text-red-500"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CheckoutField
