import { AbstractComponent, type TComponentConfig } from '@course/utils'
import styles from './star-rating.module.css'
import flex from '@course/styles'


/**
 * Expected input:
 * {
 *   root: HTMLElement,
 *   className: string[],
 *   value: number,
 *   onValueChange: (value: number) => void,
 *   readOnly?: boolean
 * }
 *
 * Steps to complete:
 * 1. Init constructor - pass config with className, listeners
 * 2. Provide toHTML template - render star buttons with proper attributes
 * 3. Handle click event - update value and re-render
 * 4. Add afterRender - set ARIA attributes:
 *    - container: role="radiogroup", aria-label="Star Rating", aria-readonly
 *    - each star: role="radio", aria-checked, aria-label="N Star(s)"
 * 5. Add CSS styles for stars
 */

const STAR = '⭐️'
const STARS_COUNT = 5
type TStarRatingProps = {}
export class StarRating extends AbstractComponent<TStarRatingProps> {
  constructor(config: TComponentConfig<TStarRatingProps>) {
    super(config)
  }
  toHTML(): string {
    return '<div>Star Rating</div>'
  }
}
