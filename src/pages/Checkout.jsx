import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TbTruckDelivery, TbClockHour4 } from 'react-icons/tb'
import { MdOutlinePayments } from 'react-icons/md'
import Heading from '../components/Heading'
import CheckoutField from '../components/checkout/CheckoutField'
import RadioCard from '../components/checkout/RadioCard'
import OrderSummary from '../components/checkout/OrderSummary'
import { useCart } from '../context/CartContext'
import { formatPrice, getDeliveryFee } from '../utils/format'
import { isEmail, isPakistaniPhone, isRequired } from '../utils/validation'
import { PAYMENT_LABEL, generateOrderId, saveOrder } from '../utils/orders'

const CITIES = ['Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Gujranwala', 'Multan', 'Other']

const emptyForm = {
  fullName: '',
  phone: '',
  email: '',
  city: '',
  area: '',
  address: '',
  landmark: '',
  timeSlot: 'asap',
  scheduledTime: '',
  payment: 'cod',
  notes: '',
}

const Checkout = () => {
  const { items, subtotal, clear } = useCart()
  const navigate = useNavigate()
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [shakeSignal, setShakeSignal] = useState(0)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const deliveryFee = items.length ? getDeliveryFee(subtotal) : 0
  const total = subtotal + deliveryFee

  if (items.length === 0 && !orderPlaced) {
    return <Navigate to="/cart" replace />
  }

  const setField = (name) => (event) => {
    const value = event.target.value
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!isRequired(form.fullName)) next.fullName = 'Please enter your full name.'
    if (!isRequired(form.phone)) next.phone = 'Phone number is required.'
    else if (!isPakistaniPhone(form.phone)) next.phone = 'Use a valid number e.g. 0300-1234567 or +92 300 1234567.'
    if (isRequired(form.email) && !isEmail(form.email)) next.email = 'Please enter a valid email address.'
    if (!isRequired(form.city)) next.city = 'Please select your city.'
    if (!isRequired(form.area)) next.area = 'Please enter your area or society.'
    if (!isRequired(form.address)) next.address = 'Please enter your full delivery address.'
    if (form.timeSlot === 'schedule' && !isRequired(form.scheduledTime))
      next.scheduledTime = 'Please choose a delivery time.'
    return next
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setShakeSignal((value) => value + 1)
      return
    }

    const order = {
      id: generateOrderId(),
      createdAt: new Date().toISOString(),
      customer: {
        fullName: form.fullName.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        city: form.city,
        area: form.area.trim(),
        address: form.address.trim(),
        landmark: form.landmark.trim(),
        notes: form.notes.trim(),
        deliveryTime:
          form.timeSlot === 'asap' ? 'As soon as possible (~50 min)' : form.scheduledTime,
      },
      items,
      subtotal,
      deliveryFee,
      total,
      paymentKey: form.payment,
      paymentMethod: PAYMENT_LABEL[form.payment],
      status: 'received',
    }

    setOrderPlaced(true)
    saveOrder(order)
    clear()
    navigate(`/order-success/${order.id}`)
  }

  const fieldProps = (name) => ({
    name,
    value: form[name],
    onChange: setField(name),
    error: errors[name],
    shakeSignal,
  })

  return (
    <div className="min-h-screen bg-[#fcfcfc] pb-20 pt-[16vh]">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start">
          <Heading title="Checkout" />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <motion.form
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <section className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-lg shadow-orange-100/40">
              <h2 className="mb-5 flex items-center gap-2 text-lg font-semibold text-zinc-800">
                <TbTruckDelivery className="text-orange-500" /> Delivery details
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <CheckoutField label="Full name" required autoComplete="name" {...fieldProps('fullName')} />
                <CheckoutField
                  label="Phone number"
                  required
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  {...fieldProps('phone')}
                />
                <CheckoutField
                  label="Email (optional)"
                  type="email"
                  autoComplete="email"
                  {...fieldProps('email')}
                />
                <CheckoutField
                  label="City"
                  required
                  as="select"
                  options={CITIES}
                  {...fieldProps('city')}
                />
                <CheckoutField
                  label="Area / Society"
                  required
                  autoComplete="address-level2"
                  {...fieldProps('area')}
                />
                <CheckoutField
                  label="Nearest landmark (optional)"
                  {...fieldProps('landmark')}
                />
                <CheckoutField
                  label="Full delivery address"
                  required
                  as="textarea"
                  rows={3}
                  autoComplete="street-address"
                  className="sm:col-span-2"
                  {...fieldProps('address')}
                />
              </div>
            </section>

            <section className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-lg shadow-orange-100/40">
              <h2 className="mb-5 flex items-center gap-2 text-lg font-semibold text-zinc-800">
                <TbClockHour4 className="text-orange-500" /> Delivery time
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <RadioCard
                  name="timeSlot"
                  value="asap"
                  checked={form.timeSlot === 'asap'}
                  onChange={setField('timeSlot')}
                  title="As soon as possible"
                  subtitle="~50 minutes"
                  icon={<TbTruckDelivery />}
                />
                <RadioCard
                  name="timeSlot"
                  value="schedule"
                  checked={form.timeSlot === 'schedule'}
                  onChange={setField('timeSlot')}
                  title="Schedule for later"
                  subtitle="Pick a time that suits you"
                  icon={<TbClockHour4 />}
                />
              </div>

              {form.timeSlot === 'schedule' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 sm:w-1/2"
                >
                  <CheckoutField
                    label="Preferred time"
                    required
                    type="time"
                    {...fieldProps('scheduledTime')}
                  />
                </motion.div>
              )}
            </section>

            <section className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-lg shadow-orange-100/40">
              <h2 className="mb-2 flex items-center gap-2 text-lg font-semibold text-zinc-800">
                <MdOutlinePayments className="text-orange-500" /> Payment method
              </h2>
              <p className="mb-5 text-xs text-zinc-400">
                Demo only — no real payment is processed. Never share card details.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {Object.entries(PAYMENT_LABEL).map(([key, label]) => (
                  <RadioCard
                    key={key}
                    name="payment"
                    value={key}
                    checked={form.payment === key}
                    onChange={setField('payment')}
                    title={label}
                    subtitle={key === 'cod' ? 'Pay when it arrives' : 'Pay from your wallet'}
                  />
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-lg shadow-orange-100/40">
              <CheckoutField
                label="Order notes (optional)"
                as="textarea"
                rows={3}
                {...fieldProps('notes')}
              />
            </section>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link to="/cart" className="text-sm font-medium text-zinc-500 hover:text-orange-500">
                &larr; Back to cart
              </Link>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full rounded-full bg-orange-500 px-8 py-3 font-semibold text-white shadow-lg shadow-orange-300/50 transition-colors hover:bg-orange-600 sm:w-auto"
              >
                Place order · {formatPrice(total)}
              </motion.button>
            </div>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <OrderSummary items={items} subtotal={subtotal} deliveryFee={deliveryFee} total={total} />
          </motion.aside>
        </div>
      </div>
    </div>
  )
}

export default Checkout
