import fallback from '../assets/hero.jpg'

// Falls back to a local image if the remote one is missing or fails to load
const FoodImage = ({ src, alt = '', className = '', onLoad, ...rest }) => (
  <img
    src={src || fallback}
    alt={alt}
    loading="lazy"
    className={className}
    onLoad={onLoad}
    onError={(e) => {
      e.currentTarget.onerror = null
      e.currentTarget.src = fallback
    }}
    {...rest}
  />
)

export default FoodImage
