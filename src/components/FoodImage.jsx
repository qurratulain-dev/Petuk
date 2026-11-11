import fallback from '../assets/hero.jpg'

// Falls back to a local image if the remote one is missing or fails to load
const FoodImage = ({ src, alt = '', className = '' }) => (
  <img
    src={src || fallback}
    alt={alt}
    loading="lazy"
    className={className}
    onError={(e) => {
      e.currentTarget.onerror = null
      e.currentTarget.src = fallback
    }}
  />
)

export default FoodImage
