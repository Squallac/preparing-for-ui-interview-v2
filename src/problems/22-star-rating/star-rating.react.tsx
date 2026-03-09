import css from './star-rating.module.css'
import flex from '@course/styles'
import cx from '@course/cx'


/**
 * Expected input:
 * {
 *   value: number,
 *   onChange: (value: number) => void,
 *   readonly?: boolean
 * }
 *
 * Steps to complete:
 * 1. Init constructor - define props type with value, onChange, readonly
 * 2. Provide template - render star buttons with proper attributes
 * 3. Handle click event - delegate click to update value
 * 4. Add ARIA attributes:
 *    - container: role="radiogroup", aria-label="Star Rating", aria-readonly
 *    - each star: role="radio", aria-checked, aria-label="N Star(s)"
 * 5. Add CSS styles for stars
 */

const STAR = '⭐️'
const STARS_COUNT = 5
type TProps = {}

export const StarRating = (props: TProps) => {
  return <div>TODO: Implement</div>
}
