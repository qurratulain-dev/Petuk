import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IoSearch } from 'react-icons/io5'
import Heading from '../components/Heading'
import ButtonsFilter from '../components/Shop_component/ButtonsFilter'
import ShopCard from '../components/Shop_component/ShopCard'
import { FoodData } from '../components/Shop_component/FoodData'

const SORT_OPTIONS = [
  { value: 'default', label: 'Recommended' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
  { value: 'rating-desc', label: 'Top rated' },
]

const Shop = () => {
  const [active, setActive] = useState('All')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('default')

  const items = useMemo(() => {
    const search = query.trim().toLowerCase()
    let list = FoodData.filter((food) => active === 'All' || food.category === active)
    if (search) {
      list = list.filter((food) =>
        [food.name, food.description, food.category].join(' ').toLowerCase().includes(search)
      )
    }
    const sorted = [...list]
    if (sort === 'price-asc') sorted.sort((a, b) => a.price - b.price)
    else if (sort === 'price-desc') sorted.sort((a, b) => b.price - a.price)
    else if (sort === 'rating-desc') sorted.sort((a, b) => b.rating - a.rating)
    return sorted
  }, [active, query, sort])

  return (
    <div className="min-h-screen bg-[#fcfcfc] pt-[16vh]">
      <div className="mx-auto flex max-w-6xl flex-col items-start px-5">
        <Heading title="SHOP" />
      </div>

      <ButtonsFilter active={active} onChange={setActive} />

      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 pb-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-sm">
          <IoSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search pizzas, burgers, drinks…"
            aria-label="Search menu"
            className="w-full rounded-full border border-zinc-200 bg-white py-2.5 pl-11 pr-4 text-sm text-zinc-700 outline-none transition focus:border-orange-500"
          />
        </div>
        <label className="flex items-center gap-2 text-sm text-zinc-500">
          <span className="hidden sm:inline">Sort</span>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-700 outline-none focus:border-orange-500"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <motion.div
        layout
        className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-5 py-5 lg:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <ShopCard key={item.id} item={item} />
          ))}
        </AnimatePresence>
      </motion.div>

      {items.length === 0 && (
        <p className="mx-auto max-w-6xl px-5 pb-16 text-center text-sm text-zinc-500">
          No dishes match your search. Try a different keyword.
        </p>
      )}
    </div>
  )
}

export default Shop
