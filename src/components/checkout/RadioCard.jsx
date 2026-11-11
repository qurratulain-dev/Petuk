import { motion } from 'framer-motion'

const RadioCard = ({ name, value, checked, onChange, title, subtitle, icon, className = '' }) => (
  <motion.label
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.98 }}
    className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors duration-200 ${
      checked ? 'border-orange-500 bg-orange-50' : 'border-zinc-200 bg-white hover:border-orange-300'
    } ${className}`}
  >
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="sr-only"
    />
    <span
      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
        checked ? 'border-orange-500' : 'border-zinc-300'
      }`}
    >
      {checked && (
        <motion.span
          layoutId={`radio-dot-${name}`}
          className="h-2.5 w-2.5 rounded-full bg-orange-500"
        />
      )}
    </span>
    <span className="flex items-start gap-2">
      {icon && <span className="text-lg text-orange-500">{icon}</span>}
      <span>
        <span className="block text-sm font-semibold text-zinc-800">{title}</span>
        {subtitle && <span className="block text-xs text-zinc-500">{subtitle}</span>}
      </span>
    </span>
  </motion.label>
)

export default RadioCard
