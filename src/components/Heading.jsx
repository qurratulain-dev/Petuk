import SectionHeading from './ui/SectionHeading'

// Thin compatibility wrapper. All heading styling now lives in the shared
// SectionHeading design system so nothing drifts apart between sections.
const Heading = ({ title, className = 'py-5' }) => (
  <SectionHeading title={title} align="center" bars className={className} />
)

export default Heading
